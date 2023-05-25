<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <router-link
    :to="`/albums/${$route.params.albumId}/${info.id}`"
    class="w-full h-full absolute top-0 overflow-hidden rounded-xl block"
  >
    <img
      :src="`https://farm${info.farm}.staticflickr.com/${info.server}/${info.id}_${info.secret}.jpg`"
      class="absolute top-0 bottom-0 h-full w-full object-cover z-0"
    />
  </router-link>
</template>
