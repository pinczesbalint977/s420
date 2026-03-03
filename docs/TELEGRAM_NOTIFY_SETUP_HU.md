# Telegram csoportos értesítés beállítása

Ez a megoldás értesítést küld ezekről:

- új sima rendelés
- új egyedi árajánlatkérés
- új ötlet / feladat
- új komment egy ötlethez
- feladat lezárása

A legjobb felállás: ne külön privát chatet használj, hanem egy közös Telegram csoportot, amiben benne van:

- Ferenc
- Bálint
- Zoltán
- a bot

Így mindenki ugyanazt az értesítést kapja meg.

## 1) Telegram bot létrehozása

1. Telegramban nyisd meg: `@BotFather`
2. Írd: `/newbot`
3. Adj neki tetszőleges nevet
4. Adj neki egyedi username-et, ami `bot` végű
5. Mentsd el a kapott `BOT_TOKEN` értéket

## 2) Közös admin csoport létrehozása

1. Hozz létre egy új Telegram csoportot
2. Tedd bele:
   - a másik két admint
   - a botot is
3. A csoportban küldj egy üzenetet, ami a botnak is látszik:
   - pl. `/teszt@BOT_USERNAME`

Ha a bot nem látja a csoportos üzenetet:

1. BotFather
2. `/mybots`
3. válaszd ki a botot
4. `Bot Settings`
5. `Group Privacy`
6. kapcsold ki

## 3) Csoport chat ID lekérése

Nyisd meg ezt böngészőben:

```text
https://api.telegram.org/bot<BOT_TOKEN>/getUpdates
```

Keresd meg benne a csoport chat adatait, például:

```json
"chat": {
  "id": -1234567890,
  "title": "Lezer webshop admin",
  "type": "group"
}
```

Ami kell neked:

- `chat.id`

Fontos:

- csoportnál ez általában negatív szám

## 4) Google Apps Script webhook létrehozása

1. Menj ide: https://script.google.com
2. `New project`
3. Töröld a mintakódot
4. Másold be ezt:

```javascript
const BOT_TOKEN = 'IDE_JON_A_BOT_TOKEN';
const CHAT_ID = 'IDE_JON_A_CSOPORT_CHAT_ID';

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const text = buildMessage(payload);

    UrlFetchApp.fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        disable_web_page_preview: true
      })
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function buildMessage(payload) {
  switch (payload.type) {
    case 'order_created':
      return [
        'Uj rendeles erkezett',
        `Rendeles ID: ${payload.orderId || '-'}`,
        `Nev: ${payload.customer?.fullName || '-'}`,
        `Email: ${payload.customer?.email || '-'}`,
        `Telefon: ${payload.customer?.phone || '-'}`,
        `Cim: ${payload.customer?.zip || ''} ${payload.customer?.city || ''}, ${payload.customer?.address || ''}`.trim(),
        `Vegosszeg: ${payload.pricing?.total ?? payload.total ?? 0} Ft`,
        `Termekek: ${formatItems(payload.items)}`
      ].join('\n');

    case 'design_request_created':
      return [
        'Uj egyedi ajanlatkeres erkezett',
        `Keres ID: ${payload.requestId || '-'}`,
        `Nev: ${payload.fullName || '-'}`,
        `Email: ${payload.email || '-'}`,
        `Telefon: ${payload.phone || '-'}`,
        `Anyag: ${payload.material || '-'}`,
        `Darabszam: ${payload.quantity || '-'}`,
        `Hatarido: ${payload.deadline || '-'}`,
        `Telepules: ${payload.city || '-'}`,
        `Referencia: ${payload.fileUrl || 'nincs'}`,
        `Leiras: ${payload.message || '-'}`
      ].join('\n');

    case 'admin_idea_created':
      return [
        'Uj otlet vagy feladat jott letre',
        `ID: ${payload.ideaId || '-'}`,
        `Cim: ${payload.title || '-'}`,
        `Tipus: ${payload.kind === 'idea' ? 'Otlet' : 'Feladat'}`,
        `Bekuldo: ${payload.authorName || '-'}`,
        `Kiosztva: ${payload.assigneeName || '-'}`,
        `Leiras: ${payload.description || '-'}`
      ].join('\n');

    case 'admin_idea_comment_created':
      return [
        'Uj komment erkezett egy otlethez',
        `Otlet ID: ${payload.ideaId || '-'}`,
        `Otlet cime: ${payload.ideaTitle || '-'}`,
        `Kommentelo: ${payload.authorName || '-'}`,
        `Komment: ${payload.text || '-'}`
      ].join('\n');

    case 'admin_idea_completed':
      return [
        'Feladat lezarva',
        `Otlet ID: ${payload.ideaId || '-'}`,
        `Otlet cime: ${payload.ideaTitle || '-'}`,
        `Kiosztva: ${payload.assigneeName || '-'}`,
        `Valaszado: ${payload.completionReport?.responderName || '-'}`,
        `Koltseg: ${payload.completionReport?.cost || '-'}`,
        `Ido: ${payload.completionReport?.timeEstimate || '-'}`,
        `Kivitelezheto: ${payload.completionReport?.feasible || '-'}`,
        `Mi kell hozza: ${payload.completionReport?.requirements || '-'}`
      ].join('\n');

    default:
      return `Ismeretlen webhook esemeny: ${JSON.stringify(payload)}`;
  }
}

function formatItems(items) {
  if (!items || !items.length) {
    return 'nincs';
  }

  return items
    .map((item) => `${item.name || 'Termek'} x ${item.quantity || 1}`)
    .join(', ');
}
```

## 5) Web app deploy

1. `Deploy`
2. `New deployment`
3. Típus: `Web app`
4. `Execute as`: `Me`
5. `Who has access`: `Anyone`
6. `Deploy`
7. Másold ki a kapott `Web app URL` címet

Fontos: mindig a `/exec` végű URL kell.

## 6) Webshop .env beállítás

A projekt `.env` fájlba írd be:

```env
VITE_NOTIFY_WEBHOOK_URL=https://script.google.com/macros/s/AKF.../exec
```

Utána indítsd újra:

```bash
npm start
```

## 7) Tesztelés

Próbáld ki sorban:

1. sima rendelés leadása
2. egyedi ajánlatkérés leadása
3. új ötlet létrehozása adminban
4. komment hozzáadása egy ötlethez

Ha nem jön értesítés:

1. ellenőrizd, hogy a bot benne van-e a csoportban
2. ellenőrizd, hogy jó-e a `CHAT_ID`
3. ellenőrizd, hogy a `.env`-ben a friss `/exec` URL van-e
4. Apps Scriptben nézd meg az `Executions` fület

## 8) Mi van most bekötve a webshopban

Jelenleg ezek a frontend események hívják a webhookot:

- pénztárból új rendelés
- egyedi tervezés űrlapból új kérés
- admin ötlet/feladat létrehozás
- admin ötlethez új komment
- admin ötlet lezárás
