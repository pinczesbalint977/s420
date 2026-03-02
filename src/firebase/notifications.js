export async function sendOrderNotification(payload) {
  const webhookUrl = import.meta.env.VITE_ORDER_NOTIFY_WEBHOOK_URL;

  if (!webhookUrl) {
    return { ok: false, skipped: true, reason: 'missing_webhook_url' };
  }

  // Apps Script webhooks from browser requests often hit CORS policy.
  // no-cors + simple text/plain request still sends the notification.
  await fetch(webhookUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8'
    },
    body: JSON.stringify(payload)
  });

  return { ok: true, opaque: true };
}
