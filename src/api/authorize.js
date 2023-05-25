import axios from 'axios'
import { createBaseString, generateNonce } from '../functions/auth.js'

export const sendOAuthRequest = async () => {
  const requestTockenUrl = 'https://www.flickr.com/services/oauth/request_token'
  const oauthCallback = 'http://localhost:5173'
  const oauthConsumerKey = import.meta.env.VITE_CONSUMER_KEY
  const oauthSignatureMethod = 'HMAC-SHA1'
  const oauthVersion = '1.0'

  const oauthNonce = generateNonce()
  const oauthTimestamp = Math.floor(Date.now() / 1000).toString()

  const baseString = createBaseString(
    requestTockenUrl,
    oauthCallback,
    oauthConsumerKey,
    oauthNonce,
    oauthSignatureMethod,
    oauthTimestamp,
    oauthVersion
  )
  // const oauthSignature = generateSignature(baseString, import.meta.env.VITE_CONSUMER_SECRET)

  // const requestUrl = `${url}?oauth_callback=${encodeURIComponent(
  //   oauthCallback
  // )}&oauth_consumer_key=${oauthConsumerKey}&oauth_nonce=${oauthNonce}&oauth_signature=${encodeURIComponent(
  //   oauthSignature
  // )}&oauth_signature_method=${oauthSignatureMethod}&oauth_timestamp=${oauthTimestamp}&oauth_version=${oauthVersion}`

  const requestUrl = `${requestTockenUrl}?${baseString}`

  try {
    const response = await axios.get(requestUrl)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
