# GitHub Pages / statikus hostolás

A projekt statikus hostra kompatibilisre van állítva:
- router: `HashRouter`
- Vite base: `./`

## Deploy
```bash
npm run build
```

Ezután a `dist` tartalmát kell feltölteni a hostra.

## URL forma
A belső útvonalak hash-esek lesznek:
- `/#/`
- `/#/bejelentkezes`
- `/#/admin`

Ez szükséges ahhoz, hogy GitHub Pages és más statikus hosztok SPA fallback nélkül is működjenek.

## Fontos
Ha GitHub Actions buildeli az oldalt, a build környezetben a szükséges Vite env változók is kellenek:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_ORDER_NOTIFY_WEBHOOK_URL` (ha használod)
