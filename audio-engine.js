/* =========================================================
   COMPUTER SYSTEM SET-UP RACE C01
   AUDIO ENGINE — V1 STABLE

   Bunyi dijana menggunakan Web Audio API.
   Tidak memerlukan fail MP3.
========================================================= */

const AUDIO_STORAGE_KEY =
  "c01_race_audio_enabled_v1";


class C01RaceAudioEngine {

  constructor() {
    this.context = null;
    this.masterGain = null;

    this.engineOscillators = [];
    this.engineGain = null;

    this.engineRunning = false;

    this.enabled =
      localStorage.getItem(
        AUDIO_STORAGE_KEY
      ) !== "false";
  }


  /* =======================================================
     MULAKAN AUDIO CONTEXT
  ======================================================= */

  async initialise() {
    if (!this.enabled) {
      return false;
    }

    try {
      if (!this.context) {
        const AudioContextClass =
          window.AudioContext ||
          window.webkitAudioContext;

        if (!AudioContextClass) {
          throw new Error(
            "Web Audio API tidak disokong."
          );
        }

        this.context =
          new AudioContextClass();

        this.masterGain =
          this.context.createGain();

        this.masterGain.gain.value =
          0.55;

        this.masterGain.connect(
          this.context.destination
        );
      }

      if (
        this.context.state ===
        "suspended"
      ) {
        await this.context.resume();
      }

      return true;

    } catch (error) {
      console.error(
        "Audio Engine gagal dimulakan:",
        error
      );

      return false;
    }
  }


  /* =======================================================
     AUDIO ON / OFF
  ======================================================= */

  async setEnabled(enabled) {
    this.enabled =
      Boolean(enabled);

    localStorage.setItem(
      AUDIO_STORAGE_KEY,
      String(this.enabled)
    );

    if (!this.enabled) {
      this.stopEngine();

      if (
        this.masterGain &&
        this.context
      ) {
        this.masterGain.gain
          .setTargetAtTime(
            0,
            this.context.currentTime,
            0.03
          );
      }

      return;
    }

    await this.initialise();

    if (
      this.masterGain &&
      this.context
    ) {
      this.masterGain.gain
        .setTargetAtTime(
          0.55,
          this.context.currentTime,
          0.03
        );
    }
  }


  async toggle() {
    await this.setEnabled(
      !this.enabled
    );

    return this.enabled;
  }


  isEnabled() {
    return this.enabled;
  }


  /* =======================================================
     BUNYI ASAS
  ======================================================= */

  async playTone({
    frequency = 440,
    duration = 0.2,
    type = "sine",
    volume = 0.1,
    endFrequency = null
  } = {}) {
    if (!this.enabled) {
      return;
    }

    const ready =
      await this.initialise();

    if (!ready) {
      return;
    }

    const oscillator =
      this.context
        .createOscillator();

    const gain =
      this.context
        .createGain();

    oscillator.type =
      type;

    oscillator.frequency
      .setValueAtTime(
        frequency,
        this.context.currentTime
      );

    if (
      Number.isFinite(
        endFrequency
      )
    ) {
      oscillator.frequency
        .exponentialRampToValueAtTime(
          Math.max(
            1,
            endFrequency
          ),
          this.context.currentTime +
          duration
        );
    }

    gain.gain
      .setValueAtTime(
        0.0001,
        this.context.currentTime
      );

    gain.gain
      .exponentialRampToValueAtTime(
        Math.max(
          0.0001,
          volume
        ),
        this.context.currentTime +
        0.02
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
      duration +
      0.03
    );
  }


  /* =======================================================
     COUNTDOWN
  ======================================================= */

  async playCountdown() {
    await this.playTone({
      frequency: 520,
      endFrequency: 470,
      duration: 0.14,
      type: "square",
      volume: 0.09
    });
  }


  async playGo() {
    await this.playTone({
      frequency: 620,
      endFrequency: 1120,
      duration: 0.42,
      type: "sawtooth",
      volume: 0.13
    });

    window.setTimeout(
      () => {
        this.playTone({
          frequency: 880,
          endFrequency: 1320,
          duration: 0.28,
          type: "square",
          volume: 0.08
        });
      },
      90
    );
  }


  /* =======================================================
     JAWAPAN BETUL
  ======================================================= */

  async playCorrect() {
    await this.playTone({
      frequency: 660,
      duration: 0.14,
      type: "sine",
      volume: 0.09
    });

    window.setTimeout(
      () => {
        this.playTone({
          frequency: 880,
          duration: 0.18,
          type: "sine",
          volume: 0.1
        });
      },
      110
    );

    window.setTimeout(
      () => {
        this.playTurbo();
      },
      190
    );
  }


  /* =======================================================
     JAWAPAN SALAH
  ======================================================= */

  async playWrong() {
    await this.playTone({
      frequency: 220,
      endFrequency: 95,
      duration: 0.36,
      type: "sawtooth",
      volume: 0.11
    });

    window.setTimeout(
      () => {
        this.playBrake();
      },
      70
    );
  }


  /* =======================================================
     TURBO
  ======================================================= */

  async playTurbo() {
    if (!this.enabled) {
      return;
    }

    const ready =
      await this.initialise();

    if (!ready) {
      return;
    }

    const oscillator =
      this.context
        .createOscillator();

    const gain =
      this.context
        .createGain();

    oscillator.type =
      "sawtooth";

    oscillator.frequency
      .setValueAtTime(
        120,
        this.context.currentTime
      );

    oscillator.frequency
      .exponentialRampToValueAtTime(
        680,
        this.context.currentTime +
        0.48
      );

    gain.gain
      .setValueAtTime(
        0.0001,
        this.context.currentTime
      );

    gain.gain
      .exponentialRampToValueAtTime(
        0.085,
        this.context.currentTime +
        0.06
      );

    gain.gain
      .exponentialRampToValueAtTime(
        0.0001,
        this.context.currentTime +
        0.5
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
      0.52
    );
  }


  /* =======================================================
     BREK
  ======================================================= */

  async playBrake() {
    if (!this.enabled) {
      return;
    }

    const ready =
      await this.initialise();

    if (!ready) {
      return;
    }

    const duration =
      0.42;

    const sampleRate =
      this.context.sampleRate;

    const buffer =
      this.context.createBuffer(
        1,
        sampleRate *
        duration,
        sampleRate
      );

    const data =
      buffer.getChannelData(0);

    for (
      let index = 0;
      index < data.length;
      index++
    ) {
      const fade =
        1 -
        index /
        data.length;

      data[index] =
        (
          Math.random() *
          2 -
          1
        ) *
        fade;
    }

    const noise =
      this.context
        .createBufferSource();

    const filter =
      this.context
        .createBiquadFilter();

    const gain =
      this.context
        .createGain();

    noise.buffer =
      buffer;

    filter.type =
      "bandpass";

    filter.frequency.value =
      1450;

    filter.Q.value =
      4;

    gain.gain.value =
      0.11;

    noise.connect(
      filter
    );

    filter.connect(
      gain
    );

    gain.connect(
      this.masterGain
    );

    noise.start();
  }


  /* =======================================================
     ENJIN IDLE / PERLUMBAAN
  ======================================================= */

  async startEngine({
    rpm = 72,
    volume = 0.07
  } = {}) {
    if (
      !this.enabled ||
      this.engineRunning
    ) {
      return;
    }

    const ready =
      await this.initialise();

    if (!ready) {
      return;
    }

    this.engineGain =
      this.context
        .createGain();

    this.engineGain.gain
      .setValueAtTime(
        0.0001,
        this.context.currentTime
      );

    this.engineGain.gain
      .exponentialRampToValueAtTime(
        Math.max(
          0.001,
          volume
        ),
        this.context.currentTime +
        0.3
      );

    this.engineGain.connect(
      this.masterGain
    );


    const lowOscillator =
      this.context
        .createOscillator();

    lowOscillator.type =
      "sawtooth";

    lowOscillator.frequency.value =
      rpm;


    const midOscillator =
      this.context
        .createOscillator();

    midOscillator.type =
      "square";

    midOscillator.frequency.value =
      rpm * 2.02;


    const highOscillator =
      this.context
        .createOscillator();

    highOscillator.type =
      "triangle";

    highOscillator.frequency.value =
      rpm * 3.05;


    const lowGain =
      this.context
        .createGain();

    const midGain =
      this.context
        .createGain();

    const highGain =
      this.context
        .createGain();


    lowGain.gain.value =
      0.72;

    midGain.gain.value =
      0.18;

    highGain.gain.value =
      0.1;


    lowOscillator.connect(
      lowGain
    );

    midOscillator.connect(
      midGain
    );

    highOscillator.connect(
      highGain
    );


    lowGain.connect(
      this.engineGain
    );

    midGain.connect(
      this.engineGain
    );

    highGain.connect(
      this.engineGain
    );


    lowOscillator.start();

    midOscillator.start();

    highOscillator.start();


    this.engineOscillators = [
      {
        oscillator:
          lowOscillator,
        multiplier:
          1
      },
      {
        oscillator:
          midOscillator,
        multiplier:
          2.02
      },
      {
        oscillator:
          highOscillator,
        multiplier:
          3.05
      }
    ];

    this.engineRunning =
      true;
  }


  async setEngineSpeed(
    speed = 80
  ) {
    if (
      !this.engineRunning ||
      !this.context
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

    const baseFrequency =
      55 +
      numericSpeed *
      0.55;

    this.engineOscillators
      .forEach(item => {
        item.oscillator
          .frequency
          .setTargetAtTime(
            baseFrequency *
            item.multiplier,
            this.context.currentTime,
            0.09
          );
      });

    if (this.engineGain) {
      const volume =
        0.045 +
        numericSpeed /
        350 *
        0.075;

      this.engineGain.gain
        .setTargetAtTime(
          volume,
          this.context.currentTime,
          0.08
        );
    }
  }


  stopEngine() {
    if (
      !this.engineRunning
    ) {
      return;
    }

    try {
      if (
        this.engineGain &&
        this.context
      ) {
        this.engineGain.gain
          .setTargetAtTime(
            0.0001,
            this.context.currentTime,
            0.05
          );
      }

      window.setTimeout(
        () => {
          this.engineOscillators
            .forEach(item => {
              try {
                item.oscillator.stop();
              } catch (error) {
                console.warn(error);
              }
            });

          this.engineOscillators =
            [];

          this.engineGain =
            null;

          this.engineRunning =
            false;
        },
        180
      );

    } catch (error) {
      console.warn(
        "Enjin gagal dihentikan:",
        error
      );

      this.engineOscillators =
        [];

      this.engineGain =
        null;

      this.engineRunning =
        false;
    }
  }


  /* =======================================================
     TAMAT PERLUMBAAN
  ======================================================= */

  async playFinish() {
    this.stopEngine();

    const notes = [
      523,
      659,
      784,
      1046
    ];

    notes.forEach(
      (
        note,
        index
      ) => {
        window.setTimeout(
          () => {
            this.playTone({
              frequency:
                note,

              duration:
                0.3,

              type:
                "sine",

              volume:
                0.1
            });
          },
          index * 170
        );
      }
    );
  }


  async playVictory() {
    this.stopEngine();

    const notes = [
      523,
      659,
      784,
      1046,
      1318
    ];

    notes.forEach(
      (
        note,
        index
      ) => {
        window.setTimeout(
          () => {
            this.playTone({
              frequency:
                note,

              duration:
                index ===
                notes.length -
                1
                  ? 0.65
                  : 0.24,

              type:
                "triangle",

              volume:
                0.105
            });
          },
          index * 150
        );
      }
    );
  }


  /* =======================================================
     BERSIHKAN AUDIO
  ======================================================= */

  stopAll() {
    this.stopEngine();
  }
}


/* =========================================================
   SATU AUDIO ENGINE UNTUK SELURUH GAME
========================================================= */

const RaceAudio =
  new C01RaceAudioEngine();


window.RaceAudio =
  RaceAudio;


export {
  C01RaceAudioEngine,
  RaceAudio
};
