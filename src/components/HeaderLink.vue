<script>
  export default {
    props: {
      path: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      }
    }
  }
</script>

<template>
  <router-link class="btn btn-ghost normal-case text-xl" :class="{'btn-active': $route.path === path}" :to="path">{{ title }}</router-link>
</template>