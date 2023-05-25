import CryptoJS from 'crypto-js';

export function generateNonce() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 32);
}

export function createBaseString(url, oauthCallback, oauthConsumerKey, oauthNonce, oauthSignatureMethod, oauthTimestamp, oauthVersion) {
  const params = {
    oauth_callback: oauthCallback,
    oauth_consumer_key: oauthConsumerKey,
    oauth_nonce: oauthNonce,
    oauth_signature_method: oauthSignatureMethod,
    oauth_timestamp: oauthTimestamp,
    oauth_version: oauthVersion,
  };

  // const sortedParams = Object.keys(params)
  //   .sort()
  //   .map((key) => `${key}=${encodeURIComponent(params[key])}`)
  //   .join('&');

  // return `GET&${encodeURIComponent(url)}&${encodeURIComponent(sortedParams)}`;
  return new URLSearchParams(params).toString();
}

export function generateSignature(baseString, oauthConsumerSecret) {
  const signingKey = `${oauthConsumerSecret}&`;
  const signature = CryptoJS.HmacSHA1(baseString, signingKey).toString(CryptoJS.enc.Base64);

  return signature;
}
