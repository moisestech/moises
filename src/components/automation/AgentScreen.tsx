"use client";

import React from "react";
import { AGENT_COLORS, AgentKey } from "../../data/agents";

interface AgentScreenProps {
  agent: AgentKey;
  line?: string;
  isActive?: boolean;
  isMuted?: boolean;
}

export default function AgentScreen({ agent, line, isActive = false, isMuted = false }: AgentScreenProps) {
  const color = AGENT_COLORS[agent];
  
  return (
    <div 
      className="card" 
      style={{
        aspectRatio: "9/16",
        position: "relative",
        overflow: "hidden",
        padding: 14,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        background: "#0e0f14",
        borderColor: isActive ? "var(--accent)" : "#1c1f27",
        boxShadow: isActive ? "0 0 0 2px rgba(0,255,208,0.2)" : "var(--shadow)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Breathing neon glow */}
      <div 
        aria-hidden 
        style={{
          position: "absolute",
          inset: -30,
          background: `radial-gradient(60% 50% at 50% 65%, ${color}33, transparent 70%)`,
          filter: "blur(24px)",
          animation: "breath 6s ease-in-out infinite",
          opacity: isMuted ? 0.3 : 1,
        }}
      />
      
      {/* Agent badge */}
      <span 
        className="badge mono" 
        style={{ 
          background: color,
          opacity: isMuted ? 0.5 : 1,
        }}
      >
        [{agent}]
      </span>
      
      {/* Caption */}
      <div 
        className="mono" 
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "10px 12px",
          background: "linear-gradient(180deg, transparent, rgba(0,0,0,.75))",
          fontSize: "0.9rem",
          lineHeight: 1.4,
          opacity: isMuted ? 0.6 : 1,
        }}
      >
        {isMuted ? "⏸ Paused (Kill Switch)" : line || "\u00A0"}
      </div>
      
      {/* Active indicator */}
      {isActive && (
        <div 
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            width: 8,
            height: 8,
            background: "var(--accent)",
            borderRadius: "50%",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      )}
    </div>
  );
}
