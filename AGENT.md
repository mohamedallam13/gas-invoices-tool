# AGENT.md — gas-invoices-tool

## Purpose
A Google Apps Script WebApp for submitting invoice entries to a Google Sheet. Uses a components library for the UI. Client/server split architecture.

## Structure
```
gas-invoices-tool/
├── README.md
├── AGENT.md
└── src/
    ├── appsscript.json  ← GAS manifest
    ├── client/          ← HTML/CSS/JS frontend (invoice entry form)
    ├── server/          ← GAS server-side scripts (Sheets write)
    └── screenshots/     ← UI screenshots (referenced in README)
```

## Key Facts
- **Platform:** Google Apps Script WebApp
- **Data store:** Google Sheets
- **Pattern:** Component-library-based UI + GAS backend
- **Entry point:** `server/` contains the `doGet()` / `doPost()` functions

## Development Notes
- All source files live under `src/` — push with clasp from that directory
- No Node/npm at runtime; ES5-compatible GAS code only
