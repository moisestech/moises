"use client";

import React, { useRef, useState } from "react";

export default function MusicDeck() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [src, setSrc] = useState<string>();
  const [vol, setVol] = useState(0.7);
  const [isPlaying, setIsPlaying] = useState(false);

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    setSrc(url);
  }

  function fade(to: number, ms = 800) {
    const a = audioRef.current;
    if (!a) return;
    
    const step = (to - a.volume) / Math.max(ms / 50, 1);
    const id = setInterval(() => {
      a.volume = Math.max(0, Math.min(1, a.volume + step));
      if ((step > 0 && a.volume >= to) || (step < 0 && a.volume <= to)) {
        clearInterval(id);
      }
    }, 50);
  }

  function play() {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      fade(vol);
    }
  }

  function pause() {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  function fadeOut() {
    fade(0);
  }

  function fadeIn() {
    fade(vol);
  }

  return (
    <div className="card">
      <div className="kicker mono">Music Deck</div>
      
      <input 
        type="file" 
        accept="audio/*" 
        onChange={onFile}
        style={{ 
          width: "100%", 
          marginBottom: 8,
          fontSize: "0.8rem",
        }}
      />
      
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <button 
          className="btn" 
          onClick={play}
          disabled={!src}
          style={{ 
            padding: "0.5rem 0.8rem", 
            fontSize: "0.8rem",
            opacity: src ? 1 : 0.5,
          }}
        >
          Play
        </button>
        <button 
          className="btn" 
          onClick={pause}
          disabled={!src}
          style={{ 
            padding: "0.5rem 0.8rem", 
            fontSize: "0.8rem",
            opacity: src ? 1 : 0.5,
          }}
        >
          Pause
        </button>
      </div>
      
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <button 
          className="btn" 
          onClick={fadeIn}
          disabled={!src}
          style={{ 
            padding: "0.5rem 0.8rem", 
            fontSize: "0.8rem",
            opacity: src ? 1 : 0.5,
          }}
        >
          Fade In
        </button>
        <button 
          className="btn" 
          onClick={fadeOut}
          disabled={!src}
          style={{ 
            padding: "0.5rem 0.8rem", 
            fontSize: "0.8rem",
            opacity: src ? 1 : 0.5,
          }}
        >
          Fade Out
        </button>
      </div>
      
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span className="mono" style={{ fontSize: "0.8rem" }}>Vol:</span>
        <input 
          type="range" 
          min={0} 
          max={1} 
          step={0.01}
          value={vol} 
          onChange={(e) => {
            const v = Number(e.target.value);
            setVol(v);
            if (audioRef.current) audioRef.current.volume = v;
          }}
          style={{ 
            flex: 1,
            accentColor: "var(--accent)",
          }}
        />
        <span className="mono" style={{ fontSize: "0.8rem", minWidth: "2rem" }}>
          {Math.round(vol * 100)}%
        </span>
      </div>
      
      <audio ref={audioRef} src={src} loop preload="auto" />
      
      {src && (
        <div className="mono" style={{ 
          fontSize: "0.7rem", 
          color: "var(--muted)", 
          marginTop: 8,
          wordBreak: "break-all",
        }}>
          Loaded: {src.split('/').pop()}
        </div>
      )}
    </div>
  );
}
