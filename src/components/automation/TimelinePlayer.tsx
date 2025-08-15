"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Cue } from "../../data/script";

type Handlers = {
  onLine: (c: Extract<Cue, { type: "line" }>) => void;
  onSegment?: (name: string) => void;
  onRotate?: (show: string[]) => void;
  onBumper?: (text: string) => void;
};

interface TimelinePlayerProps {
  cues: Cue[];
  handlers: Handlers;
}

export default function TimelinePlayer({ cues, handlers }: TimelinePlayerProps) {
  const { onLine, onSegment, onRotate, onBumper } = handlers;
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const fired = useRef<Set<number>>(new Set());
  const startRef = useRef<number | null>(null);
  const pauseAt = useRef<number>(0);
  const dur = useMemo(() => (cues.at(-1)?.t ?? 0) + 8, [cues]);

  useEffect(() => {
    let raf: number;
    function loop(now: number) {
      if (!startRef.current) startRef.current = now;
      const elapsed = (now - startRef.current) / 1000 + pauseAt.current;
      setT(elapsed);
      
      // Fire cues
      cues.forEach((c, i) => {
        if (!fired.current.has(i) && elapsed >= c.t) {
          fired.current.add(i);
          if (c.type === "line") onLine(c);
          if (c.type === "segment" && onSegment) onSegment(c.name);
          if (c.type === "rotate" && onRotate) onRotate(c.show);
          if (c.type === "bumper" && onBumper) onBumper(c.text);
        }
      });
      
      if (playing) raf = requestAnimationFrame(loop);
    }
    
    if (playing) {
      raf = requestAnimationFrame(loop);
    }
    
    return () => cancelAnimationFrame(raf);
  }, [playing, cues, onLine, onSegment, onRotate, onBumper]);

  function play() {
    setPlaying(true);
  }
  
  function pause() {
    setPlaying(false);
    startRef.current = null;
    pauseAt.current = t;
  }
  
  function stop() {
    setPlaying(false);
    startRef.current = null;
    pauseAt.current = 0;
    setT(0);
    fired.current.clear();
  }
  
  function seek(sec: number) {
    const clamped = Math.max(0, Math.min(dur, sec));
    setT(clamped);
    pauseAt.current = clamped;
    startRef.current = null;
    fired.current.clear();
    
    // Pre-fire cues up to new time
    cues.forEach((c, i) => {
      if (c.t <= clamped) {
        fired.current.add(i);
        if (c.type === "line") onLine(c);
        if (c.type === "segment" && onSegment) onSegment(c.name);
        if (c.type === "rotate" && onRotate) onRotate(c.show);
        if (c.type === "bumper" && onBumper) onBumper(c.text);
      }
    });
  }

  return (
    <div className="card">
      <div className="kicker mono">Transport</div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
        <button 
          className="btn" 
          onClick={play}
          style={{ padding: "0.5rem 0.8rem", fontSize: "0.8rem" }}
        >
          Play
        </button>
        <button 
          className="btn" 
          onClick={pause}
          style={{ padding: "0.5rem 0.8rem", fontSize: "0.8rem" }}
        >
          Pause
        </button>
        <button 
          className="btn" 
          onClick={stop}
          style={{ padding: "0.5rem 0.8rem", fontSize: "0.8rem" }}
        >
          Stop
        </button>
        <div className="mono" style={{ fontSize: "0.8rem", color: "var(--accent)" }}>
          t={t.toFixed(1)}s
        </div>
      </div>
      <input 
        type="range" 
        min={0} 
        max={dur} 
        step={0.1} 
        value={t} 
        onChange={(e) => seek(Number(e.target.value))} 
        style={{ 
          width: "100%", 
          marginTop: 8,
          accentColor: "var(--accent)",
        }}
      />
    </div>
  );
}
