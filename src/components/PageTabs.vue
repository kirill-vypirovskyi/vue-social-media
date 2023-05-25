<script>
export default {}
</script>

<template>
  <div class="tabs my-5">
    <router-link
      class="tab tab-lg tab-bordered"
      :class="{ 'tab-active': $route.path.includes('/albums') }"
      to="/albums"
      >Albums</router-link
    >
    <router-link class="tab tab-lg tab-bordered" to="/gallery">Gallery</router-link>
    <router-link class="tab tab-lg tab-bordered" to="/messages">Messages</router-link>
    <router-link
      class="tab tab-lg tab-bordered"
      :class="{ 'tab-active': $route.path === '/upload' }"
      to="/upload"
      >Upload</router-link
    >
  </div>
</template>
