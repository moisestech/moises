"use client";

import React from "react";
import "../../../../styles/automation-tokens.css";
import Link from "next/link";
import TerminalNav from "../../../../components/automation/TerminalNav";

export default function SessionPage() {
  return (
    <main className="bg-grid" style={{ minHeight: "100vh", padding: "16px" }}>
      <header style={{ 
        textAlign: "center", 
        margin: "12px 0 16px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <div className="kicker mono">Locust Late @ The DiLL</div>
        <h1 className="title">
          Artist in the Automation — <span className="mono">[Agents 101 + Live Set]</span>
        </h1>
        <p style={{ maxWidth: 740, margin: "8px auto", color: "var(--muted)" }}>
          A single evening with two parts that build on each other. Build a tiny AI helper in the workshop, hear it onstage 60 minutes later.
        </p>
      </header>

      <section className="container">
        <TerminalNav currentPage="session" />
      </section>

      <section className="container">
        <div className="grid g3">
          <div className="card">
            <div className="kicker mono">Part 1</div>
            <h3 style={{ margin: "8px 0", color: "var(--accent)" }}>Agents 101 Workshop (60 min)</h3>
            <p className="sub">
              Guests use a drag-and-drop app to create tiny "AI helpers." One might write a headline, 
              another might generate a beat, another might invent a slogan. Everyone leaves knowing how to point an AI tool at a task without writing code.
            </p>
            <Link href="/workshop/artist-in-the-automation" className="btn btn-accent" style={{ marginTop: 12 }}>
              View Workshop
            </Link>
          </div>
          
          <div className="card">
            <div className="kicker mono">Part 2</div>
            <h3 style={{ margin: "8px 0", color: "var(--accent)" }}>Synthetic Symposium (25 min)</h3>
            <p className="sub">
              An hour later those same helpers appear on the big screens. They talk, sing, or clash 
              while Moises acts as DJ-moderator—mixing their voices, adding music, and jumping in with live commentary. The audience can nudge the discussion from their phones.
            </p>
            <Link href="/workshop/artist-in-the-automation/performance" className="btn btn-accent" style={{ marginTop: 12 }}>
              View Performance
            </Link>
          </div>
          
          <div className="card">
            <div className="kicker mono">The Big Idea</div>
            <h3 style={{ margin: "8px 0", color: "var(--accent)" }}>People → Agents → Show</h3>
            <p className="sub">
              People feed the agents → the agents feed the show → the show sparks a group conversation. 
              The audience can nudge the discussion from their phones, so the show is never the same twice.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="card" style={{ maxWidth: 840, margin: "0 auto" }}>
          <div className="kicker mono">How the Parts Connect</div>
          
          <div style={{ marginTop: 16 }}>
            <div style={{ marginBottom: 16 }}>
              <h4 style={{ color: "var(--accent)", marginBottom: 8 }}>Workshop feeds performance</h4>
              <p className="sub">
                Everything participants build is piped straight into the stage system—no extra coding, 
                no outside internet calls.
              </p>
            </div>
            
            <div style={{ marginBottom: 16 }}>
              <h4 style={{ color: "var(--accent)", marginBottom: 8 }}>Real-time stakes</h4>
              <p className="sub">
                Because the show runs on fresh material made an hour earlier, it stays unpredictable 
                and keeps the crowd invested ("That glitchy voice is mine!").
              </p>
            </div>
            
            <div style={{ marginBottom: 16 }}>
              <h4 style={{ color: "var(--accent)", marginBottom: 8 }}>Why not flip it?</h4>
              <p className="sub">
                If the show came first, it would feel rehearsed and the workshop would lose its payoff. 
                Learning → seeing the result → discussing the impact is the tension that makes the night work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="card" style={{ maxWidth: 840, margin: "0 auto" }}>
          <div className="kicker mono">Goals</div>
          
          <div className="grid g2" style={{ marginTop: 16 }}>
            <div>
              <h4 style={{ color: "var(--accent)", marginBottom: 8 }}>Agent literacy</h4>
              <p className="sub">
                Demystify how autonomous tools work so artists and non-coders can bend them to creative ends.
              </p>
            </div>
            
            <div>
              <h4 style={{ color: "var(--accent)", marginBottom: 8 }}>Shared authorship</h4>
              <p className="sub">
                Let every participant hear and see their own AI "voice" inside a public artwork.
              </p>
            </div>
            
            <div>
              <h4 style={{ color: "var(--accent)", marginBottom: 8 }}>Speculative newsroom</h4>
              <p className="sub">
                Model a future media desk where humans guide—not replace—AI output, raising the civic question: who steers the feed?
              </p>
            </div>
            
            <div>
              <h4 style={{ color: "var(--accent)", marginBottom: 8 }}>Cross-discipline bridge</h4>
              <p className="sub">
                Combine coding, sound, design, and performance in one flow that matches Locust Late's mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="card" style={{ maxWidth: 840, margin: "0 auto" }}>
          <div className="kicker mono">Evening Timeline</div>
          
          <div style={{ marginTop: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span className="mono" style={{ color: "var(--accent)" }}>5:00 pm</span>
              <span>Load-in & quick tech check</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span className="mono" style={{ color: "var(--accent)" }}>6:30 pm</span>
              <span>Agents 101 workshop starts</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span className="mono" style={{ color: "var(--accent)" }}>7:30 pm</span>
              <span>Break + copy workshop output to stage laptop</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span className="mono" style={{ color: "var(--accent)" }}>8:00 pm</span>
              <span>Doors reopen, QR code goes live</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span className="mono" style={{ color: "var(--accent)" }}>8:05 pm</span>
              <span>Synthetic Symposium (Live) begins</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span className="mono" style={{ color: "var(--accent)" }}>8:30 pm</span>
              <span>Short Q&A</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span className="mono" style={{ color: "var(--accent)" }}>8:45 pm</span>
              <span>Social hang; guests can save their AI helpers</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="mono" style={{ color: "var(--accent)" }}>9:00 pm</span>
              <span>Strike & save recording</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="card" style={{ maxWidth: 840, margin: "0 auto" }}>
          <div className="kicker mono">Key Collaborators</div>
          
          <div style={{ marginTop: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 16, marginBottom: 12 }}>
              <span className="mono" style={{ color: "var(--accent)" }}>Lead artist / host</span>
              <span>Moises Sanabria — Designs workshop, runs live mix</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 16, marginBottom: 12 }}>
              <span className="mono" style={{ color: "var(--accent)" }}>Voice + music design</span>
              <span>Fabiola Larios — Chooses AI voices, prepares backup audio</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 16, marginBottom: 12 }}>
              <span className="mono" style={{ color: "var(--accent)" }}>Systems support</span>
              <span>Daniel Lupescu — Sets up the local software and network</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 16, marginBottom: 12 }}>
              <span className="mono" style={{ color: "var(--accent)" }}>Workshop assistant</span>
              <span>Bakehouse Fellow (TBA) — Floor help, Spanish translation</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 16 }}>
              <span className="mono" style={{ color: "var(--accent)" }}>Venue team</span>
              <span>Locust Projects DiLL staff — Screens, sound, seating, access</span>
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
