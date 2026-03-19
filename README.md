# GAS Invoices Tool

A Google Apps Script WebApp for submitting invoice entries to a Google Sheet. Uses a reusable HTML component library to build the form UI dynamically, supporting multiple invoice types with conditional logic and dynamic product rows.

![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=flat&logo=google&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-WebApp-blue)

---

## Features

- Component library that generates reusable HTML modules for form elements
- Supports multiple invoice types with different field sets and conditions
- Dynamic product rows — add and remove lines as needed
- Form validation before submission
- Submitted data written directly to Google Sheets via the GAS backend
- Client/server split architecture

---

## Tech Stack

| Layer    | Technology                      |
|----------|---------------------------------|
| Platform | Google Apps Script              |
| UI       | HTML5, CSS3, Vanilla JavaScript |
| Pattern  | HTML component library (GAS scriplets) |
| Database | Google Sheets                   |
| Deploy   | clasp CLI                       |

---

## Project Structure

```
gas-invoices-tool/
├── README.md
├── AGENT.md
└── src/
    ├── appsscript.json  # GAS manifest
    ├── client/          # Form UI, component library, client-side JS
    └── server/          # doGet(), Sheets write, routing
```

---

## Getting Started

### Prerequisites

- A Google account with Google Apps Script access
- [clasp](https://github.com/google/clasp) installed globally

```bash
npm install -g @google/clasp
clasp login
```

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedallam13/gas-invoices-tool.git
   cd gas-invoices-tool
   ```

2. Link to your Apps Script project:
   ```bash
   clasp create --type webapp --title "GAS Invoices Tool" --rootDir src
   ```

3. Push source files:
   ```bash
   clasp push
   ```

---

## Deployment

1. In the Apps Script editor, go to **Deploy > New deployment**
2. Select type: **Web app**
3. Set **Execute as**: Me · **Who has access**: Anyone
4. Click **Deploy** and share the Web App URL

---

## Author

**Mohamed Allam** — [GitHub](https://github.com/mohamedallam13) · [Email](mailto:mohamedallam.tu@gmail.com)
