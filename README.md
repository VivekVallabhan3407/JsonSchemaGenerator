# JSON Schema Generator

## 🧩 JSON Schema Generator

A lightweight tool that converts raw JSON input into a JSON Schema, TypeScript types, and optional sample validation output.
Built with React + TypeScript for developers who frequently work with structured data or APIs.

## ✨ Features

-  Paste JSON and instantly generate:

  - JSON Schema (type, properties, required)

  - TypeScript Interface/Type

-  Auto-detection of types (string, number, array, object, boolean, null)

-  Optional schema validation preview

-  Copy-to-clipboard for all generated outputs

-  Clean and simple UI (React + TS)

-  No backend, no database — 100% client-side


## Tech Stack

- ⚡ Vite (Build tool)

- ⚛️ React + TypeScript (Frontend)

- 🎨 CSS Modules for styling

- 🔔 React-Toastify for notifications


## 📁 Project Structure

```
json-schema-generator/
├── README.md
├── node_modules
├── public
├── src
    ├── assets
    ├── components
        ├── JsonInput
        ├   ├── JsonInput.css
        ├   └── JsonInput.tsx
        └── OutputPanel
            ├── OutputPanel.css
            └── OutputPanel.tsx
    ├── hooks
        └── useStateJson.ts
    ├── pages
        └── Home.tsx
    ├── styles
        └── global.css
    ├── utils
            ├── download.ts
            ├── JsonToSchema.ts
            ├── jsonToTs.ts
            └── validateJson.ts
    ├── App.css
    ├── App.jsx
    ├── index.css
    └── main.tsx
└── index.html



```

## License

MIT License — free to use and modify.
