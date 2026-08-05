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
} from "./firebase-config.js?v=20260805-race-firebase-1";


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


/* =========================================================
   MULAKAN FIREBASE
========================================================= */

async function initialiseRaceFirebase() {
  firebaseUser =
    await ensureFirebaseLogin();

  localPlayerUid =
    getOrCreatePlayerUid();

  return {
    firebaseUser,
    localPlayerUid,
    roomId:
      ROOM_ID
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
    JSON.stringify(profile)
  );

  return profile;
}


/* =========================================================
   MASUK LOBBY
========================================================= */

async function joinLobby() {
  await initialiseRaceFirebase();

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

  const currentPlayers =
    playersSnapshot.exists()
      ? playersSnapshot.val()
      : {};

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
      false,

    ready:
      false,

    rejected:
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

    raceStatus:
      "WAITING",

    joinedAt:
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
      false,

    ready:
      false,

    rejected:
      false,

    raceStatus:
      "WAITING"
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
          Object.values(value)
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
  await initialiseRaceFirebase();

  await update(
    ref(
      database,
      `${PLAYERS_PATH}/${localPlayerUid}`
    ),
    {
      ready:
        Boolean(ready),

      updatedAt:
        serverTimestamp()
    }
  );

  saveLocalProfile({
    ready:
      Boolean(ready)
  });
}


/* =========================================================
   LULUSKAN / BATAL LULUS
========================================================= */

async function approvePlayer(
  playerUid,
  approved
) {
  await update(
    ref(
      database,
      `${PLAYERS_PATH}/${playerUid}`
    ),
    {
      approved:
        Boolean(approved),

      rejected:
        false,

      ready:
        approved
          ? false
          : false,

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
    1200
  );
}


/* =========================================================
   KELUAR LOBBY
========================================================= */

async function leaveLobby() {
  await initialiseRaceFirebase();

  await remove(
    ref(
      database,
      `${PLAYERS_PATH}/${localPlayerUid}`
    )
  );

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
}


/* =========================================================
   KAWALAN PERLUMBAAN
========================================================= */

async function saveRaceControl(
  controlData
) {
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
        callback(
          snapshot.exists()
            ? snapshot.val()
            : {
                status:
                  "WAITING"
              }
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
   MULAKAN PERLUMBAAN
========================================================= */

async function startRace(
  configuration
) {
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
        player.approved ===
        true
    );

  if (
    approvedPlayers.length ===
    0
  ) {
    throw new Error(
      "Tiada pemain yang diluluskan."
    );
  }

  const raceStartTime =
    Date.now() + 4000;

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

      selectedKp:
        configuration.selectedKp ||
        [1],

      questionTypes:
        configuration.questionTypes ||
        ["mcq"],

      questionCount:
        Number(
          configuration.questionCount ||
          10
        ),

      startedBy:
        configuration.startedBy ||
        "Guru",

      createdAt:
        serverTimestamp(),

      updatedAt:
        serverTimestamp()
    }
  );

  const updatePromises =
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

            updatedAt:
              serverTimestamp()
          }
        )
    );

  await Promise.all(
    updatePromises
  );

  return {
    startTime:
      raceStartTime,

    playerCount:
      approvedPlayers.length
  };
}


/* =========================================================
   AKTIFKAN STATUS RACING
========================================================= */

async function activateRace() {
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
        player.approved ===
        true
    );

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
}


/* =========================================================
   HENTIKAN PERLUMBAAN
========================================================= */

async function stopRace() {
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
  await initialiseRaceFirebase();

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
  startRace,
  activateRace,
  stopRace,
  resetRace,

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
