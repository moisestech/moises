from __future__ import annotations

import os

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from .models import AgentRun, ApprovalRequest, StartRunRequest
from .orchestrator import apply_approval, start_run
from .state import store

app = FastAPI(title="Agentic Ops API", version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict:
    return {"ok": True, "demo_mode": os.getenv("DEMO_MODE", "1") == "1"}


@app.post("/runs", response_model=AgentRun)
def create_run(body: StartRunRequest) -> AgentRun:
    demo = body.demo or os.getenv("DEMO_MODE", "1") == "1"
    return start_run(StartRunRequest(brief=body.brief, scenario=body.scenario, demo=demo))


@app.get("/runs/{run_id}", response_model=AgentRun)
def get_run(run_id: str) -> AgentRun:
    run = store.get(run_id)
    if not run:
        raise HTTPException(status_code=404, detail="Run not found")
    return run


@app.post("/runs/{run_id}/approval", response_model=AgentRun)
def approve_run(run_id: str, body: ApprovalRequest) -> AgentRun:
    body.run_id = run_id
    try:
        return apply_approval(body)
    except KeyError:
        raise HTTPException(status_code=404, detail="Run not found") from None
