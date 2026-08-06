import {
  RaceFirebase
} from "./race-firebase.js?v=20260806-final-lock-1";


const RACE_CONFIG_KEY =
  "c01_race_config_v1";

const ADMIN_NAME_KEY =
  "c01_race_admin_name_v1";

const MAX_PLAYERS = 5;


let players = [];

let raceControl = {
  status: "WAITING",
  selectedKp: [1],
  questionTypes: ["mcq"],
  questionCount: 10
};

let selectedKp = [1];

let selectedQuestionCount = 10;

let audioEnabled = true;

let teacherName =
  localStorage.getItem(
    ADMIN_NAME_KEY
  ) || "";


/* =========================================================
   MULA SISTEM
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  initialiseAdmin
);


async function initialiseAdmin() {
  ensureTeacherName();
  loadLocalConfiguration();

  createKpButtons();

  initialiseQuestionCountButtons();

  initialiseQuestionTypeControls();

  initialiseMainButtons();

  initialiseHeaderButtons();

  renderPlayerGrid();

  renderLiveMonitor();

  updateStatistics();

  try {
    await RaceFirebase
      .initialiseRaceFirebase();

    setConnectionStatus(
      "REALTIME AKTIF",
      false
    );

    RaceFirebase.listenToPlayers(
      incomingPlayers => {
        players =
          incomingPlayers.slice(
            0,
            MAX_PLAYERS
          );

        renderAll();
      },

      error => {
        showFirebaseError(
          "Senarai pemain gagal dibaca.",
          error
        );
      }
    );

    RaceFirebase.listenToRaceControl(
      control => {
        raceControl =
          control || {
            status: "WAITING"
          };

        synchroniseControlDisplay();

        renderAll();
      },

      error => {
        showFirebaseError(
          "Race Control gagal dibaca.",
          error
        );
      }
    );

  } catch (error) {
    showFirebaseError(
      "Firebase gagal dimulakan.",
      error
    );
  }
}


/* =========================================================
   KONFIGURASI TEMPATAN
========================================================= */

function loadLocalConfiguration() {
  try {
    const saved =
      JSON.parse(
        localStorage.getItem(
          RACE_CONFIG_KEY
        ) || "null"
      );

    if (!saved) {
      return;
    }

    selectedKp =
      Array.isArray(
        saved.selectedKp
      ) &&
      saved.selectedKp.length
        ? saved.selectedKp
        : [1];

    selectedQuestionCount =
      Number(
        saved.questionCount
      ) || 10;

    audioEnabled =
      saved.audioEnabled !== false;

  } catch (error) {
    console.warn(
      "Tetapan lama gagal dibaca:",
      error
    );
  }
}


function saveLocalConfiguration() {
  localStorage.setItem(
    RACE_CONFIG_KEY,
    JSON.stringify({
      selectedKp,

      questionTypes:
        getSelectedQuestionTypes(),

      questionCount:
        selectedQuestionCount,

      audioEnabled,

      updatedAt:
        new Date().toISOString()
    })
  );
}


/* =========================================================
   PILIHAN KP01–KP15
========================================================= */

function createKpButtons() {
  const container =
    document.getElementById(
      "kpSelector"
    );

  container.innerHTML = "";

  for (
    let kpNumber = 1;
    kpNumber <= 15;
    kpNumber++
  ) {
    const button =
      document.createElement(
        "button"
      );

    button.type =
      "button";

    button.className =
      "kp-button";

    button.dataset.kp =
      String(kpNumber);

    button.textContent =
      `KP${String(
        kpNumber
      ).padStart(2, "0")}`;

    button.classList.toggle(
      "selected",
      selectedKp.includes(
        kpNumber
      )
    );

    button.addEventListener(
      "click",
      () => {
        toggleKpSelection(
          kpNumber
        );
      }
    );

    container.appendChild(
      button
    );
  }
}


function toggleKpSelection(
  kpNumber
) {
  if (
    selectedKp.includes(
      kpNumber
    )
  ) {
    if (
      selectedKp.length === 1
    ) {
      showToast(
        "Sekurang-kurangnya satu KP mesti dipilih."
      );

      return;
    }

    selectedKp =
      selectedKp.filter(
        number =>
          number !== kpNumber
      );

  } else {
    selectedKp.push(
      kpNumber
    );

    selectedKp.sort(
      (
        first,
        second
      ) =>
        first - second
    );
  }

  document
    .querySelectorAll(
      ".kp-button"
    )
    .forEach(button => {
      button.classList.toggle(
        "selected",

        selectedKp.includes(
          Number(
            button.dataset.kp
          )
        )
      );
    });

  saveLocalConfiguration();
}


/* =========================================================
   JENIS SOALAN
========================================================= */

function initialiseQuestionTypeControls() {
  document
    .querySelectorAll(
      '.check-card input[type="checkbox"]'
    )
    .forEach(input => {
      input.addEventListener(
        "change",
        () => {
          const selectedTypes =
            getSelectedQuestionTypes();

          if (
            selectedTypes.length === 0
          ) {
            input.checked =
              true;

            showToast(
              "Pilih sekurang-kurangnya satu jenis soalan."
            );

            return;
          }

          saveLocalConfiguration();
        }
      );
    });
}


function getSelectedQuestionTypes() {
  return [
    ...document.querySelectorAll(
      '.check-card input[type="checkbox"]:checked'
    )
  ].map(
    input =>
      input.value
  );
}


/* =========================================================
   BILANGAN SOALAN
========================================================= */

function initialiseQuestionCountButtons() {
  document
    .querySelectorAll(
      ".count-button"
    )
    .forEach(button => {
      const count =
        Number(
          button.dataset.count
        );

      button.classList.toggle(
        "selected",
        count ===
          selectedQuestionCount
      );

      button.addEventListener(
        "click",
        () => {
          selectedQuestionCount =
            count;

          document
            .querySelectorAll(
              ".count-button"
            )
            .forEach(item => {
              item.classList.remove(
                "selected"
              );
            });

          button.classList.add(
            "selected"
          );

          saveLocalConfiguration();

          showToast(
            `${count} soalan dipilih.`
          );
        }
      );
    });
}


/* =========================================================
   BUTANG UTAMA
========================================================= */

function initialiseMainButtons() {
  document
    .getElementById(
      "startRaceButton"
    )
    .addEventListener(
      "click",
      startRace
    );

  document
    .getElementById(
      "resetRaceButton"
    )
    .addEventListener(
      "click",
      resetRace
    );

  document
    .getElementById(
      "stopRaceButton"
    )
    .addEventListener(
      "click",
      stopRace
    );
}


function initialiseHeaderButtons() {
  document
    .getElementById(
      "teacherNameButton"
    )
    .addEventListener(
      "click",
      changeTeacherName
    );

  document
    .getElementById(
      "audioToggle"
    )
    .addEventListener(
      "click",
      toggleAudio
    );

  document
    .getElementById(
      "fullscreenButton"
    )
    .addEventListener(
      "click",
      toggleFullscreen
    );

  document
    .getElementById(
      "logoutButton"
    )
    .addEventListener(
      "click",
      logoutAdmin
    );

  updateAudioButton();
  updateTeacherNameButton();
}


/* =========================================================
   NAMA GURU
========================================================= */

function ensureTeacherName() {
  if (teacherName.trim()) {
    return;
  }

  const enteredName =
    window.prompt(
      "Masukkan nama guru / pegawai penilai:",
      ""
    );

  teacherName =
    String(enteredName || "Pegawai Penilai")
      .trim() || "Pegawai Penilai";

  localStorage.setItem(
    ADMIN_NAME_KEY,
    teacherName
  );
}


function changeTeacherName() {
  const enteredName =
    window.prompt(
      "Masukkan nama guru / pegawai penilai:",
      teacherName
    );

  if (enteredName === null) {
    return;
  }

  const cleanedName =
    String(enteredName).trim();

  if (!cleanedName) {
    showToast(
      "Nama guru tidak boleh kosong."
    );

    return;
  }

  teacherName =
    cleanedName;

  localStorage.setItem(
    ADMIN_NAME_KEY,
    teacherName
  );

  updateTeacherNameButton();

  showToast(
    `Nama guru ditukar kepada ${teacherName}.`
  );
}


function updateTeacherNameButton() {
  const button =
    document.getElementById(
      "teacherNameButton"
    );

  if (!button) {
    return;
  }

  button.textContent =
    `👩‍🏫 ${teacherName || "NAMA GURU"}`;
}


/* =========================================================
   PAPARAN KESELURUHAN
========================================================= */

function renderAll() {
  renderPlayerGrid();

  renderLiveMonitor();

  updateStatistics();

  updateRaceStatus();
}


/* =========================================================
   STATISTIK
========================================================= */

function updateStatistics() {
  const approvedCount =
    players.filter(
      player =>
        player.approved === true
    ).length;

  const readyCount =
    players.filter(
      player =>
        player.ready === true
    ).length;

  document.getElementById(
    "totalPlayers"
  ).textContent =
    players.length;

  document.getElementById(
    "approvedPlayers"
  ).textContent =
    approvedCount;

  document.getElementById(
    "readyPlayers"
  ).textContent =
    readyCount;

  document.getElementById(
    "playerCounter"
  ).textContent =
    `${players.length} / ${MAX_PLAYERS}`;
}


/* =========================================================
   GRID 5 PEMAIN
========================================================= */

function renderPlayerGrid() {
  const container =
    document.getElementById(
      "playerGrid"
    );

  const slots = [];

  for (
    let index = 0;
    index < MAX_PLAYERS;
    index++
  ) {
    slots.push(
      createPlayerSlot(
        players[index] || null,
        index
      )
    );
  }

  container.innerHTML =
    slots.join("");
}


function createPlayerSlot(
  player,
  index
) {
  if (!player) {
    return `
      <article class="admin-player-slot empty">

        <span class="slot-number">
          ${index + 1}
        </span>

        <span class="slot-car">
          🏁
        </span>

        <strong class="slot-name">
          SLOT KOSONG
        </strong>

        <span class="slot-id">
          Menunggu pemain
        </span>

        <span class="slot-status">
          BELUM MASUK
        </span>

      </article>
    `;
  }

  let statusClass = "";

  let statusText =
    "MENUNGGU";

  if (
    player.approved === true
  ) {
    statusClass =
      "approved";

    statusText =
      "DILULUSKAN";
  }

  if (
    player.ready === true
  ) {
    statusClass =
      "approved";

    statusText =
      "SEDIA";
  }

  return `
    <article class="admin-player-slot">

      <span class="slot-number">
        ${index + 1}
      </span>

      <span class="slot-car">
        ${escapeHtml(
          player.carIcon ||
          "🏎️"
        )}
      </span>

      <strong class="slot-name">
        ${escapeHtml(
          player.name ||
          "Pelajar"
        )}
      </strong>

      <span class="slot-id">
        ${escapeHtml(
          player.studentId ||
          "-"
        )}
      </span>

      <span class="slot-status ${statusClass}">
        ${statusText}
      </span>

      <div class="player-actions">

        <button
          class="player-action-button approve-button"
          type="button"
          data-action="approve"
          data-uid="${escapeHtml(
            player.uid
          )}"
        >
          ${
            player.approved
              ? "BATAL LULUS"
              : "LULUSKAN"
          }
        </button>

        <button
          class="player-action-button reject-button"
          type="button"
          data-action="remove"
          data-uid="${escapeHtml(
            player.uid
          )}"
        >
          KELUARKAN
        </button>

      </div>

    </article>
  `;
}


/* =========================================================
   EVENT BUTANG PEMAIN
========================================================= */

document.addEventListener(
  "click",
  async event => {
    const button =
      event.target.closest(
        "[data-action][data-uid]"
      );

    if (!button) {
      return;
    }

    const uid =
      button.dataset.uid;

    const player =
      players.find(
        item =>
          item.uid === uid
      );

    if (!player) {
      return;
    }

    button.disabled =
      true;

    try {
      if (
        button.dataset.action ===
        "approve"
      ) {
        await RaceFirebase
          .approvePlayer(
            uid,
            player.approved !== true
          );

        showToast(
          player.approved
            ? `Kelulusan ${player.name} dibatalkan.`
            : `${player.name} diluluskan.`
        );
      }

      if (
        button.dataset.action ===
        "remove"
      ) {
        const confirmed =
          window.confirm(
            `Keluarkan ${player.name} daripada lobby?`
          );

        if (!confirmed) {
          button.disabled =
            false;

          return;
        }

        await RaceFirebase
          .rejectPlayer(
            uid
          );

        showToast(
          `${player.name} dikeluarkan.`
        );
      }

    } catch (error) {
      showFirebaseError(
        "Tindakan pemain gagal.",
        error
      );

      button.disabled =
        false;
    }
  }
);


/* =========================================================
   LIVE MONITOR
========================================================= */

function renderLiveMonitor() {
  const container =
    document.getElementById(
      "liveMonitor"
    );

  const cards = [];

  for (
    let index = 0;
    index < MAX_PLAYERS;
    index++
  ) {
    const player =
      players[index];

    if (!player) {
      cards.push(`
        <article class="live-card">

          <h3>
            SLOT ${index + 1}
          </h3>

          <p>
            Belum ada pemain.
          </p>

        </article>
      `);

      continue;
    }

    const correct =
      Number(
        player.correctAnswers ||
        0
      );

    const wrong =
      Number(
        player.wrongAnswers ||
        0
      );

    const answered =
      correct + wrong;

    const accuracy =
      answered
        ? Math.round(
            (
              correct /
              answered
            ) * 100
          )
        : 0;

    const progress =
      Math.min(
        Number(
          player.progress || 0
        ),
        100
      );

    cards.push(`
      <article class="live-card">

        <h3>
          ${escapeHtml(
            player.name ||
            "Pelajar"
          )}
        </h3>

        <div class="live-row">
          <span>Soalan</span>
          <strong>
            ${Number(
              player.currentQuestion ||
              0
            )}/${selectedQuestionCount}
          </strong>
        </div>

        <div class="live-row">
          <span>Markah</span>
          <strong>
            ${Number(
              player.score || 0
            )}%
          </strong>
        </div>

        <div class="live-row">
          <span>Ketepatan</span>
          <strong>
            ${accuracy}%
          </strong>
        </div>

        <div class="live-row">
          <span>Kelajuan</span>
          <strong>
            ${Number(
              player.speed || 0
            )} km/j
          </strong>
        </div>

        <div class="live-row">
          <span>Status</span>
          <strong>
            ${escapeHtml(
              player.raceStatus ||
              "WAITING"
            )}
          </strong>
        </div>

        <div class="progress-track">

          <div
            class="progress-bar"
            style="width:${progress}%"
          ></div>

        </div>

      </article>
    `);
  }

  container.innerHTML =
    cards.join("");
}


/* =========================================================
   MULA PERLUMBAAN
========================================================= */

async function startRace() {
  const approvedPlayers =
    players.filter(
      player =>
        player.approved === true
    );

  if (
    approvedPlayers.length === 0
  ) {
    showToast(
      "Luluskan sekurang-kurangnya seorang pemain."
    );

    return;
  }

  const unreadyPlayers =
    approvedPlayers.filter(
      player =>
        player.ready !== true
    );

  if (
    unreadyPlayers.length > 0
  ) {
    const names =
      unreadyPlayers
        .map(
          player =>
            player.name
        )
        .join(", ");

    const continueRace =
      window.confirm(
        `${names} belum menekan Sedia. Mulakan juga?`
      );

    if (!continueRace) {
      return;
    }
  }

  const questionTypes =
    getSelectedQuestionTypes();

  if (
    questionTypes.length === 0
  ) {
    showToast(
      "Pilih sekurang-kurangnya satu jenis soalan."
    );

    return;
  }

  const startButton =
    document.getElementById(
      "startRaceButton"
    );

  startButton.disabled =
    true;

  try {
    saveLocalConfiguration();

    const result =
      await RaceFirebase.startRace({
        selectedKp,

        questionTypes,

        questionCount:
          selectedQuestionCount,

        startedBy:
          teacherName
      });

    showAdminCountdown(
      result.startTime
    );

    showToast(
      `Perlumbaan ${result.playerCount} pemain dimulakan.`
    );

  } catch (error) {
    showFirebaseError(
      "Perlumbaan gagal dimulakan.",
      error
    );

    startButton.disabled =
      false;
  }
}


/* =========================================================
   COUNTDOWN GURU
========================================================= */

function showAdminCountdown(
  startTime
) {
  const overlay =
    document.getElementById(
      "countdownOverlay"
    );

  const text =
    document.getElementById(
      "countdownText"
    );

  overlay.classList.remove(
    "hidden"
  );

  const update =
    () => {
      const remaining =
        Number(startTime || 0) -
        Date.now();

      if (
        remaining <= 0
      ) {
        text.textContent =
          "GO!";

        playTone(
          900,
          0.35
        );

        window.setTimeout(
          () => {
            overlay.classList.add(
              "hidden"
            );

            document.getElementById(
              "startRaceButton"
            ).disabled =
              false;
          },
          700
        );

        return;
      }

      text.textContent =
        String(
          Math.max(
            1,
            Math.ceil(
              remaining / 1000
            )
          )
        );

      playTone(
        520,
        0.12
      );

      window.setTimeout(
        update,
        500
      );
    };

  update();
}


/* =========================================================
   STOP
========================================================= */

async function stopRace() {
  const status =
    raceControl.status ||
    "WAITING";

  if (
    ![
      "RUNNING",
      "COUNTDOWN"
    ].includes(status)
  ) {
    showToast(
      "Tiada perlumbaan sedang berjalan."
    );

    return;
  }

  const confirmed =
    window.confirm(
      "Hentikan perlumbaan sekarang?"
    );

  if (!confirmed) {
    return;
  }

  try {
    await RaceFirebase
      .stopRace();

    showToast(
      "Perlumbaan dihentikan."
    );

  } catch (error) {
    showFirebaseError(
      "Perlumbaan gagal dihentikan.",
      error
    );
  }
}


/* =========================================================
   RESET
========================================================= */

async function resetRace() {
  const confirmed =
    window.confirm(
      "Reset semua status dan keputusan perlumbaan?"
    );

  if (!confirmed) {
    return;
  }

  try {
    await RaceFirebase
      .resetRace();

    showToast(
      "Perlumbaan berjaya direset."
    );

  } catch (error) {
    showFirebaseError(
      "Reset perlumbaan gagal.",
      error
    );
  }
}


/* =========================================================
   SELARASKAN PAPARAN CONTROL
========================================================= */

function synchroniseControlDisplay() {
  const controlKp =
    raceControl.selectedKp;

  if (
    Array.isArray(controlKp) &&
    controlKp.length > 0
  ) {
    selectedKp =
      controlKp.map(Number);

    createKpButtons();
  }

  if (
    Number(
      raceControl.questionCount
    )
  ) {
    selectedQuestionCount =
      Number(
        raceControl.questionCount
      );

    document
      .querySelectorAll(
        ".count-button"
      )
      .forEach(button => {
        button.classList.toggle(
          "selected",

          Number(
            button.dataset.count
          ) ===
            selectedQuestionCount
        );
      });
  }
}


/* =========================================================
   STATUS PERLUMBAAN
========================================================= */

function updateRaceStatus() {
  const status =
    raceControl.status ||
    "WAITING";

  document.getElementById(
    "raceStatus"
  ).textContent =
    translateRaceStatus(
      status
    );

  document.getElementById(
    "connectionStatus"
  ).textContent =
    status === "RUNNING"
      ? "LIVE"
      : "REALTIME";
}


function translateRaceStatus(
  status
) {
  const labels = {
    WAITING:
      "MENUNGGU",

    COUNTDOWN:
      "COUNTDOWN",

    RUNNING:
      "BERLUMBA",

    STOPPED:
      "DIHENTIKAN",

    FINISHED:
      "TAMAT"
  };

  return labels[status] ||
    status;
}


/* =========================================================
   AUDIO
========================================================= */

function toggleAudio() {
  audioEnabled =
    !audioEnabled;

  updateAudioButton();

  saveLocalConfiguration();

  showToast(
    audioEnabled
      ? "Audio diaktifkan."
      : "Audio dimatikan."
  );
}


function updateAudioButton() {
  document.getElementById(
    "audioToggle"
  ).textContent =
    audioEnabled
      ? "🔊 AUDIO ON"
      : "🔇 AUDIO OFF";
}


function playTone(
  frequency,
  duration
) {
  if (!audioEnabled) {
    return;
  }

  try {
    const audioContext =
      new (
        window.AudioContext ||
        window.webkitAudioContext
      )();

    const oscillator =
      audioContext
        .createOscillator();

    const gain =
      audioContext
        .createGain();

    oscillator.type =
      "square";

    oscillator.frequency
      .setValueAtTime(
        frequency,
        audioContext.currentTime
      );

    gain.gain
      .setValueAtTime(
        0.04,
        audioContext.currentTime
      );

    oscillator.connect(
      gain
    );

    gain.connect(
      audioContext.destination
    );

    oscillator.start();

    oscillator.stop(
      audioContext.currentTime +
      duration
    );

  } catch (error) {
    console.warn(
      "Audio gagal:",
      error
    );
  }
}


/* =========================================================
   SKRIN PENUH & LOG KELUAR
========================================================= */

function toggleFullscreen() {
  if (
    !document.fullscreenElement
  ) {
    document
      .documentElement
      .requestFullscreen?.();

  } else {
    document
      .exitFullscreen?.();
  }
}


function logoutAdmin() {
  const confirmed =
    window.confirm(
      "Keluar daripada Race Control Center?"
    );

  if (!confirmed) {
    return;
  }

  RaceFirebase
    .stopAllListeners();

  window.location.href =
    "index.html";
}


/* =========================================================
   STATUS FIREBASE
========================================================= */

function setConnectionStatus(
  text,
  isError
) {
  const badge =
    document.getElementById(
      "connectionStatus"
    );

  badge.textContent =
    text;

  badge.style.background =
    isError
      ? "#be123c"
      : "#6ee7b7";

  badge.style.color =
    isError
      ? "#ffffff"
      : "#052e25";
}


function showFirebaseError(
  title,
  error
) {
  console.error(
    title,
    error
  );

  setConnectionStatus(
    "RALAT FIREBASE",
    true
  );

  showToast(
    `${title} ${
      error?.message ||
      ""
    }`
  );
}


/* =========================================================
   TOAST
========================================================= */

function showToast(
  message
) {
  const toast =
    document.getElementById(
      "toast"
    );

  toast.textContent =
    message;

  toast.classList.remove(
    "hidden"
  );

  window.clearTimeout(
    showToast.timer
  );

  showToast.timer =
    window.setTimeout(
      () => {
        toast.classList.add(
          "hidden"
        );
      },
      3000
    );
}


/* =========================================================
   KESELAMATAN TEKS
========================================================= */

function escapeHtml(
  value
) {
  return String(
    value ?? ""
  )
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    )
    .replaceAll(
      '"',
      "&quot;"
    )
    .replaceAll(
      "'",
      "&#039;"
    );
}


/* =========================================================
   BERSIHKAN LISTENER
========================================================= */

window.addEventListener(
  "beforeunload",
  () => {
    RaceFirebase
      .stopAllListeners();
  }
);
