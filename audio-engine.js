/* =========================================================
   COMPUTER SYSTEM SET-UP RACE C01
   AUDIO ENGINE — REAL ASSET VERSION
   Menggunakan fail WAV dalam assets/audio/ dengan fallback Web Audio.
========================================================= */

const AUDIO_STORAGE_KEY = "c01_race_audio_enabled_v2";
const AUDIO_BASE = "./assets/audio/";

const AUDIO_FILES = {
  countdown: "countdown.wav",
  go: "go.wav",
  correct: "correct.wav",
  wrong: "wrong.wav",
  turbo: "turbo.wav",
  brake: "brake.wav",
  engineIdle: "engine-idle.wav",
  engineRace: "engine-race.wav",
  crowd: "crowd.wav",
  finish: "finish.wav",
  victory: "victory.wav"
};

class C01RaceAudioEngine {
  constructor() {
    this.enabled = localStorage.getItem(AUDIO_STORAGE_KEY) !== "false";
    this.unlocked = false;
    this.sounds = new Map();
    this.engine = null;
    this.crowd = null;
    this.context = null;
    this.masterGain = null;
    this.engineRunning = false;
    this._bindUnlockEvents();
  }

  _bindUnlockEvents() {
    const unlock = () => this.unlock();
    document.addEventListener("pointerdown", unlock, { once: true, passive: true });
    document.addEventListener("touchstart", unlock, { once: true, passive: true });
    document.addEventListener("keydown", unlock, { once: true });
  }

  _makeAudio(name, { loop = false, volume = 1 } = {}) {
    if (this.sounds.has(name)) return this.sounds.get(name);
    const file = AUDIO_FILES[name];
    if (!file) return null;
    const audio = new Audio(`${AUDIO_BASE}${file}`);
    audio.preload = "auto";
    audio.loop = loop;
    audio.volume = volume;
    audio.playsInline = true;
    this.sounds.set(name, audio);
    return audio;
  }

  async initialise() {
    Object.keys(AUDIO_FILES).forEach((name) => {
      this._makeAudio(name, {
        loop: name === "engineIdle" || name === "engineRace" || name === "crowd",
        volume: name === "crowd" ? 0.16 : 0.7
      });
    });
    return true;
  }

  async unlock() {
    if (this.unlocked) return true;
    await this.initialise();

    try {
      const test = this._makeAudio("countdown");
      if (test) {
        const oldVolume = test.volume;
        test.volume = 0;
        await test.play();
        test.pause();
        test.currentTime = 0;
        test.volume = oldVolume;
      }
      this.unlocked = true;
      return true;
    } catch (error) {
      console.warn("Audio masih dikunci oleh pelayar:", error);
      return false;
    }
  }

  async setEnabled(enabled) {
    this.enabled = Boolean(enabled);
    localStorage.setItem(AUDIO_STORAGE_KEY, String(this.enabled));
    if (!this.enabled) this.stopAll();
    else await this.unlock();
    return this.enabled;
  }

  async toggle() {
    return this.setEnabled(!this.enabled);
  }

  isEnabled() {
    return this.enabled;
  }

  async _play(name, { restart = true, volume = null } = {}) {
    if (!this.enabled) return false;
    await this.initialise();
    const audio = this._makeAudio(name);
    if (!audio) return this._fallbackTone(440, 0.15);

    try {
      if (restart) {
        audio.pause();
        audio.currentTime = 0;
      }
      if (volume !== null) audio.volume = volume;
      await audio.play();
      this.unlocked = true;
      return true;
    } catch (error) {
      console.warn(`Audio ${name} gagal dimainkan:`, error);
      return this._fallbackTone(440, 0.15);
    }
  }

  async _fallbackTone(frequency = 440, duration = 0.15) {
    if (!this.enabled) return false;
    try {
      if (!this.context) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return false;
        this.context = new AudioContextClass();
        this.masterGain = this.context.createGain();
        this.masterGain.gain.value = 0.15;
        this.masterGain.connect(this.context.destination);
      }
      if (this.context.state === "suspended") await this.context.resume();
      const osc = this.context.createOscillator();
      const gain = this.context.createGain();
      osc.frequency.value = frequency;
      gain.gain.setValueAtTime(0.12, this.context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.context.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      osc.stop(this.context.currentTime + duration);
      return true;
    } catch (error) {
      return false;
    }
  }

  playCountdown() { return this._play("countdown", { volume: 0.75 }); }
  playGo() { return this._play("go", { volume: 0.85 }); }
  playCorrect() {
    this._play("correct", { volume: 0.8 });
    window.setTimeout(() => this.playTurbo(), 180);
  }
  playWrong() {
    this._play("wrong", { volume: 0.8 });
    window.setTimeout(() => this.playBrake(), 120);
  }
  playTurbo() { return this._play("turbo", { volume: 0.75 }); }
  playBrake() { return this._play("brake", { volume: 0.7 }); }
  playFinish() {
    this.stopEngine();
    return this._play("finish", { volume: 0.85 });
  }
  playVictory() {
    this.stopEngine();
    this._play("finish", { volume: 0.65 });
    window.setTimeout(() => this._play("victory", { volume: 0.9 }), 300);
  }

  async startEngine({ rpm = 72, volume = 0.12 } = {}) {
    if (!this.enabled || this.engineRunning) return;
    await this.unlock();
    this.engine = this._makeAudio("engineRace", { loop: true, volume });
    this.crowd = this._makeAudio("crowd", { loop: true, volume: 0.12 });
    if (!this.engine) return;
    this.engine.loop = true;
    this.engine.volume = Math.max(0.04, Math.min(0.35, volume));
    this.engine.playbackRate = Math.max(0.75, Math.min(1.35, rpm / 75));
    try {
      await this.engine.play();
      this.crowd?.play().catch(() => {});
      this.engineRunning = true;
    } catch (error) {
      console.warn("Enjin gagal dimainkan:", error);
    }
  }

  async startIdle() {
    if (!this.enabled || this.engineRunning) return;
    await this.unlock();
    this.engine = this._makeAudio("engineIdle", { loop: true, volume: 0.1 });
    if (!this.engine) return;
    this.engine.loop = true;
    try {
      await this.engine.play();
      this.engineRunning = true;
    } catch (error) {
      console.warn("Enjin idle gagal dimainkan:", error);
    }
  }

  setEngineSpeed(speed = 80) {
    if (!this.engineRunning || !this.engine) return;
    const numericSpeed = Math.max(0, Math.min(350, Number(speed) || 0));
    this.engine.playbackRate = 0.75 + (numericSpeed / 350) * 0.75;
    this.engine.volume = 0.08 + (numericSpeed / 350) * 0.22;
  }

  stopEngine() {
    [this.engine, this.crowd].forEach((audio) => {
      if (!audio) return;
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch (error) {}
    });
    this.engine = null;
    this.crowd = null;
    this.engineRunning = false;
  }

  stopAll() {
    this.stopEngine();
    this.sounds.forEach((audio) => {
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch (error) {}
    });
  }
}

const RaceAudio = new C01RaceAudioEngine();
window.RaceAudio = RaceAudio;

export { C01RaceAudioEngine, RaceAudio };
