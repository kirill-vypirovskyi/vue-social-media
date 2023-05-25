<script>
import IconArrowRight from './icons/IconArrowRight.vue'
import IconPhotos from './icons/IconPhotos.vue'
import IconTime from './icons/IconTime.vue'

export default {
  props: {
    info: {
      type: Object,
    }
  },
  components: {
    IconArrowRight,
    IconPhotos,
    IconTime
  }
}
</script>

<template>
  <router-link to="/albums/123" class="group hover:bg-gray-200 transition bg-slate-100 py-2 px-8 flex justify-between gap-4">
    <img
      class="group-hover:mask-circle mask h-32 mask-squircle transition-all"
      src="https://xsgames.co/randomusers/assets/avatars/male/69.jpg"
    />

    <div class="mr-auto flex flex-col py-2">
      <h2 class="text-2xl font-bold text-blue-900">Name of the album</h2>

      <div class="flex gap-2 items-center mt-auto">
        <IconPhotos class="h-4 w-4"/>
        <span>8800 files</span>
      </div>

      <div class="flex gap-2 items-center">
        <IconTime class="h-4 w-4"/>
        <span>2 hours ago</span>
      </div>
    </div>

    <button className="btn btn-circle btn-outline my-auto">
      <IconArrowRight />
    </button>
  </router-link>
</template>
