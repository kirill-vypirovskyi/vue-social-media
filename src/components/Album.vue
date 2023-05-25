<script>
import IconArrowRight from './icons/IconArrowRight.vue'
import IconFolder from './icons/IconFolder.vue'
import AlbumMiniature from './AlbumMiniature.vue'
import axios from 'axios'

export default {
  components: {
    IconArrowRight,
    IconFolder,
    AlbumMiniature
  },
  data() {
    return {
      photos: null,
      current: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios
        .get(
          'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c5ed5377732d2deb01a4c02a81e3d30f&tags=mila+kunis&per_page=20&format=json&nojsoncallback=1'
        )
        .then((response) => {
          this.photos = response.data.photos.photo
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<template>
  <section>
    <div class="flex gap-4 items-center text-blue-900">
      <router-link to="/albums" class="flex items-center fill-blue-900">
        <IconArrowRight class="rotate-180 h-4" />
        <IconFolder />
      </router-link>

      <h2 class="text-xl">Album Name</h2>
    </div>

    <div class="grid grid-cols-4 gap-2 py-10">
      <div v-for="photo, index in photos" :key="photo.id" class="w-full pt-[100%] relative">
        <AlbumMiniature
          :info="photo"
          @mouseenter="() => (current = photo)"
          @mouseleave="() => (current = null)"
        />

        <table
          class="absolute text-sm z-10 bg-slate-900 bg-opacity-90 rounded text-white"
          :class="index % 4 === 0 ? 'left-0' : index % 4 === 3 ? 'right-0' : '-translate-x-1/2 left-1/2'"
          v-if="current?.id === photo.id"
        >
          <tbody>
            <tr>
              <td class="py-1 px-2">File&nbsp;name:</td>
              <td class="py-1 px-2">{{ current.title }}</td>
            </tr>
            <tr>
              <td class="py-1 px-2">Object&nbsp;name:</td>
              <td class="py-1 px-2">{{ `${current.id}_${current.secret}` }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
