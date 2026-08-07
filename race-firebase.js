import {
  database,
  ref,
  set,
  update,
  remove,
  get,
  onValue,
  off,
  serverTimestamp,
  ensureFirebaseLogin
} from "./firebase-config.js?v=20260806-race-firebase-final-1";


const ROOM_ID =
  "c01-main-room";

const PROFILE_KEY =
  "c01_race_player_profile_v1";

const PLAYER_UID_KEY =
  "c01_race_player_uid_v1";

const ROOM_PATH =
  `c01Race/rooms/${ROOM_ID}`;

const PLAYERS_PATH =
  `${ROOM_PATH}/players`;

const CONTROL_PATH =
  `${ROOM_PATH}/control`;

const MAX_PLAYERS = 5;


let firebaseUser =
  null;

let localPlayerUid =
  null;

let activeListeners =
  [];

let activationTimer =
  null;

let serverTimeOffset =
  0;

let serverOffsetListenerStarted =
  false;


/* =========================================================
   MULAKAN FIREBASE
========================================================= */

async function initialiseRaceFirebase() {
  firebaseUser =
    await ensureFirebaseLogin();

  localPlayerUid =
    getOrCreatePlayerUid();

  startServerClockSync();

  return {
    firebaseUser,
    localPlayerUid,
    roomId:
      ROOM_ID
  };
}


/* =========================================================
   PASTIKAN FIREBASE SUDAH BERSEDIA
========================================================= */

async function ensureInitialised() {
  if (
    !firebaseUser ||
    !localPlayerUid
  ) {
    await initialiseRaceFirebase();
  }

  return {
    firebaseUser,
    localPlayerUid
  };
}


/* =========================================================
   ID PEMAIN
========================================================= */

function getOrCreatePlayerUid() {
  let savedUid =
    localStorage.getItem(
      PLAYER_UID_KEY
    );

  if (savedUid) {
    return savedUid;
  }

  const generatedUid =
    firebaseUser?.uid ||
    `player_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2, 9)}`;

  localStorage.setItem(
    PLAYER_UID_KEY,
    generatedUid
  );

  return generatedUid;
}


/* =========================================================
   PROFIL TEMPATAN
========================================================= */

function getLocalProfile() {
  try {
    return JSON.parse(
      localStorage.getItem(
        PROFILE_KEY
      ) || "null"
    );

  } catch (error) {
    console.error(
      "Profil tempatan gagal dibaca:",
      error
    );

    return null;
  }
}


function saveLocalProfile(
  updates
) {
  const current =
    getLocalProfile() || {};

  const profile = {
    ...current,
    ...updates,

    updatedAt:
      new Date().toISOString()
  };

  localStorage.setItem(
    PROFILE_KEY,
    JSON.stringify(
      profile
    )
  );

  return profile;
}


/* =========================================================
   MASUK LOBBY
========================================================= */

async function joinLobby() {
  await ensureInitialised();

  const profile =
    getLocalProfile();

  if (
    !profile?.name ||
    !profile?.studentId
  ) {
    throw new Error(
      "Profil pelajar belum lengkap."
    );
  }

  const playersSnapshot =
    await get(
      ref(
        database,
        PLAYERS_PATH
      )
    );

  let currentPlayers =
    playersSnapshot.exists()
      ? playersSnapshot.val()
      : {};

  /*
    Bersihkan rekod lama daripada auth pengguna/peranti yang sama
    sebelum semak kapasiti lobby.
  */
  const staleOwnIds =
    Object.entries(
      currentPlayers
    )
      .filter(
        ([uid, player]) =>
          uid !== localPlayerUid &&
          player?.authUid === firebaseUser?.uid
      )
      .map(([uid]) => uid);

  if (staleOwnIds.length) {
    await Promise.allSettled(
      staleOwnIds.map(
        uid =>
          remove(
            ref(
              database,
              `${PLAYERS_PATH}/${uid}`
            )
          )
      )
    );

    staleOwnIds.forEach(
      uid => {
        delete currentPlayers[uid];
      }
    );
  }

  const activePlayerIds =
    Object.keys(
      currentPlayers
    );

  const alreadyJoined =
    Boolean(
      currentPlayers[
        localPlayerUid
      ]
    );

  if (
    !alreadyJoined &&
    activePlayerIds.length >=
      MAX_PLAYERS
  ) {
    throw new Error(
      "Lobby telah penuh. Maksimum 5 pemain."
    );
  }

  /*
    Jika pemain masuk semula, jangan batalkan
    kelulusan sedia ada secara tidak sengaja.
  */

  const existingPlayer =
    currentPlayers[
      localPlayerUid
    ] || {};

  const playerData = {
    uid:
      localPlayerUid,

    authUid:
      firebaseUser.uid,

    name:
      profile.name,

    studentId:
      profile.studentId,

    carModel:
      profile.carModel ||
      "formula",

    carModelNameMs:
      profile.carModelNameMs ||
      "Formula Racer",

    carModelNameEn:
      profile.carModelNameEn ||
      "Formula Racer",

    carIcon:
      profile.carIcon ||
      "🏎️",

    carColour:
      profile.carColour ||
      "red",

    carColourNameMs:
      profile.carColourNameMs ||
      "Merah",

    carColourNameEn:
      profile.carColourNameEn ||
      "Red",

    carNumber:
      profile.carNumber ||
      "01",

    language:
      profile.language ||
      "ms",

    audioEnabled:
      profile.audioEnabled !== false,

    approved:
      existingPlayer.approved === true,

    ready:
      existingPlayer.ready === true,

    rejected:
      false,

    score:
      Number(
        existingPlayer.score || 0
      ),

    progress:
      Number(
        existingPlayer.progress || 0
      ),

    correctAnswers:
      Number(
        existingPlayer.correctAnswers ||
        0
      ),

    wrongAnswers:
      Number(
        existingPlayer.wrongAnswers ||
        0
      ),

    currentQuestion:
      Number(
        existingPlayer.currentQuestion ||
        0
      ),

    speed:
      Number(
        existingPlayer.speed || 0
      ),

    raceStatus:
      existingPlayer.raceStatus ||
      "WAITING",

    joinedAt:
      existingPlayer.joinedAt ||
      serverTimestamp(),

    updatedAt:
      serverTimestamp()
  };

  await set(
    ref(
      database,
      `${PLAYERS_PATH}/${localPlayerUid}`
    ),
    playerData
  );

  saveLocalProfile({
    approved:
      playerData.approved,

    ready:
      playerData.ready,

    rejected:
      false,

    raceStatus:
      playerData.raceStatus
  });

  return playerData;
}


/* =========================================================
   DENGAR SEMUA PEMAIN
========================================================= */

function listenToPlayers(
  callback,
  errorCallback
) {
  const playersRef =
    ref(
      database,
      PLAYERS_PATH
    );

  const listener =
    onValue(
      playersRef,

      snapshot => {
        const value =
          snapshot.exists()
            ? snapshot.val()
            : {};

        const players =
          Object.values(
            value
          )
            .sort(
              (
                first,
                second
              ) => {
                const firstTime =
                  Number(
                    first.joinedAt || 0
                  );

                const secondTime =
                  Number(
                    second.joinedAt || 0
                  );

                return (
                  firstTime -
                  secondTime
                );
              }
            )
            .slice(
              0,
              MAX_PLAYERS
            );

        callback(
          players
        );
      },

      error => {
        console.error(
          "Pemain gagal dibaca:",
          error
        );

        errorCallback?.(
          error
        );
      }
    );

  activeListeners.push({
    ref:
      playersRef,

    listener
  });

  return () => {
    off(
      playersRef,
      "value",
      listener
    );
  };
}


/* =========================================================
   DENGAR PROFIL PEMAIN SENDIRI
========================================================= */

function listenToOwnPlayer(
  callback,
  errorCallback
) {
  if (!localPlayerUid) {
    throw new Error(
      "Firebase Race belum dimulakan."
    );
  }

  const playerRef =
    ref(
      database,
      `${PLAYERS_PATH}/${localPlayerUid}`
    );

  const listener =
    onValue(
      playerRef,

      snapshot => {
        if (
          !snapshot.exists()
        ) {
          callback(
            null
          );

          return;
        }

        const player =
          snapshot.val();

        saveLocalProfile({
          approved:
            player.approved === true,

          ready:
            player.ready === true,

          rejected:
            player.rejected === true,

          raceStatus:
            player.raceStatus ||
            "WAITING",

          progress:
            Number(
              player.progress || 0
            ),

          score:
            Number(
              player.score || 0
            ),

          speed:
            Number(
              player.speed || 0
            ),

          currentQuestion:
            Number(
              player.currentQuestion ||
              0
            ),

          correctAnswers:
            Number(
              player.correctAnswers ||
              0
            ),

          wrongAnswers:
            Number(
              player.wrongAnswers ||
              0
            )
        });

        callback(
          player
        );
      },

      error => {
        console.error(
          "Profil pemain gagal dibaca:",
          error
        );

        errorCallback?.(
          error
        );
      }
    );

  activeListeners.push({
    ref:
      playerRef,

    listener
  });

  return () => {
    off(
      playerRef,
      "value",
      listener
    );
  };
}


/* =========================================================
   STATUS SEDIA
========================================================= */

async function setReadyStatus(
  ready
) {
  await ensureInitialised();

  await update(
    ref(
      database,
      `${PLAYERS_PATH}/${localPlayerUid}`
    ),
    {
      ready:
        Boolean(
          ready
        ),

      updatedAt:
        serverTimestamp()
    }
  );

  saveLocalProfile({
    ready:
      Boolean(
        ready
      )
  });
}


/* =========================================================
   LULUSKAN / BATAL LULUS
========================================================= */

async function approvePlayer(
  playerUid,
  approved
) {
  await ensureInitialised();

  await update(
    ref(
      database,
      `${PLAYERS_PATH}/${playerUid}`
    ),
    {
      approved:
        Boolean(
          approved
        ),

      rejected:
        false,

      ready:
        false,

      raceStatus:
        "WAITING",

      updatedAt:
        serverTimestamp()
    }
  );
}


/* =========================================================
   KELUARKAN PEMAIN
========================================================= */

async function rejectPlayer(
  playerUid
) {
  await ensureInitialised();

  await update(
    ref(
      database,
      `${PLAYERS_PATH}/${playerUid}`
    ),
    {
      approved:
        false,

      ready:
        false,

      rejected:
        true,

      raceStatus:
        "REJECTED",

      updatedAt:
        serverTimestamp()
    }
  );

  window.setTimeout(
    async () => {
      try {
        await remove(
          ref(
            database,
            `${PLAYERS_PATH}/${playerUid}`
          )
        );

      } catch (error) {
        console.warn(
          "Rekod pemain gagal dipadam:",
          error
        );
      }
    },
    1500
  );
}


/* =========================================================
   KELUAR LOBBY
========================================================= */

async function leaveLobby() {
  await ensureInitialised();

  const savedUid =
    localStorage.getItem(
      PLAYER_UID_KEY
    );

  const candidateIds =
    [
      localPlayerUid,
      savedUid,
      firebaseUser?.uid
    ]
      .filter(Boolean);

  /*
    Buang rekod terus berdasarkan UID yang diketahui.
  */
  await Promise.allSettled(
    [...new Set(candidateIds)]
      .map(
        uid =>
          remove(
            ref(
              database,
              `${PLAYERS_PATH}/${uid}`
            )
          )
      )
  );

  /*
    Safety cleanup:
    Jika pernah tercipta rekod lama menggunakan UID berbeza
    tetapi authUid sama pada peranti ini, buang rekod itu juga.
  */
  try {
    const snapshot =
      await get(
        ref(
          database,
          PLAYERS_PATH
        )
      );

    if (snapshot.exists()) {
      const value =
        snapshot.val() || {};

      const staleIds =
        Object.entries(value)
          .filter(
            ([uid, player]) =>
              uid !== localPlayerUid &&
              player &&
              (
                player.authUid === firebaseUser?.uid ||
                candidateIds.includes(player.uid)
              )
          )
          .map(([uid]) => uid);

      await Promise.allSettled(
        staleIds.map(
          uid =>
            remove(
              ref(
                database,
                `${PLAYERS_PATH}/${uid}`
              )
            )
        )
      );
    }

  } catch (error) {
    console.warn(
      "Pembersihan rekod lama pemain gagal:",
      error
    );
  }

  saveLocalProfile({
    approved:
      false,

    ready:
      false,

    rejected:
      false,

    raceStatus:
      "LEFT"
  });

  return true;
}


/* =========================================================
   SIMPAN KAWALAN PERLUMBAAN
========================================================= */

async function saveRaceControl(
  controlData
) {
  await ensureInitialised();

  await update(
    ref(
      database,
      CONTROL_PATH
    ),
    {
      ...controlData,

      updatedAt:
        serverTimestamp()
    }
  );
}


/* =========================================================
   DENGAR KAWALAN PERLUMBAAN
========================================================= */

function listenToRaceControl(
  callback,
  errorCallback
) {
  const controlRef =
    ref(
      database,
      CONTROL_PATH
    );

  const listener =
    onValue(
      controlRef,

      snapshot => {
        const control =
          snapshot.exists()
            ? snapshot.val()
            : {
                status:
                  "WAITING"
              };

        callback(
          control
        );
      },

      error => {
        console.error(
          "Race control gagal dibaca:",
          error
        );

        errorCallback?.(
          error
        );
      }
    );

  activeListeners.push({
    ref:
      controlRef,

    listener
  });

  return () => {
    off(
      controlRef,
      "value",
      listener
    );
  };
}


/* =========================================================
   MASA FIREBASE SERVER
========================================================= */

function startServerClockSync() {
  if (serverOffsetListenerStarted) return;

  serverOffsetListenerStarted = true;

  const offsetRef =
    ref(database, ".info/serverTimeOffset");

  onValue(
    offsetRef,
    snapshot => {
      serverTimeOffset =
        Number(snapshot.val() || 0);
    },
    error => {
      console.warn(
        "Offset masa Firebase gagal dibaca:",
        error
      );
      serverTimeOffset = 0;
    }
  );
}

function getServerNow() {
  return Date.now() +
    Number(serverTimeOffset || 0);
}


/* =========================================================
   MULAKAN PERLUMBAAN
========================================================= */

async function startRace(
  configuration = {}
) {
  await ensureInitialised();

  clearActivationTimer();

  const playersSnapshot =
    await get(
      ref(
        database,
        PLAYERS_PATH
      )
    );

  const players =
    playersSnapshot.exists()
      ? Object.values(
          playersSnapshot.val()
        )
      : [];

  const approvedPlayers =
    players.filter(
      player =>
        player.approved === true
    );

  if (
    approvedPlayers.length === 0
  ) {
    throw new Error(
      "Tiada pemain yang diluluskan."
    );
  }

  const selectedKp =
    Array.isArray(
      configuration.selectedKp
    ) &&
    configuration.selectedKp.length
      ? configuration.selectedKp.map(
          Number
        )
      : [1];

  const questionTypes =
    Array.isArray(
      configuration.questionTypes
    ) &&
    configuration.questionTypes.length
      ? configuration.questionTypes
      : ["mcq"];

  const questionCount =
    Math.max(
      1,
      Number(
        configuration.questionCount ||
        10
      )
    );

  /*
    Countdown 5 saat supaya semua peranti sempat
    menerima arahan Firebase sebelum 3-2-1.
  */

  const countdownDuration =
    5000;

  const raceStartTime =
    getServerNow() +
    countdownDuration;

  /*
    Simpan arahan perlumbaan terlebih dahulu.
  */

  await set(
    ref(
      database,
      CONTROL_PATH
    ),
    {
      status:
        "COUNTDOWN",

      startTime:
        raceStartTime,

      selectedKp,

      questionTypes,

      questionCount,

      startedBy:
        configuration.startedBy ||
        "Guru",

      raceId:
        `race_${Date.now()}`,

      createdAt:
        serverTimestamp(),

      updatedAt:
        serverTimestamp()
    }
  );

  /*
    Reset semua pemain yang diluluskan.
  */

  await Promise.all(
    approvedPlayers.map(
      player =>
        update(
          ref(
            database,
            `${PLAYERS_PATH}/${player.uid}`
          ),
          {
            raceStatus:
              "COUNTDOWN",

            currentQuestion:
              0,

            progress:
              0,

            score:
              0,

            correctAnswers:
              0,

            wrongAnswers:
              0,

            speed:
              0,

            finishTime:
              null,

            updatedAt:
              serverTimestamp()
          }
        )
    )
  );

  /*
    PENTING:
    Selepas countdown tamat, status ditukar
    kepada RUNNING secara automatik.
  */

  const delay =
    Math.max(
      0,
      raceStartTime -
      getServerNow()
    );

  activationTimer =
    window.setTimeout(
      async () => {
        try {
          await activateRace();

        } catch (error) {
          console.error(
            "Perlumbaan gagal diaktifkan selepas countdown:",
            error
          );
        }
      },
      delay
    );

  return {
    startTime:
      raceStartTime,

    playerCount:
      approvedPlayers.length,

    selectedKp,

    questionTypes,

    questionCount
  };
}


/* =========================================================
   AKTIFKAN STATUS RACING
========================================================= */

async function activateRace() {
  await ensureInitialised();

  clearActivationTimer();

  /*
    Semak status semasa supaya tidak mengaktifkan
    perlumbaan yang telah dihentikan atau direset.
  */

  const controlSnapshot =
    await get(
      ref(
        database,
        CONTROL_PATH
      )
    );

  const currentControl =
    controlSnapshot.exists()
      ? controlSnapshot.val()
      : {};

  if (
    [
      "STOPPED",
      "WAITING",
      "FINISHED"
    ].includes(
      currentControl.status
    )
  ) {
    console.warn(
      "Activate race dibatalkan kerana status semasa:",
      currentControl.status
    );

    return false;
  }

  const playersSnapshot =
    await get(
      ref(
        database,
        PLAYERS_PATH
      )
    );

  const players =
    playersSnapshot.exists()
      ? Object.values(
          playersSnapshot.val()
        )
      : [];

  const approvedPlayers =
    players.filter(
      player =>
        player.approved === true
    );

  if (
    approvedPlayers.length === 0
  ) {
    throw new Error(
      "Tiada pemain diluluskan untuk memulakan perlumbaan."
    );
  }

  /*
    Tukar kawalan global kepada RUNNING.
  */

  await update(
    ref(
      database,
      CONTROL_PATH
    ),
    {
      status:
        "RUNNING",

      actualStartTime:
        serverTimestamp(),

      updatedAt:
        serverTimestamp()
    }
  );

  /*
    Tukar setiap pemain kepada RACING.
  */

  await Promise.all(
    approvedPlayers.map(
      player =>
        update(
          ref(
            database,
            `${PLAYERS_PATH}/${player.uid}`
          ),
          {
            raceStatus:
              "RACING",

            speed:
              80,

            updatedAt:
              serverTimestamp()
          }
        )
    )
  );

  return true;
}


/* =========================================================
   HENTIKAN PERLUMBAAN
========================================================= */

async function stopRace() {
  await ensureInitialised();

  clearActivationTimer();

  await update(
    ref(
      database,
      CONTROL_PATH
    ),
    {
      status:
        "STOPPED",

      stoppedAt:
        serverTimestamp(),

      updatedAt:
        serverTimestamp()
    }
  );

  const snapshot =
    await get(
      ref(
        database,
        PLAYERS_PATH
      )
    );

  if (
    !snapshot.exists()
  ) {
    return;
  }

  const players =
    Object.values(
      snapshot.val()
    );

  await Promise.all(
    players.map(
      player =>
        update(
          ref(
            database,
            `${PLAYERS_PATH}/${player.uid}`
          ),
          {
            raceStatus:
              "STOPPED",

            speed:
              0,

            updatedAt:
              serverTimestamp()
          }
        )
    )
  );
}


/* =========================================================
   RESET PERLUMBAAN
========================================================= */

async function resetRace() {
  await ensureInitialised();

  clearActivationTimer();

  await set(
    ref(
      database,
      CONTROL_PATH
    ),
    {
      status:
        "WAITING",

      selectedKp:
        [1],

      questionTypes:
        ["mcq"],

      questionCount:
        10,

      startTime:
        null,

      actualStartTime:
        null,

      updatedAt:
        serverTimestamp()
    }
  );

  const snapshot =
    await get(
      ref(
        database,
        PLAYERS_PATH
      )
    );

  if (
    !snapshot.exists()
  ) {
    return;
  }

  const players =
    Object.values(
      snapshot.val()
    );

  await Promise.all(
    players.map(
      player =>
        update(
          ref(
            database,
            `${PLAYERS_PATH}/${player.uid}`
          ),
          {
            ready:
              false,

            score:
              0,

            progress:
              0,

            correctAnswers:
              0,

            wrongAnswers:
              0,

            currentQuestion:
              0,

            speed:
              0,

            finishTime:
              null,

            raceStatus:
              "WAITING",

            updatedAt:
              serverTimestamp()
          }
        )
    )
  );
}


/* =========================================================
   KEMAS KINI PRESTASI PEMAIN
========================================================= */

async function updatePlayerPerformance(
  data
) {
  await ensureInitialised();

  await update(
    ref(
      database,
      `${PLAYERS_PATH}/${localPlayerUid}`
    ),
    {
      ...data,

      updatedAt:
        serverTimestamp()
    }
  );

  saveLocalProfile(
    data
  );
}


/* =========================================================
   TAMATKAN PERLUMBAAN GLOBAL
========================================================= */

async function finishRace() {
  await ensureInitialised();

  clearActivationTimer();

  await update(
    ref(
      database,
      CONTROL_PATH
    ),
    {
      status:
        "FINISHED",

      finishedAt:
        serverTimestamp(),

      updatedAt:
        serverTimestamp()
    }
  );
}


/* =========================================================
   BERSIHKAN TIMER
========================================================= */

function clearActivationTimer() {
  if (
    activationTimer
  ) {
    window.clearTimeout(
      activationTimer
    );

    activationTimer =
      null;
  }
}


/* =========================================================
   BERSIHKAN LISTENER
========================================================= */

function stopAllListeners() {
  activeListeners.forEach(
    item => {
      try {
        off(
          item.ref
        );

      } catch (error) {
        console.warn(
          "Listener gagal dihentikan:",
          error
        );
      }
    }
  );

  activeListeners = [];
}


/* =========================================================
   EXPORT API
========================================================= */

const RaceFirebase = {
  ROOM_ID,
  MAX_PLAYERS,

  initialiseRaceFirebase,

  getLocalProfile,
  saveLocalProfile,

  joinLobby,
  leaveLobby,

  listenToPlayers,
  listenToOwnPlayer,
  listenToRaceControl,

  setReadyStatus,
  approvePlayer,
  rejectPlayer,

  saveRaceControl,
  getServerNow,
  startRace,
  activateRace,
  stopRace,
  resetRace,
  finishRace,

  updatePlayerPerformance,

  stopAllListeners,

  getPlayerUid() {
    return localPlayerUid;
  }
};


window.RaceFirebase =
  RaceFirebase;


export {
  RaceFirebase
};