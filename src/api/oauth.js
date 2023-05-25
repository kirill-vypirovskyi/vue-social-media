import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';

const oauth = new OAuth({
  consumer: {
    key: import.meta.env.VUE_APP_CONSUMER_KEY,
    secret: import.meta.env.VUE_APP_CONSUMER_SECRET,
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
  },
});

export default oauth;