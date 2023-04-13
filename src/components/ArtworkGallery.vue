<template>
  <section
    class="mx-auto grid max-w-[1920px] auto-rows-auto grid-cols-1 gap-16 lg:auto-rows-[90vh] lg:gap-24"
    ref="galleryRef"
  >
    <template v-if="!gallery.length">
      <artwork-placeholder v-for="i in 3" />
    </template>

    <base-artwork
      v-else
      v-for="artwork in gallery"
      :key="artwork.id"
      v-bind="artwork"
    />

    <artwork-placeholder v-if="isLoadingMore" />
  </section>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'
import { BaseArtwork, ArtworkPlaceholder } from '@/components'
import { fetchArtworks } from '@/utils'
import type { Artwork } from '@/types'

const isLoadingMore = ref(false)

const gallery = ref<Artwork[]>([])

const galleryRef = ref<HTMLElement>()

onBeforeMount(async () => {
  gallery.value = await fetchArtworks()
})

onMounted(() => {
  window.addEventListener('scroll', async () => {
    if (!galleryRef.value || !gallery.value.length || isLoadingMore.value)
      return

    const { height, top } = galleryRef.value.getBoundingClientRect()

    if (Math.abs(top) >= height - window.innerHeight * 3) {
      isLoadingMore.value = true
      gallery.value.push(...(await fetchArtworks()))
      isLoadingMore.value = false
    }
  })
})
</script>
