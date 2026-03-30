"use client";

import React from "react";
import Link from "next/link";

interface TerminalNavProps {
  currentPage: "session" | "workshop" | "performance";
}

export default function TerminalNav({ currentPage }: TerminalNavProps) {
  const pages = [
    {
      key: "session",
      path: "/workshop/artist-in-the-automation/session",
      title: "SESSION OVERVIEW",
      description: "Concept, timeline, collaborators",
      ascii: `
╔══════════════════════════════════════════════════════════════╗
║                    SESSION OVERVIEW                          ║
║  • Concept breakdown                                         ║
║  • Evening timeline (5:00pm-9:00pm)                         ║
║  • Key collaborators                                         ║
║  • Goals and objectives                                      ║
╚══════════════════════════════════════════════════════════════╝
      `,
    },
    {
      key: "workshop",
      path: "/workshop/artist-in-the-automation",
      title: "AGENTS 101 WORKSHOP",
      description: "Build your AI helper (60 min)",
      ascii: `
╔══════════════════════════════════════════════════════════════╗
║                  AGENTS 101 WORKSHOP                         ║
║  • Choose your agent (Polly, Grit, Spec, etc.)              ║
║  • Write prompts by theme                                    ║
║  • Sample prompts provided                                   ║
║  • Output feeds performance (1 hour later)                  ║
╚══════════════════════════════════════════════════════════════╝
      `,
    },
    {
      key: "performance",
      path: "/workshop/artist-in-the-automation/performance",
      title: "SYNTHETIC SYMPOSIUM",
      description: "Live performance interface (25 min)",
      ascii: `
╔══════════════════════════════════════════════════════════════╗
║                SYNTHETIC SYMPOSIUM                           ║
║  • 3-agent screen wall                                       ║
║  • Timeline player controls                                  ║
║  • Music deck + audience cards                               ║
║  • Human-only mode + FAULT system                            ║
╚══════════════════════════════════════════════════════════════╝
      `,
    },
  ];

  return (
    <div className="card" style={{ maxWidth: 900, margin: "0 auto" }}>
      <div className="kicker mono">NAVIGATION TERMINAL</div>
      
      <div style={{ marginTop: 16 }}>
        <div className="mono" style={{ 
          fontSize: "0.7rem", 
          color: "var(--accent)", 
          marginBottom: 16,
          whiteSpace: "pre",
          lineHeight: 1.2,
        }}>
{`┌─────────────────────────────────────────────────────────────────────────────┐
│                    ARTIST IN THE AUTOMATION - NAVIGATION                      │
├─────────────────────────────────────────────────────────────────────────────┤
│  Available routes:                                                           │
│  [1] /session     - Overview and concept                                     │
│  [2] /workshops   - Workshops hub & programs                                 │
│  [3] /performance - Live performance interface                               │
└─────────────────────────────────────────────────────────────────────────────┘`}
        </div>

        <div className="grid g3" style={{ gap: 20 }}>
          {pages.map((page) => (
            <div key={page.key}>
              <Link href={page.path} style={{ textDecoration: "none" }}>
                <div 
                  className="card" 
                  style={{
                    cursor: "pointer",
                    borderColor: currentPage === page.key ? "var(--accent)" : "var(--line)",
                    boxShadow: currentPage === page.key ? "0 0 0 2px rgba(0,255,208,0.2)" : "var(--shadow)",
                    transition: "all 0.3s ease",
                    background: currentPage === page.key ? "rgba(0,255,208,0.05)" : "var(--surface)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    if (currentPage !== page.key) {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,255,208,0.15)";
                      e.currentTarget.style.borderColor = "var(--accent)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== page.key) {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "var(--shadow)";
                      e.currentTarget.style.borderColor = "var(--line)";
                    }
                  }}
                >
                  {/* Terminal scanline effect */}
                  <div 
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "0.6";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0";
                    }}
                  />
                  
                  <div className="mono" style={{ 
                    fontSize: "0.6rem", 
                    color: currentPage === page.key ? "var(--accent)" : "var(--muted)",
                    whiteSpace: "pre",
                    lineHeight: 1.1,
                    marginBottom: 8,
                    transition: "color 0.3s ease",
                  }}>
                    {page.ascii}
                  </div>
                  
                  <div style={{ textAlign: "center" }}>
                    <div className="mono" style={{ 
                      fontSize: "0.8rem", 
                      fontWeight: 700,
                      color: currentPage === page.key ? "var(--accent)" : "var(--fg)",
                      marginBottom: 4,
                      transition: "color 0.3s ease",
                    }}>
                      {page.title}
                    </div>
                    <div className="mono" style={{ 
                      fontSize: "0.7rem", 
                      color: "var(--muted)",
                      transition: "color 0.3s ease",
                    }}>
                      {page.description}
                    </div>
                    
                    {currentPage === page.key && (
                      <div className="mono" style={{ 
                        fontSize: "0.6rem", 
                        color: "var(--accent)",
                        marginTop: 8,
                        animation: "pulse 2s ease-in-out infinite",
                      }}>
                        [CURRENT PAGE]
                      </div>
                    )}
                  </div>
                  
                  {/* Subtle glow effect on hover */}
                  <div 
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "radial-gradient(circle at center, rgba(0,255,208,0.03) 0%, transparent 70%)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      pointerEvents: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0";
                    }}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ 
          marginTop: 20, 
          padding: 12, 
          background: "rgba(0,0,0,0.3)", 
          border: "1px solid var(--line)",
          borderRadius: 8,
        }}>
          <div className="mono" style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
            <span style={{ color: "var(--accent)" }}>$</span> Click any terminal above to navigate
          </div>
          <div className="mono" style={{ fontSize: "0.7rem", color: "var(--muted)", marginTop: 4 }}>
            <span style={{ color: "var(--accent)" }}>$</span> Current session: {currentPage.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}
