/* C01 Race Audio Engine — real WAV assets + Web Audio fallback */
const AUDIO_STORAGE_KEY = "c01_race_audio_enabled_v2";
const AUDIO_BASE = "./audio/";

class C01RaceAudioEngine {
  constructor() {
    this.enabled = localStorage.getItem(AUDIO_STORAGE_KEY) !== "false";
    this.context = null;
    this.masterGain = null;
    this.engine = null;
    this.engineRunning = false;
    this.effects = {};
    this.unlocked = false;
    this.files = {
      countdown: "countdown.wav", go: "go.wav", correct: "correct.wav",
      wrong: "wrong.wav", turbo: "turbo.wav", brake: "brake.wav",
      victory: "victory.wav", finish: "finish.wav", crowd: "crowd.wav"
    };
  }

  async initialise() {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC && !this.context) {
        this.context = new AC();
        this.masterGain = this.context.createGain();
        this.masterGain.gain.value = 0.55;
        this.masterGain.connect(this.context.destination);
      }
      if (this.context?.state === "suspended") await this.context.resume();
      this.unlocked = true;
      return true;
    } catch (error) {
      console.warn("Audio initialise gagal:", error);
      return false;
    }
  }

  async setEnabled(value) {
    this.enabled = Boolean(value);
    localStorage.setItem(AUDIO_STORAGE_KEY, String(this.enabled));
    if (!this.enabled) this.stopAll();
    else await this.initialise();
    return this.enabled;
  }

  async toggle() { return this.setEnabled(!this.enabled); }
  isEnabled() { return this.enabled; }

  createAudio(name, loop=false) {
    const a = new Audio(`${AUDIO_BASE}${name}`);
    a.preload = "auto";
    a.loop = loop;
    a.playsInline = true;
    return a;
  }

  async playFile(key, volume=.8) {
    if (!this.enabled) return false;
    await this.initialise();
    const filename = this.files[key] || key;
    try {
      const a = this.createAudio(filename, false);
      a.volume = Math.max(0, Math.min(1, volume));
      this.effects[key] = a;
      await a.play();
      return true;
    } catch (error) {
      console.warn(`Fail audio ${filename} gagal, guna fallback:`, error);
      return this.playTone({frequency: key === "wrong" ? 180 : 620, duration:.25, type:"square", volume:.08});
    }
  }

  async playTone({frequency=440,duration=.2,type="sine",volume=.08,endFrequency=null}={}) {
    if (!this.enabled || !(await this.initialise()) || !this.context) return false;
    const o=this.context.createOscillator(), g=this.context.createGain();
    o.type=type; o.frequency.setValueAtTime(frequency,this.context.currentTime);
    if(Number.isFinite(endFrequency)) o.frequency.exponentialRampToValueAtTime(Math.max(1,endFrequency),this.context.currentTime+duration);
    g.gain.setValueAtTime(.0001,this.context.currentTime);
    g.gain.exponentialRampToValueAtTime(Math.max(.0001,volume),this.context.currentTime+.02);
    g.gain.exponentialRampToValueAtTime(.0001,this.context.currentTime+duration);
    o.connect(g); g.connect(this.masterGain); o.start(); o.stop(this.context.currentTime+duration+.03); return true;
  }

  playCountdown(){ return this.playFile("countdown",.8); }
  playGo(){ return this.playFile("go",.85); }
  playCorrect(){ this.playFile("correct",.85); setTimeout(()=>this.playFile("turbo",.7),180); }
  playWrong(){ this.playFile("wrong",.8); setTimeout(()=>this.playFile("brake",.75),90); }
  playTurbo(){ return this.playFile("turbo",.8); }
  playBrake(){ return this.playFile("brake",.8); }
  playFinish(){ this.stopEngine(); return this.playFile("finish",.85); }
  playVictory(){ this.stopEngine(); this.playFile("crowd",.5); return this.playFile("victory",.9); }

  async startEngine({rpm=78,volume=.16}={}) {
    if (!this.enabled) return false;
    await this.initialise();
    if (this.engineRunning && this.engine) return true;
    try {
      this.engine = this.createAudio("engine-race.wav", true);
      this.engine.volume = Math.max(.03, Math.min(.35, volume));
      this.engine.playbackRate = Math.max(.65, Math.min(1.5, rpm/90));
      await this.engine.play();
      this.engineRunning = true;
      return true;
    } catch (error) {
      console.warn("Enjin WAV gagal:", error);
      this.engineRunning = false;
      return false;
    }
  }

  setEngineSpeed(speed=80) {
    if (!this.engine) return;
    const s=Math.max(0,Math.min(350,Number(speed)||0));
    this.engine.playbackRate=Math.max(.7,Math.min(1.85,.72+s/310));
    this.engine.volume=Math.max(.05,Math.min(.28,.08+s/1800));
  }

  stopEngine() {
    if (this.engine) { try { this.engine.pause(); this.engine.currentTime=0; } catch(_){} }
    this.engine=null; this.engineRunning=false;
  }

  stopAll() {
    this.stopEngine();
    Object.values(this.effects).forEach(a=>{try{a.pause();a.currentTime=0;}catch(_){}});
    this.effects={};
  }
}

const RaceAudio = new C01RaceAudioEngine();
window.RaceAudio = RaceAudio;
export { C01RaceAudioEngine, RaceAudio };
