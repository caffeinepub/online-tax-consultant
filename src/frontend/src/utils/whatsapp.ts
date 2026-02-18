const WHATSAPP_NUMBER = '919876543210'; // Replace with actual WhatsApp business number

export function buildWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(
    `Hello Online Tax Consultant,\n\n${message}\n\nI would like to know more about your services.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
