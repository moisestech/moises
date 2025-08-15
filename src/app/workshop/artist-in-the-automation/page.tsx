"use client";

import React from "react";
import "../../../styles/automation-tokens.css";
import { WORKSHOP_PROMPS } from "../../../data/script";

export default function WorkshopPage() {
  return (
    <main className="bg-grid" style={{ minHeight: "100vh", padding: "16px" }}>
      <header style={{ textAlign: "center", margin: "12px 0 16px" }}>
        <div className="kicker mono">Day 1</div>
        <h1 className="title">Agents 101 — Build Your Helper</h1>
        <p style={{ maxWidth: 740, margin: "8px auto", color: "var(--muted)" }}>
          No code. Drag + drop a role, give it a job (copy line, slogan, tiny beat),
          save your output. Tomorrow you'll hear it onstage.
        </p>
      </header>

      <section className="container">
        <div className="grid g3">
          <div className="card">
            <div className="kicker mono">Step 1</div>
            <h3 style={{ margin: "8px 0", color: "var(--accent)" }}>Choose Your Agent</h3>
            <p className="sub">
              Pick from Polly (Optimist), Grit (Historian), Spec (Artist), 
              SysAdmin (Literalist), or A404 (Glitch). Each has a distinct voice.
            </p>
          </div>
          
          <div className="card">
            <div className="kicker mono">Step 2</div>
            <h3 style={{ margin: "8px 0", color: "var(--accent)" }}>Write Your Prompt</h3>
            <p className="sub">
              Give your agent a simple task: write one line, invent a slogan, 
              or describe a scene. Keep it under 20 words.
            </p>
          </div>
          
          <div className="card">
            <div className="kicker mono">Step 3</div>
            <h3 style={{ margin: "8px 0", color: "var(--accent)" }}>Hear It Live</h3>
            <p className="sub">
              Your agent will appear in tonight's performance. Watch how it 
              interacts with other voices in the synthetic symposium.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="card" style={{ maxWidth: 840, margin: "0 auto" }}>
          <div className="kicker mono">Starter Prompts</div>
          
          <div style={{ marginTop: 16 }}>
            <h4 style={{ color: "var(--accent)", marginBottom: 8 }}>Authorship</h4>
            <ul style={{ marginBottom: 16, paddingLeft: 20 }}>
              {WORKSHOP_PROMPS.authorship.map((prompt, i) => (
                <li key={i} style={{ marginBottom: 8, color: "var(--muted)" }}>
                  "{prompt}"
                </li>
              ))}
            </ul>
            
            <h4 style={{ color: "var(--accent)", marginBottom: 8 }}>Labor & Time</h4>
            <ul style={{ marginBottom: 16, paddingLeft: 20 }}>
              {WORKSHOP_PROMPS.labor.map((prompt, i) => (
                <li key={i} style={{ marginBottom: 8, color: "var(--muted)" }}>
                  "{prompt}"
                </li>
              ))}
            </ul>
            
            <h4 style={{ color: "var(--accent)", marginBottom: 8 }}>Miami Lens</h4>
            <ul style={{ marginBottom: 16, paddingLeft: 20 }}>
              {WORKSHOP_PROMPS.miami.map((prompt, i) => (
                <li key={i} style={{ marginBottom: 8, color: "var(--muted)" }}>
                  "{prompt}"
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{ 
            background: "rgba(0,255,208,0.1)", 
            border: "1px solid var(--accent)", 
            borderRadius: 8, 
            padding: 12,
            marginTop: 16
          }}>
            <p className="mono" style={{ fontSize: "0.8rem", color: "var(--accent)", margin: 0 }}>
              💡 Tip: Write prompts that encourage concrete, specific responses. 
              Avoid abstract concepts—aim for tangible examples and clear actions.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="card" style={{ maxWidth: 840, margin: "0 auto" }}>
          <div className="kicker mono">What Happens Next</div>
          <div className="grid g2">
            <div>
              <h4 style={{ color: "var(--accent)", marginBottom: 8 }}>Workshop Output</h4>
              <p className="sub">
                All prompts are collected and formatted into tonight's performance script. 
                Your agent will speak your exact words, credited to you.
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--accent)", marginBottom: 8 }}>Live Performance</h4>
              <p className="sub">
                Multiple agents debate, sing, and clash while Moises mixes voices, 
                music, and visuals like a DJ. The audience can intervene live.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: "center", marginTop: 32, opacity: 0.7 }}>
        <div className="hr"></div>
        <p className="mono" style={{ marginTop: 10, fontSize: "0.8rem" }}>
          © Artist in the Automation — A Locust Late @ The DiLL program
        </p>
      </footer>
    </main>
  );
}
