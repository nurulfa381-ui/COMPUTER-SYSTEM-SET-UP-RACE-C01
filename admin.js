const PROFILE_KEY =
  "c01_race_player_profile_v1";

const ADMIN_SESSION_KEY =
  "c01_race_admin_session_v1";

const RACE_CONFIG_KEY =
  "c01_race_config_v1";

const RACE_STATE_KEY =
  "c01_race_state_v1";

const MAX_PLAYERS = 5;

let players = [];
let selectedKp = [1];
let selectedQuestionCount = 10;
let audioEnabled = true;
let raceState = "WAITING";
let raceSimulationTimer = null;

document.addEventListener(
  "DOMContentLoaded",
  initialiseAdmin
);

function initialiseAdmin() {
  loadSavedRaceConfig();
  createKpButtons();
  initialiseCountButtons();
  initialiseQuestionTypes();
  initialiseMainButtons();
  initialiseHeaderButtons();
  loadDemoPlayers();
  renderAll();
}

function loadSavedRaceConfig() {
  try {
    const saved =
      JSON.parse(
        localStorage.getItem(
          RACE_CONFIG_KEY
        ) || "null"
      );

    if (!saved) return;

    selectedKp =
      Array.isArray(saved.selectedKp) &&
      saved.selectedKp.length
        ? saved.selectedKp
        : [1];

    selectedQuestionCount =
      Number(saved.questionCount) ||
      10;

    audioEnabled =
      saved.audioEnabled !== false;

    raceState =
      saved.raceState ||
      "WAITING";

  } catch (error) {
    console.error(
      "Tetapan perlumbaan gagal dibaca:",
      error
    );
  }
}

function saveRaceConfig() {
  const questionTypes =
    getSelectedQuestionTypes();

  const config = {
    selectedKp,
    questionTypes,
    questionCount:
      selectedQuestionCount,
    audioEnabled,
    raceState,
    updatedAt:
      new Date().toISOString()
  };

  localStorage.setItem(
    RACE_CONFIG_KEY,
    JSON.stringify(config)
  );
}

function createKpButtons() {
  const container =
    document.getElementById(
      "kpSelector"
    );

  container.innerHTML = "";

  for (
    let kp = 1;
    kp <= 15;
    kp++
  ) {
    const button =
      document.createElement(
        "button"
      );

    button.type = "button";
    button.className =
      "kp-button";

    button.dataset.kp =
      String(kp);

    button.textContent =
      `KP${String(kp).padStart(
        2,
        "0"
      )}`;

    button.classList.toggle(
      "selected",
      selectedKp.includes(kp)
    );

    button.addEventListener(
      "click",
      function () {
        toggleKpSelection(kp);
      }
    );

    container.appendChild(
      button
    );
  }
}

function toggleKpSelection(kp) {
  if (
    selectedKp.includes(kp)
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
        item =>
          item !== kp
      );

  } else {
    selectedKp.push(kp);

    selectedKp.sort(
      (first, second) =>
        first - second
    );
  }

  document
    .querySelectorAll(
      ".kp-button"
    )
    .forEach(button => {
      const buttonKp =
        Number(
          button.dataset.kp
        );

      button.classList.toggle(
        "selected",
        selectedKp.includes(
          buttonKp
        )
      );
    });

  saveRaceConfig();

  showToast(
    `${selectedKp.length} KP dipilih.`
  );
}

function initialiseCountButtons() {
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
        function () {
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

          saveRaceConfig();

          showToast(
            `${count} soalan dipilih.`
          );
        }
      );
    });
}

function initialiseQuestionTypes() {
  document
    .querySelectorAll(
      '.check-card input[type="checkbox"]'
    )
    .forEach(input => {
      input.addEventListener(
        "change",
        function () {
          const selected =
            getSelectedQuestionTypes();

          if (
            selected.length === 0
          ) {
            input.checked =
              true;

            showToast(
              "Sekurang-kurangnya satu jenis soalan mesti dipilih."
            );

            return;
          }

          saveRaceConfig();
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
}

function loadDemoPlayers() {
  players = [];

  try {
    const savedProfile =
      JSON.parse(
        localStorage.getItem(
          PROFILE_KEY
        ) || "null"
      );

    if (savedProfile) {
      players.push({
        uid:
          "local-player-1",

        name:
          savedProfile.name ||
          "Pelajar 1",

        studentId:
          savedProfile.studentId ||
          "C01-001",

        carIcon:
          savedProfile.carIcon ||
          "🏎️",

        carNumber:
          savedProfile.carNumber ||
          "01",

        carColour:
          savedProfile.carColour ||
          "red",

        approved:
          savedProfile.approved ===
          true,

        ready:
          savedProfile.ready ===
          true,

        score:
          Number(
            savedProfile.score || 0
          ),

        progress:
          Number(
            savedProfile.progress || 0
          ),

        correctAnswers:
          Number(
            savedProfile
              .correctAnswers || 0
          ),

        wrongAnswers:
          Number(
            savedProfile
              .wrongAnswers || 0
          ),

        currentQuestion:
          Number(
            savedProfile
              .currentQuestion || 0
          ),

        speed:
          Number(
            savedProfile.speed || 0
          ),

        raceStatus:
          savedProfile.raceStatus ||
          "WAITING"
      });
    }

  } catch (error) {
    console.error(
      "Profil pemain gagal dibaca:",
      error
    );
  }

  const demoNames = [
    {
      name:
        "Ahmad",
      studentId:
        "C01-002",
      carIcon:
        "🚘"
    },
    {
      name:
        "Siti",
      studentId:
        "C01-003",
      carIcon:
        "🚗"
    },
    {
      name:
        "Hakim",
      studentId:
        "C01-004",
      carIcon:
        "⚡"
    },
    {
      name:
        "Farah",
      studentId:
        "C01-005",
      carIcon:
        "🔥"
    }
  ];

  while (
    players.length < MAX_PLAYERS
  ) {
    const demo =
      demoNames[
        players.length - 1
      ];

    if (!demo) break;

    players.push({
      uid:
        `demo-${players.length + 1}`,

      name:
        demo.name,

      studentId:
        demo.studentId,

      carIcon:
        demo.carIcon,

      carNumber:
        String(
          players.length + 1
        ).padStart(
          2,
          "0"
        ),

      approved:
        false,

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
        "WAITING"
    });
  }
}

function renderAll() {
  renderStatistics();
  renderPlayerGrid();
  renderLiveMonitor();
  updateRaceStatus();
}

function renderStatistics() {
  const total =
    players.length;

  const approved =
    players.filter(
      player =>
        player.approved
    ).length;

  const ready =
    players.filter(
      player =>
        player.ready
    ).length;

  document.getElementById(
    "totalPlayers"
  ).textContent =
    total;

  document.getElementById(
    "approvedPlayers"
  ).textContent =
    approved;

  document.getElementById(
    "readyPlayers"
  ).textContent =
    ready;

  document.getElementById(
    "playerCounter"
  ).textContent =
    `${total} / ${MAX_PLAYERS}`;
}

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

  if (player.approved) {
    statusClass =
      "approved";

    statusText =
      player.ready
        ? "SEDIA"
        : "DILULUSKAN";
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
          onclick="approvePlayer('${player.uid}')"
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
          onclick="removePlayer('${player.uid}')"
        >
          KELUARKAN
        </button>

      </div>

    </article>
  `;
}

window.approvePlayer =
  function (uid) {
    const player =
      players.find(
        item =>
          item.uid === uid
      );

    if (!player) return;

    player.approved =
      !player.approved;

    if (!player.approved) {
      player.ready =
        false;
    }

    saveLocalPlayerState(
      player
    );

    renderAll();

    showToast(
      player.approved
        ? `${player.name} diluluskan.`
        : `Kelulusan ${player.name} dibatalkan.`
    );
  };

window.removePlayer =
  function (uid) {
    const player =
      players.find(
        item =>
          item.uid === uid
      );

    if (!player) return;

    const confirmed =
      window.confirm(
        `Keluarkan ${player.name} daripada lobby?`
      );

    if (!confirmed) return;

    players =
      players.filter(
        item =>
          item.uid !== uid
      );

    renderAll();

    showToast(
      `${player.name} dikeluarkan.`
    );
  };

function saveLocalPlayerState(
  player
) {
  if (
    player.uid !==
    "local-player-1"
  ) {
    return;
  }

  try {
    const profile =
      JSON.parse(
        localStorage.getItem(
          PROFILE_KEY
        ) || "{}"
      );

    const updated = {
      ...profile,
      approved:
        player.approved,
      ready:
        player.ready,
      updatedAt:
        new Date().toISOString()
    };

    localStorage.setItem(
      PROFILE_KEY,
      JSON.stringify(updated)
    );

  } catch (error) {
    console.error(
      error
    );
  }
}

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

    const accuracy =
      calculateAccuracy(
        player
      );

    cards.push(`
      <article class="live-card">

        <h3>
          ${escapeHtml(
            player.name
          )}
        </h3>

        <div class="live-row">
          <span>Soalan</span>
          <strong>
            ${player.currentQuestion}/${selectedQuestionCount}
          </strong>
        </div>

        <div class="live-row">
          <span>Markah</span>
          <strong>
            ${player.score}%
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
            ${player.speed} km/j
          </strong>
        </div>

        <div class="live-row">
          <span>Status</span>
          <strong>
            ${escapeHtml(
              player.raceStatus
            )}
          </strong>
        </div>

        <div class="progress-track">

          <div
            class="progress-bar"
            style="width:${Math.min(
              player.progress,
              100
            )}%"
          ></div>

        </div>

      </article>
    `);
  }

  container.innerHTML =
    cards.join("");
}

function calculateAccuracy(
  player
) {
  const total =
    player.correctAnswers +
    player.wrongAnswers;

  if (!total) return 0;

  return Math.round(
    (
      player.correctAnswers /
      total
    ) * 100
  );
}

function startRace() {
  if (
    raceState === "RUNNING"
  ) {
    showToast(
      "Perlumbaan sedang berjalan."
    );

    return;
  }

  const approvedPlayers =
    players.filter(
      player =>
        player.approved
    );

  if (
    approvedPlayers.length === 0
  ) {
    showToast(
      "Luluskan sekurang-kurangnya seorang pemain dahulu."
    );

    return;
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

  saveRaceConfig();
  runCountdown();
}

function runCountdown() {
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

  const steps = [
    "3",
    "2",
    "1",
    "GO!"
  ];

  let index = 0;

  text.textContent =
    steps[index];

  playCountdownSound();

  const timer =
    window.setInterval(
      function () {
        index++;

        if (
          index >= steps.length
        ) {
          window.clearInterval(
            timer
          );

          overlay.classList.add(
            "hidden"
          );

          activateRace();

          return;
        }

        text.textContent =
          steps[index];

        playCountdownSound();
      },
      850
    );
}

function activateRace() {
  raceState =
    "RUNNING";

  players.forEach(player => {
    if (
      player.approved
    ) {
      player.raceStatus =
        "RACING";

      player.currentQuestion =
        0;

      player.progress =
        0;

      player.score =
        0;

      player.correctAnswers =
        0;

      player.wrongAnswers =
        0;

      player.speed =
        80;
    }
  });

  saveRaceConfig();
  updateRaceStatus();
  renderAll();

  startRaceSimulation();

  showToast(
    "Perlumbaan dimulakan!"
  );
}

function startRaceSimulation() {
  stopRaceSimulation();

  raceSimulationTimer =
    window.setInterval(
      function () {
        let finishedCount = 0;

        players.forEach(player => {
          if (
            !player.approved ||
            player.raceStatus !==
              "RACING"
          ) {
            if (
              player.raceStatus ===
              "FINISHED"
            ) {
              finishedCount++;
            }

            return;
          }

          const answeredCorrectly =
            Math.random() > 0.25;

          player.currentQuestion++;

          if (
            answeredCorrectly
          ) {
            player.correctAnswers++;

            player.speed =
              Math.min(
                320,
                player.speed +
                randomBetween(
                  12,
                  32
                )
              );

          } else {
            player.wrongAnswers++;

            player.speed =
              Math.max(
                70,
                player.speed -
                randomBetween(
                  8,
                  24
                )
              );
          }

          const totalAnswered =
            player.correctAnswers +
            player.wrongAnswers;

          player.score =
            totalAnswered
              ? Math.round(
                  (
                    player.correctAnswers /
                    totalAnswered
                  ) * 100
                )
              : 0;

          player.progress =
            Math.min(
              100,
              Math.round(
                (
                  player.currentQuestion /
                  selectedQuestionCount
                ) * 100
              )
            );

          if (
            player.currentQuestion >=
            selectedQuestionCount
          ) {
            player.currentQuestion =
              selectedQuestionCount;

            player.progress =
              100;

            player.speed =
              0;

            player.raceStatus =
              "FINISHED";

            finishedCount++;
          }
        });

        renderLiveMonitor();

        if (
          finishedCount >=
          players.filter(
            player =>
              player.approved
          ).length
        ) {
          finishRace();
        }
      },
      1150
    );
}

function finishRace() {
  stopRaceSimulation();

  raceState =
    "FINISHED";

  saveRaceConfig();

  updateRaceStatus();
  renderAll();

  showToast(
    "Semua pemain telah tamat perlumbaan."
  );
}

function stopRace() {
  if (
    raceState !== "RUNNING"
  ) {
    showToast(
      "Tiada perlumbaan yang sedang berjalan."
    );

    return;
  }

  const confirmed =
    window.confirm(
      "Hentikan perlumbaan sekarang?"
    );

  if (!confirmed) return;

  stopRaceSimulation();

  raceState =
    "STOPPED";

  players.forEach(player => {
    if (
      player.raceStatus ===
      "RACING"
    ) {
      player.raceStatus =
        "STOPPED";

      player.speed =
        0;
    }
  });

  saveRaceConfig();

  updateRaceStatus();
  renderAll();

  showToast(
    "Perlumbaan dihentikan."
  );
}

function resetRace() {
  const confirmed =
    window.confirm(
      "Reset semua data perlumbaan?"
    );

  if (!confirmed) return;

  stopRaceSimulation();

  raceState =
    "WAITING";

  players.forEach(player => {
    player.ready =
      false;

    player.score =
      0;

    player.progress =
      0;

    player.correctAnswers =
      0;

    player.wrongAnswers =
      0;

    player.currentQuestion =
      0;

    player.speed =
      0;

    player.raceStatus =
      "WAITING";

    saveLocalPlayerState(
      player
    );
  });

  localStorage.removeItem(
    RACE_STATE_KEY
  );

  saveRaceConfig();

  renderAll();

  showToast(
    "Perlumbaan telah direset."
  );
}

function stopRaceSimulation() {
  if (
    raceSimulationTimer
  ) {
    window.clearInterval(
      raceSimulationTimer
    );

    raceSimulationTimer =
      null;
  }
}

function updateRaceStatus() {
  document.getElementById(
    "raceStatus"
  ).textContent =
    translateRaceState(
      raceState
    );

  const connectionBadge =
    document.getElementById(
      "connectionStatus"
    );

  connectionBadge.textContent =
    raceState === "RUNNING"
      ? "LIVE"
      : "SIMULASI";
}

function translateRaceState(
  state
) {
  const labels = {
    WAITING:
      "MENUNGGU",

    RUNNING:
      "BERLUMBA",

    FINISHED:
      "TAMAT",

    STOPPED:
      "DIHENTIKAN"
  };

  return (
    labels[state] ||
    state
  );
}

function toggleAudio() {
  audioEnabled =
    !audioEnabled;

  updateAudioButton();
  saveRaceConfig();

  showToast(
    audioEnabled
      ? "Audio diaktifkan."
      : "Audio dimatikan."
  );
}

function updateAudioButton() {
  const button =
    document.getElementById(
      "audioToggle"
    );

  button.textContent =
    audioEnabled
      ? "🔊 AUDIO ON"
      : "🔇 AUDIO OFF";
}

function playCountdownSound() {
  if (!audioEnabled) return;

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
        520,
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
      0.12
    );

  } catch (error) {
    console.warn(
      "Audio countdown gagal:",
      error
    );
  }
}

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
      "Keluar dari Race Control Center?"
    );

  if (!confirmed) return;

  stopRaceSimulation();

  sessionStorage.removeItem(
    ADMIN_SESSION_KEY
  );

  window.location.href =
    "index.html";
}

function randomBetween(
  minimum,
  maximum
) {
  return Math.floor(
    Math.random() *
    (
      maximum -
      minimum +
      1
    )
  ) + minimum;
}

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
      function () {
        toast.classList.add(
          "hidden"
        );
      },
      2600
    );
}

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
    );
}

window.addEventListener(
  "beforeunload",
  stopRaceSimulation
);
