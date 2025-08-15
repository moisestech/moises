"use client";

import React, { useMemo, useState } from "react";
import "../../../../styles/automation-tokens.css";

import { AgentKey } from "../../../../data/agents";
import { SCRIPT, Cue, Agent } from "../../../../data/script";

import NorthStar from "../../../../components/automation/NorthStar";
import SegmentBumper from "../../../../components/automation/SegmentBumper";
import AgentScreen from "../../../../components/automation/AgentScreen";
import PoetryCaption from "../../../../components/automation/PoetryCaption";
import TimelinePlayer from "../../../../components/automation/TimelinePlayer";
import MusicDeck from "../../../../components/automation/MusicDeck";
import CardPanel from "../../../../components/automation/CardPanel";
import CreditLedger from "../../../../components/automation/CreditLedger";
import OrgChart from "../../../../components/automation/OrgChart";
import Ticker from "../../../../components/automation/Ticker";
import HumanMinute from "../../../../components/automation/HumanMinute";
import ModerationPanel from "../../../../components/automation/ModerationPanel";
import FaultOverlay from "../../../../components/automation/FaultOverlay";

export default function PerformancePage() {
  // Current lines (what appears on each screen)
  const [lines, setLines] = useState<Record<AgentKey, string>>({
    Polly: "", Grit: "", Spec: "", SysAdmin: "", A404: "", Fault: ""
  });
  const [caption, setCaption] = useState("");
  const [activeAgent, setActiveAgent] = useState<Agent | undefined>(undefined);

  // Show only 3 agents at a time for clarity
  const [visible, setVisible] = useState<AgentKey[]>(["Polly", "Grit", "Spec"]);

  // Kill Switch: muted agents for N seconds
  const [muted, setMuted] = useState<Record<AgentKey, number>>({
    Polly: 0, Grit: 0, Spec: 0, SysAdmin: 0, A404: 0, Fault: 0
  });

  // Human-only minute (global mute)
  const [globalMuteUntil, setGlobalMuteUntil] = useState<number>(0);

  // Overlays
  const [bumper, setBumper] = useState<string | undefined>(undefined);
  const [ledger, setLedger] = useState<{
    agent: Agent;
    prompt?: string;
    edit?: string;
    performer?: string;
  } | null>(null);

  // FAULT UI text
  const [faultText, setFaultText] = useState("");

  // Timeline handlers
  function onLine(c: Extract<Cue, { type: "line" }>) {
    const a = c.agent as AgentKey;

    // Respect mutes
    const now = Date.now();
    if (now < globalMuteUntil) return;
    if (muted[a] && muted[a] > now) return;

    setActiveAgent(c.agent);
    setLines(prev => ({ ...prev, [a]: c.text }));
    setCaption(c.text);
    setLedger({ agent: c.agent, ...c.credit });

    // Optional local TTS
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const u = new SpeechSynthesisUtterance(c.text);
      u.rate = c.agent === "SysAdmin" ? 1.0 : 1.05;
      u.pitch = c.agent === "A404" ? 0.7 : 1.0;
      u.volume = 0.9;
      window.speechSynthesis.speak(u);
    }
    
    setTimeout(() => setBumper(undefined), 4000);
    setTimeout(() => setLedger(null), 5000);
  }

  function onSegment(name: string) {
    setBumper(name);
    if (name === "INTERLUDE" && typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }

  function onRotate(show: string[]) {
    setVisible(show as AgentKey[]);
  }

  function onBumper(text: string) {
    setBumper(text);
  }

  // Audience cards
  function killSwitch(agent: AgentKey) {
    const until = Date.now() + 60_000;
    setMuted(prev => ({ ...prev, [agent]: until }));
    setCaption(`[${agent}] paused for 60 seconds`);
  }
  
  function clarify() {
    setCaption("Clarify: give one concrete example.");
  }
  
  function speedUp() {
    setCaption("Speed up: keep lines under 10 words.");
  }

  // Human-only minute controls
  function startHumanOnly(sec = 60) {
    const until = Date.now() + sec * 1000;
    // Cancel any speech
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setGlobalMuteUntil(until);
    setCaption("⎯ Human-Only Minute ⎯");
    setBumper("Interlude — Human-Only Minute");
  }
  
  function endHumanOnly() {
    setGlobalMuteUntil(0);
    setCaption("System online.");
    setBumper(undefined);
  }

  // FAULT overlay trigger
  function triggerFault(msg: string) {
    setFaultText(msg);
    if (!msg) return; // Clearing
    
    // Optionally also route a FAULT line to the screen (without TTS)
    setLines(prev => ({ ...prev, Fault: msg }));
    setActiveAgent("Fault");
    setCaption(msg);
    // Auto-clear overlay after 5s
    setTimeout(() => setFaultText(""), 5000);
  }

  const visibleScreens = useMemo(() => visible.slice(0, 3), [visible]);

  return (
    <main className="bg-grid" style={{ minHeight: "100vh", padding: "12px 12px 0" }}>
      <NorthStar />

      <header style={{ textAlign: "center", margin: "10px 0 12px" }}>
        <div className="kicker mono">Locust Late @ The DiLL</div>
        <h1 className="title">
          Artist in the Automation — <span className="mono">[Live Set]</span>
        </h1>
      </header>

      {/* Three-screen wall */}
      <section style={{
        display: "grid",
        gap: 12,
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        maxWidth: 1100,
        margin: "0 auto"
      }}>
        {visibleScreens.map((a) => (
          <AgentScreen
            key={a}
            agent={a}
            line={
              Date.now() < globalMuteUntil ? "⏹ Human-Only Minute" :
              muted[a] && muted[a] > Date.now() ? "⏸ Paused (Kill Switch)" :
              lines[a]
            }
            isActive={activeAgent === a}
            isMuted={Date.now() < globalMuteUntil || (muted[a] && muted[a] > Date.now())}
          />
        ))}
      </section>

      {/* Control row 1 */}
      <section style={{
        display: "grid",
        gap: 12,
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        maxWidth: 1100,
        margin: "14px auto 6px"
      }}>
        <TimelinePlayer cues={SCRIPT} handlers={{ onLine, onSegment, onRotate, onBumper }} />
        <MusicDeck />
        <CardPanel onKill={killSwitch} onClarify={clarify} onSpeed={speedUp} />
      </section>

      {/* Control row 2 */}
      <section style={{
        display: "grid",
        gap: 12,
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        maxWidth: 1100,
        margin: "6px auto 16px"
      }}>
        <OrgChart active={activeAgent} />
        <HumanMinute onStart={startHumanOnly} onEnd={endHumanOnly} />
        <ModerationPanel onTrigger={triggerFault} />
      </section>

      {/* Overlays */}
      {faultText && <FaultOverlay text={faultText} />}
      {bumper && <SegmentBumper text={bumper} />}
      {ledger && <CreditLedger agent={ledger.agent} credit={ledger} visible={true} />}

      <PoetryCaption text={caption} />
      <Ticker />
    </main>
  );
}
