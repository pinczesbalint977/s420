function getWebhookUrl() {
  return import.meta.env.VITE_NOTIFY_WEBHOOK_URL || import.meta.env.VITE_ORDER_NOTIFY_WEBHOOK_URL;
}

export async function sendNotificationEvent(payload) {
  const webhookUrl = getWebhookUrl();

  if (!webhookUrl) {
    return { ok: false, skipped: true, reason: 'missing_webhook_url' };
  }

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

export async function sendOrderNotification(payload) {
  return sendNotificationEvent({
    type: 'order_created',
    ...payload
  });
}
