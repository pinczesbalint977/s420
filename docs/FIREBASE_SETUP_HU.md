# Firebase beállítás lépésről lépésre (Storage nélkül)

## 0) Előfeltétel
- Készen van a React app.
- A projekt mappában futtatod a parancsokat.

## 1) Firebase projekt létrehozása
1. Nyisd meg: https://console.firebase.google.com
2. `Create project` -> név: pl. `lezerwebshop`
3. Google Analytics opcionális, most kikapcsolható
4. A projektben: `Project settings` -> `General` -> `Your apps` -> `Web app` hozzáadása
5. A kapott configból ezeket másold ki.

## 2) .env fájl kitöltése
1. A projekt gyökerében készíts `.env` fájlt a `.env.example` alapján.
2. Töltsd ki:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

3. Fontos: a `.env` után indítsd újra a fejlesztői szervert (`npm start`).

## 3) Authentication bekapcsolása
1. Firebase Console -> `Authentication` -> `Get started`
2. `Sign-in method` fül:
   - `Email/Password` -> Enable
3. Mentés

Megjegyzés: Anonymous auth nem kell, mert a vendég rendelés fiók nélkül fut.

## 4) Firestore Database létrehozása
1. `Firestore Database` -> `Create database`
2. `Production mode`
3. Régió: EU (pl. `europe-west1`), GDPR szempontból ajánlott
4. Létrehozás után `Rules` fülön cseréld le a szabályokat a `firebase/firestore.rules` tartalmára

## 5) Firestore szabály feltöltés (kézzel)
Nyisd meg a lokális fájlt: `firebase/firestore.rules`, és másold be a teljes tartalmát a Console Rules editorba, majd `Publish`.

## 6) Admin user beállítása
1. Authentication -> Users alatt hozd létre vagy használd a belépő felhasználót
2. A user UID-jával Firestore-ban legyen egy `users/{uid}` dokumentum
3. Mező: `role: "admin"`

## 7) Termék képek Storage nélkül
Storage-t nem használunk. A `products.imageUrls` mezőbe publikus képlinkek kerülnek.

Ajánlott ingyenes források:
- Saját tárhelyed (domaines statikus fájlok)
- Cloudinary free plan
- GitHub Pages/Netlify publikus image URL

Admin felületen soronként 1 URL-t kell megadni, minimum 3-at.

## 8) Kötelező Firestore kollekciók és mezők

### `users/{uid}`
- `email: string`
- `role: "user" | "admin"`
- `createdAt: timestamp`

### `products/{productId}`
- `name: string`
- `shortDescription: string`
- `description: string`
- `price: number`
- `stock: number`
- `imageUrls: string[]` (min. 3 URL)
- `isActive: boolean`
- `createdAt: timestamp`
- `updatedAt: timestamp`

### `orders/{orderId}`
- `uid: string | null` (ha vendég rendel, lehet `null`)
- `customer.fullName: string`
- `customer.email: string`
- `customer.phone: string`
- `customer.zip: string`
- `customer.city: string`
- `customer.address: string`
- `items: array`
- `total: number`
- `status: "new" | "shipped"`
- `legal.termsAcceptedAt: string|timestamp`
- `legal.privacyAcceptedAt: string|timestamp`
- `createdAt: timestamp`
- `updatedAt: timestamp` (admin státuszváltáskor)

### `designRequests/{id}`
- `fullName: string`
- `email: string`
- `material: string`
- `quantity: number`
- `message: string`
- `status: "new" | "processing" | "done"`
- `createdAt: timestamp`

## 9) Admin rendeléskezelés
Az `/admin` oldalon most:
1. Minden rendelés látszik (vendég + regisztrált)
2. Megrendelő adatok látszanak
3. Van checkbox: `Kész, feladtam a csomagot`
   - bepipálva: `status = shipped`
   - kivéve: `status = new`

## 10) Futtatás
```bash
npm install
npm start
```

## 11) Rendelés email értesítés
Új rendelésnél email értesítés beállítása itt:
- `docs/ORDER_EMAIL_SETUP_HU.md`

## 12) Ingyenes telefonos (Telegram) értesítés
Új rendelésnél Telegram push értesítés beállítása itt:
- `docs/TELEGRAM_NOTIFY_SETUP_HU.md`
