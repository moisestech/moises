# Level I Real Capture Checklist

Use this only after the participant flow is stable. The goal is to capture the minimum real product evidence needed to teach Level I without creating a screenshot-maintenance burden.

## Before capture

- Use a clean browser window.
- Use the fictional Northstar Studio Co. case or a sanitized DCC day. Do not expose confidential client, personnel, banking, legal, health, password, or account information.
- Use current production ChatGPT and Claude interfaces.
- Keep the same scenario across both tools so differences are attributable to the tools, not the example.
- Capture the content area clearly enough to read the teaching moment. Avoid unnecessary browser chrome.
- Never retouch a screenshot in a way that changes what the product actually did.
- If a product UI changes materially later, mark the capture `replace-after-ui-change` rather than silently mixing versions.

Canonical Cloudinary root:

```
moisestech/workshops/build-your-ai-daily-operator/09-tool-guides/
```

## ChatGPT — 7 screenshots + 1 short video

Folder:

```
moisestech/workshops/build-your-ai-daily-operator/09-tool-guides/chatgpt/level-i
```

1. **Outcome**
   - ID: `ado-howto-chatgpt-l1-goal-01`
   - Public ID stem: `goal-01`
   - Capture: one clear 30-day business outcome, not a task list.

2. **Founder Profile**
   - ID: `ado-howto-chatgpt-l1-founder-profile-02`
   - Public ID stem: `founder-profile-02`
   - Capture: the model asking only business-context questions that could change prioritization.

3. **Operator setup**
   - ID: `ado-howto-chatgpt-l1-operator-setup-03`
   - Public ID stem: `operator-setup-03`
   - Capture: Attention Rules + portable Daily Operator context established.

4. **Daily Operating Brief**
   - ID: `ado-howto-chatgpt-l1-daily-brief-04`
   - Public ID stem: `daily-brief-04`
   - Capture: Today in one sentence + commitments + top outcomes + meaningful signals + what can wait.

5. **Challenge + evidence**
   - ID: `ado-howto-chatgpt-l1-challenge-evidence-05`
   - Public ID stem: `challenge-evidence-05`
   - Capture: why #1 outranks #2 plus Fact / Interpretation / Recommendation.

6. **Observed friction**
   - ID: `ado-howto-chatgpt-l1-friction-06`
   - Public ID stem: `friction-06`
   - Capture: retrieval / reconciliation / memory / transfer / decision / approval / communication named without jumping to automation.

7. **Seven-day experiment**
   - ID: `ado-howto-chatgpt-l1-seven-day-07`
   - Public ID stem: `seven-day-07`
   - Capture: corrections + manually reconstructed information becoming the next improvement.

8. **Short demo video**
   - ID: `ado-howto-chatgpt-l1-demo-video`
   - Public ID stem: `demo-video`
   - Target: 60–90 seconds.
   - Show: outcome → context → brief → challenge → friction.
   - Do not turn it into a product tour.

## Claude — 7 screenshots + 1 short video

Folder:

```
moisestech/workshops/build-your-ai-daily-operator/09-tool-guides/claude/level-i
```

Use the same seven teaching moments and the same fictional/sanitized case:

```
goal-01
founder-profile-02
operator-setup-03
daily-brief-04
challenge-evidence-05
friction-06
seven-day-07
demo-video
```

Canonical IDs:

```
ado-howto-claude-l1-goal-01
ado-howto-claude-l1-founder-profile-02
ado-howto-claude-l1-operator-setup-03
ado-howto-claude-l1-daily-brief-04
ado-howto-claude-l1-challenge-evidence-05
ado-howto-claude-l1-friction-06
ado-howto-claude-l1-seven-day-07
ado-howto-claude-l1-demo-video
```

## What not to capture

Do not capture:

- login/account screens;
- personal chat history unrelated to the course;
- confidential business records;
- API keys, passwords, bank/account numbers, private contact details;
- a visually impressive answer that does not demonstrate the intended competency;
- product UI that has been generated or recreated outside the actual tool.

## Capture quality test

A screenshot is approved only if a participant can answer:

1. What step am I looking at?
2. What decision or behavior is this teaching?
3. What should I do next?
4. Is this clearly a real current product interface?
5. Is any unnecessary sensitive information visible?

If the answer to 1–4 is unclear or 5 is yes, recapture.

## After capture

For each file:

1. Rename locally to the canonical public ID stem.
2. Upload to the exact Cloudinary folder above.
3. Record real returned:
   - asset_id
   - public_id
   - version
   - format
   - width / height
   - secure_url
4. Update `image-manifest.json`.
5. Update `tool-guides.ts` status from `needed` → `captured` → `approved`.
6. Replace the website placeholder only after the Cloudinary asset is verified.
7. Keep the previous approved capture as a backup if the UI changes.

## Timebox

Target one focused capture session:

- ChatGPT screenshots: 10–15 min
- ChatGPT demo: 5 min
- Claude screenshots: 10–15 min
- Claude demo: 5 min
- Cloudinary promotion + manifest update: 10–15 min

Do not expand the capture set unless a participant actually needs another teaching moment.
