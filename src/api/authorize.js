import { GoogleAuth } from 'google-auth-library'

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI
const SCOPES = ['https://www.googleapis.com/auth/photoslibrary.readonly']

const auth = new GoogleAuth({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI
})

// Генерування URL авторизації
export const authUrl = auth.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES
})

// // Обробка колбеку після авторизації
// const code = 'AUTHORIZATION_CODE'; // Отриманий код авторизації
// auth.getToken(code, (err, tokens) => {
// if (err) {
// console.error('Помилка отримання токена доступу:', err);
// return;
// }

// // Токен доступу
// const accessToken = tokens.access_token;
// // Оновлюваний токен доступу
// const refreshToken = tokens.refresh_token;

// // Використання токена доступу для виконання запитів до Google Photos API
// // Реалізуйте необхідні запити тут
// });
