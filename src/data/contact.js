// Single source of truth for business contact details.
export const PHONE_DISPLAY = '+91 816 951 1202'
export const PHONE_TEL = '+918169511202'
export const WHATSAPP_NUMBER = '918169511202' // wa.me format (country code + number)
export const EMAIL = 'sales@promentocustomawards.com'
export const INSTAGRAM_HANDLE = '@pro_mento'
export const INSTAGRAM_URL = 'https://instagram.com/pro_mento'
export const ADDRESS =
  'Ganesh Chl, Siddhi Vinayak Ngr, Koknipada, S K Marg, Dahisar (E), Opp N.G. Park, Mumbai 400068'
export const ADDRESS_SHORT = 'Dahisar (E), Mumbai 400068'
export const MAPS_QUERY =
  'https://www.google.com/maps?q=Dahisar+East+S+K+Marg+Mumbai+400068&output=embed'
export const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Dahisar+East+S+K+Marg+Mumbai+400068'

export const whatsappLink = (
  message = "Hi Promento! I'd like a custom quote for an award."
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
