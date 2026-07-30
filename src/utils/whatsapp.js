const WHATSAPP_NUMBER = '5511930522296';
const DEFAULT_MESSAGE = 'Olá! Vim pelo site da Echlin e gostaria de mais informações.';

export function getWhatsAppUrl(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
