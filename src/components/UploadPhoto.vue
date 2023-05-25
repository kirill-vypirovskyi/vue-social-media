<script>
import { sendOAuthRequest } from '../api/authorize'

export default {
  created() {
    sendOAuthRequest()
  },
}
</script>

<template>
  <div>{{ url }}</div>
</template>
