# DES646 Frontend

React frontend for the motion feedback system.

## Setup

Install dependencies:
```bash
npm install
```

## Development

Start the dev server (proxies API requests to Django backend at http://127.0.0.1:8000):
```bash
npm start
```

(`npm run dev` still works; `npm start` added for convention.)

Frontend will be available at http://localhost:3000

## Build for Production

```bash
npm run build
```

Build output will be in `dist/` directory.
