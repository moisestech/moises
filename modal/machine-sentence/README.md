# Machine Sentence body-score (Modal)

Minimal Modal web endpoint for `MACHINE SENTENCE NO. 1`.

## What it does

- Accepts `POST { "text": "..." }`
- Returns clamped body scores + authored `state`
- **Never** returns motor commands

## Setup

```bash
pip install modal
modal token new
```

## Serve locally (hot reload)

```bash
modal serve modal/machine-sentence/app.py
```

## Deploy

```bash
modal deploy modal/machine-sentence/app.py
```

Copy the HTTPS endpoint URL into the Next.js environment:

```bash
# .env.local
MODAL_INFERENCE_URL=https://...modal.run/...
MODAL_INFERENCE_TOKEN=  # optional bearer
```

## Website mock mode (no Modal required)

The proposal prototype works without any Modal deploy:

1. Open `/grant/modal-gray-area-2026/machine-sentence-no-1`
2. Leave mode on **Mock** (default)
3. Enter a sentence — same text always maps to the same body

API route always available:

```bash
curl -X POST http://localhost:3000/api/grant/machine-sentence/score \
  -H 'content-type: application/json' \
  -d '{"text":"I remember something that never happened."}'
```

If `MODAL_INFERENCE_URL` is unset, the API uses the deterministic mock.

## Limitations

- Current Modal function uses a stable hash heuristic (same as mock) so deploy proves plumbing, not LLM quality
- Image generation intentionally postponed
- Protect the endpoint before public load (token / Modal auth)

## Next steps

1. Replace heuristic with small embedding + linear head
2. Add authenticated Modal proxy
3. Introduce slow-path texture generation only after body scoring is stable
