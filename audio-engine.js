/* =========================================================
   COMPUTER SYSTEM SET-UP RACE C01
   AUDIO ENGINE — REAL AUDIO FINAL
========================================================= */

const AUDIO_STORAGE_KEY =
  "c01_race_audio_enabled_v3";

const AUDIO_BASE =
  "./assets/audio/";


/* =========================================================
   NAMA FAIL MESTI SAMA TEPAT DENGAN GITHUB
========================================================= */

const AUDIO_FILES = {
  countdown:
    "countdown.wav",

  countdownBeep:
    "countdown_beep.wav",

  go:
    "start_race.wav",

  correct:
    "correct.wav",

  wrong:
    "wrong.wav",

  turbo:
    "turbo.wav",

  brake:
    "brake.wav",

  engineIdle:
    "engine_idle.wav",

  engineRace:
    "engine_racing.wav",

  crowd:
    "crowd.wav",

  notification:
    "notification.wav",

  click:
    "click.wav",

  selectCar:
    "select_car.wav"
};


class C01RaceAudioEngine {

  constructor() {
    this.enabled =
      localStorage.getItem(
        AUDIO_STORAGE_KEY
      ) !== "false";

    this.unlocked =
      false;

    this.sounds =
      new Map();

    this.engine =
      null;

    this.crowd =
      null;

    this.engineRunning =
      false;

    this.context =
      null;

    this.masterGain =
      null;

    this._bindUnlockEvents();
  }


  /* =======================================================
     BUKA SEKATAN AUDIO TELEFON
  ======================================================= */

  _bindUnlockEvents() {
    const unlockAudio =
      () => {
        this.unlock();
      };

    document.addEventListener(
      "pointerdown",
      unlockAudio,
      {
        once: true,
        passive: true
      }
    );

    document.addEventListener(
      "touchstart",
      unlockAudio,
      {
        once: true,
        passive: true
      }
    );

    document.addEventListener(
      "keydown",
      unlockAudio,
      {
        once: true
      }
    );
  }


  /* =======================================================
     BINA OBJEK AUDIO
  ======================================================= */

  _makeAudio(
    name,
    {
      loop = false,
      volume = 1
    } = {}
  ) {
    if (
      this.sounds.has(name)
    ) {
      return this.sounds.get(
        name
      );
    }

    const file =
      AUDIO_FILES[name];

    if (!file) {
      console.warn(
        `Nama audio tidak ditemui: ${name}`
      );

      return null;
    }

    const audio =
      new Audio(
        `${AUDIO_BASE}${file}`
      );

    audio.preload =
      "auto";

    audio.loop =
      loop;

    audio.volume =
      Math.max(
        0,
        Math.min(
          1,
          volume
        )
      );

    audio.playsInline =
      true;

    audio.addEventListener(
      "error",
      () => {
        console.error(
          `Fail audio gagal dimuatkan: ${AUDIO_BASE}${file}`
        );
      }
    );

    this.sounds.set(
      name,
      audio
    );

    return audio;
  }


  /* =======================================================
     MUAT SEMUA AUDIO
  ======================================================= */

  async initialise() {
    Object.keys(
      AUDIO_FILES
    ).forEach(name => {
      this._makeAudio(
        name,
        {
          loop:
            name ===
              "engineIdle" ||
            name ===
              "engineRace" ||
            name ===
              "crowd",

          volume:
            name === "crowd"
              ? 0.12
              : 0.75
        }
      );
    });

    return true;
  }


  /* =======================================================
     UNLOCK AUDIO
  ======================================================= */

  async unlock() {
    if (
      this.unlocked
    ) {
      return true;
    }

    await this.initialise();

    try {
      const testAudio =
        this._makeAudio(
          "click"
        ) ||
        this._makeAudio(
          "countdownBeep"
        );

      if (testAudio) {
        const originalVolume =
          testAudio.volume;

        testAudio.volume = 0;
        await testAudio.play();
        testAudio.pause();
        testAudio.currentTime = 0;
        testAudio.volume = originalVolume;
      }

      /* PRIME ENJIN SEMASA USER GESTURE
         Penting untuk Chrome Mobile / Safari / iPhone / iPad */
      const primeEngine =
        this._makeAudio(
          "engineRace",
          {
            loop: true,
            volume: 0.18
          }
        );

      if (primeEngine) {
        try {
          const originalEngineVolume =
            primeEngine.volume;

          primeEngine.volume = 0;
          primeEngine.loop = true;
          primeEngine.currentTime = 0;

          await primeEngine.play();

          primeEngine.pause();
          primeEngine.currentTime = 0;
          primeEngine.volume =
            originalEngineVolume;

        } catch (enginePrimeError) {
          console.warn(
            "Prime enjin gagal:",
            enginePrimeError
          );
        }
      }

      this.unlocked =
        true;

      return true;

    } catch (error) {
      console.warn(
        "Audio masih disekat. Pelajar perlu tekan butang Audio:",
        error
      );

      return false;
    }
  }


  /* =======================================================
     AUDIO ON / OFF
  ======================================================= */

  async setEnabled(
    enabled
  ) {
    this.enabled =
      Boolean(enabled);

    localStorage.setItem(
      AUDIO_STORAGE_KEY,
      String(
        this.enabled
      )
    );

    if (
      !this.enabled
    ) {
      this.stopAll();

      return false;
    }

    await this.unlock();

    return true;
  }


  async toggle() {
    return this.setEnabled(
      !this.enabled
    );
  }


  isEnabled() {
    return this.enabled;
  }


  /* =======================================================
     MAIN AUDIO
  ======================================================= */

  async _play(
    name,
    {
      restart = true,
      volume = null
    } = {}
  ) {
    if (
      !this.enabled
    ) {
      return false;
    }

    await this.initialise();

    const audio =
      this._makeAudio(
        name
      );

    if (!audio) {
      return this._fallbackTone(
        440,
        0.16
      );
    }

    try {
      if (
        restart
      ) {
        audio.pause();

        audio.currentTime =
          0;
      }

      if (
        volume !== null
      ) {
        audio.volume =
          Math.max(
            0,
            Math.min(
              1,
              volume
            )
          );
      }

      await audio.play();

      this.unlocked =
        true;

      return true;

    } catch (error) {
      console.warn(
        `Audio ${name} gagal dimainkan:`,
        error
      );

      return this._fallbackTone(
        440,
        0.16
      );
    }
  }


  /* =======================================================
     FALLBACK JIKA FAIL AUDIO GAGAL
  ======================================================= */

  async _fallbackTone(
    frequency = 440,
    duration = 0.15
  ) {
    if (
      !this.enabled
    ) {
      return false;
    }

    try {
      if (
        !this.context
      ) {
        const AudioContextClass =
          window.AudioContext ||
          window.webkitAudioContext;

        if (
          !AudioContextClass
        ) {
          return false;
        }

        this.context =
          new AudioContextClass();

        this.masterGain =
          this.context
            .createGain();

        this.masterGain
          .gain.value =
          0.15;

        this.masterGain.connect(
          this.context.destination
        );
      }

      if (
        this.context.state ===
        "suspended"
      ) {
        await this.context
          .resume();
      }

      const oscillator =
        this.context
          .createOscillator();

      const gain =
        this.context
          .createGain();

      oscillator.frequency
        .value =
        frequency;

      gain.gain
        .setValueAtTime(
          0.12,
          this.context.currentTime
        );

      gain.gain
        .exponentialRampToValueAtTime(
          0.0001,
          this.context.currentTime +
          duration
        );

      oscillator.connect(
        gain
      );

      gain.connect(
        this.masterGain
      );

      oscillator.start();

      oscillator.stop(
        this.context.currentTime +
        duration
      );

      return true;

    } catch (error) {
      console.warn(
        "Fallback audio gagal:",
        error
      );

      return false;
    }
  }


  /* =======================================================
     COUNTDOWN DAN GO
  ======================================================= */

  playCountdown() {
    return this._play(
      "countdownBeep",
      {
        volume: 0.8
      }
    );
  }


  playCountdownVoice() {
    return this._play(
      "countdown",
      {
        volume: 0.8
      }
    );
  }


  playGo() {
    return this._play(
      "go",
      {
        volume: 0.9
      }
    );
  }


  /* =======================================================
     BETUL / SALAH
  ======================================================= */

  playCorrect() {
    this._play(
      "correct",
      {
        volume: 0.85
      }
    );

    window.setTimeout(
      () => {
        this.playTurbo();
      },
      180
    );
  }


  playWrong() {
    this._play(
      "wrong",
      {
        volume: 0.85
      }
    );

    window.setTimeout(
      () => {
        this.playBrake();
      },
      150
    );
  }


  playTurbo() {
    return this._play(
      "turbo",
      {
        volume: 0.82
      }
    );
  }


  playBrake() {
    return this._play(
      "brake",
      {
        volume: 0.8
      }
    );
  }


  /* =======================================================
     UI
  ======================================================= */

  playClick() {
    return this._play(
      "click",
      {
        volume: 0.42
      }
    );
  }


  playSelectCar() {
    return this._play(
      "selectCar",
      {
        volume: 0.65
      }
    );
  }


  playNotification() {
    return this._play(
      "notification",
      {
        volume: 0.7
      }
    );
  }


  /* =======================================================
     ENJIN IDLE
  ======================================================= */

  async startIdle() {
    if (
      !this.enabled
    ) {
      return;
    }

    await this.unlock();

    this.stopEngine();

    this.engine =
      this._makeAudio(
        "engineIdle",
        {
          loop: true,
          volume: 0.12
        }
      );

    if (
      !this.engine
    ) {
      return;
    }

    this.engine.loop =
      true;

    this.engine.volume =
      0.12;

    this.engine.playbackRate =
      1;

    try {
      await this.engine.play();

      this.engineRunning =
        true;

    } catch (error) {
      console.warn(
        "Enjin idle gagal dimainkan:",
        error
      );
    }
  }


  /* =======================================================
     ENJIN PERLUMBAAN
  ======================================================= */

  async startEngine({
    rpm = 75,
    volume = 0.30
  } = {}) {
    if (
      !this.enabled
    ) {
      return;
    }

    await this.unlock();

    this.stopEngine();

    this.engine =
      this._makeAudio(
        "engineRace",
        {
          loop: true,
          volume
        }
      );

    this.crowd =
      this._makeAudio(
        "crowd",
        {
          loop: true,
          volume: 0.1
        }
      );

    if (
      !this.engine
    ) {
      return;
    }

    this.engine.loop =
      true;

    this.engine.volume =
      Math.max(
        0.08,
        Math.min(
          0.50,
          volume
        )
      );

    this.engine.playbackRate =
      Math.max(
        0.75,
        Math.min(
          1.35,
          rpm / 75
        )
      );

    try {
      await this.engine.play();

      if (
        this.crowd
      ) {
        this.crowd.loop =
          true;

        this.crowd.volume =
          0.1;

        this.crowd.play()
          .catch(() => {});
      }

      this.engineRunning =
        true;

    } catch (error) {
      console.warn(
        "Enjin perlumbaan gagal dimainkan:",
        error
      );
    }
  }


  /* =======================================================
     KELAJUAN ENJIN
  ======================================================= */

  setEngineSpeed(
    speed = 80
  ) {
    if (
      !this.engineRunning ||
      !this.engine
    ) {
      return;
    }

    const numericSpeed =
      Math.max(
        0,
        Math.min(
          350,
          Number(speed) || 0
        )
      );

    this.engine.playbackRate =
      0.75 +
      (
        numericSpeed /
        350
      ) *
      0.75;

    this.engine.volume =
      0.1 +
      (
        numericSpeed /
        350
      ) *
      0.2;
  }


  /* =======================================================
     TAMAT / KEMENANGAN
  ======================================================= */

  playFinish() {
    this.stopEngine();

    this._play(
      "crowd",
      {
        volume: 0.85
      }
    );

    return this._play(
      "notification",
      {
        volume: 0.8
      }
    );
  }


  playVictory() {
    this.stopEngine();

    this._play(
      "crowd",
      {
        volume: 0.9
      }
    );

    window.setTimeout(
      () => {
        this._play(
          "correct",
          {
            volume: 0.85
          }
        );
      },
      200
    );
  }


  /* =======================================================
     HENTIKAN ENJIN
  ======================================================= */

  stopEngine() {
    [
      this.engine,
      this.crowd
    ].forEach(audio => {
      if (!audio) {
        return;
      }

      try {
        audio.pause();

        audio.currentTime =
          0;

      } catch (error) {
        console.warn(
          error
        );
      }
    });

    this.engine =
      null;

    this.crowd =
      null;

    this.engineRunning =
      false;
  }


  /* =======================================================
     HENTIKAN SEMUA AUDIO
  ======================================================= */

  stopAll() {
    this.stopEngine();

    this.sounds.forEach(
      audio => {
        try {
          audio.pause();

          audio.currentTime =
            0;

        } catch (error) {
          console.warn(
            error
          );
        }
      }
    );
  }
}


const RaceAudio =
  new C01RaceAudioEngine();


window.RaceAudio =
  RaceAudio;


export {
  C01RaceAudioEngine,
  RaceAudio
};