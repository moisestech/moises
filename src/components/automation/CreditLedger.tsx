"use client";

import React from "react";
import { Agent } from "../../data/script";

type Credit = { prompt?: string; edit?: string; performer?: string };

interface CreditLedgerProps {
  agent: Agent;
  credit?: Credit;
  visible: boolean;
}

export default function CreditLedger({ agent, credit, visible }: CreditLedgerProps) {
  if (!visible || !credit) return null;
  
  return (
    <div 
      className="card mono" 
      style={{
        position: "fixed",
        right: 16,
        bottom: 86,
        zIndex: 40,
        width: 320,
        background: "rgba(15,17,22,.85)",
        border: "1px solid var(--line)",
        fontSize: "0.8rem",
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 6, color: "var(--accent)" }}>
        [{agent}] Credit Ledger
      </div>
      <div style={{ marginBottom: 4 }}>
        <span style={{ color: "var(--muted)" }}>Prompt:</span> {credit.prompt ?? "—"}
      </div>
      <div style={{ marginBottom: 4 }}>
        <span style={{ color: "var(--muted)" }}>Edit:</span> {credit.edit ?? "—"}
      </div>
      <div>
        <span style={{ color: "var(--muted)" }}>Performer:</span> {credit.performer ?? "—"}
      </div>
    </div>
  );
}
