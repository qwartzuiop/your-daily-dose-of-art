<template>
  <article class="grid grid-rows-1 lg:grid-cols-2">
    <div
      v-if="!isImageLoaded"
      class="placeholder min-h-[50vh]"
    />

    <picture
      v-show="isImageLoaded"
      :style="{ backgroundImage: `url(${image.srcLowRes})` }"
      class="bg-cover max-lg:max-h-[100vh]"
    >
      <source
        media="(max-width: 640px)"
        :srcset="image.src400w"
      />
      <source
        media="(max-width: 768px)"
        :srcset="image.src600w"
      />
      <img
        @load="setImageLoadingState(true)"
        :srcset="`${image.src400w} 400w, ${image.src600w} 600w, ${image.src} 843w`"
        sizes="(max-width: 640px) 400px, (max-width: 768px) 600px, 843px"
        :src="image.src"
        :alt="image.alt"
        class="h-full w-full object-contain backdrop-blur"
      />
    </picture>

    <div class="font-alegreya grid content-start px-4 max-lg:mt-4 lg:px-8">
      <h2 class="font-bitter text-3xl font-medium">{{ title }}</h2>

      <p class="mt-2 flex text-2xl">
        <span
          v-if="artist"
          class="mr-auto font-medium"
          >{{ artist }}</span
        >
        <span v-if="origin">{{ origin + ',&nbsp;' }}</span>
        <span v-if="creationDate">{{ creationDate }}</span>
      </p>

      <ul class="mt-4 space-y-1 text-xl">
        <li v-if="materials">
          <span class="font-medium">Medium:&nbsp;</span>
          <span>{{ materials }}</span>
        </li>
        <li v-if="dimensions">
          <span class="font-medium">Dimensions:&nbsp;</span>
          <span>{{ dimensions }}</span>
        </li>
        <li v-if="history">
          <span class="font-medium">Credit line:&nbsp;</span>
          <span>{{ history }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  id: number
  title: string
  creationDate: number
  origin: string
  materials: string
  dimensions: string
  history: string
  image: {
    src: string
    src600w: string
    src400w: string
    srcLowRes: string
    alt: string
  }
  artist: string
}>()

const isImageLoaded = ref(false)

const setImageLoadingState = (state: boolean) => {
  isImageLoaded.value = state
}
</script>

<style scoped lang="scss"></style>
