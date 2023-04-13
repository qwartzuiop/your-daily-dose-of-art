import { artworkAdapter } from '@/utils'
import type { APIArtwork, APIArtworkSearch, Artwork } from '@/types'

export const fetchArtworks = async () => {
  const queries = [
    'modernism',
    'japanese',
    'modernism',
    'american',
    'chinese',
    '20th',
    '19th',
  ]
  // Query based on weekday (1-7)
  const query = queries[new Date().getDay() % queries.length]

  const artworksIds = parseArtworksIds(await fetchArtworksByQuery(query))

  const fields: (keyof APIArtwork)[] = [
    'id',
    'title',
    'date_end',
    'place_of_origin',
    'medium_display',
    'dimensions',
    'color',
    'credit_line',
    'image_id',
    'thumbnail',
    'artist_title',
  ]
  const artworks = await fetchArtworksByIds(artworksIds, fields)

  return artworks
}

export const fetchArtworksByQuery = async (query: string, page?: number) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL

  // Random number beetween 1 and 100
  const pageNumber = page || Math.floor(Math.random() * (100 - 1) + 1)

  const url = baseUrl + 'artworks/search?q=' + query + '&page=' + pageNumber

  const artworks = await fetch(url)
    .then(async (response) => await response.json())
    .catch((error) => console.error(error))

  return artworks.data as APIArtworkSearch[]
}

export const fetchArtworksByIds = async (
  ids: number[],
  fields?: (keyof APIArtwork)[]
) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const urlFields = fields ? 'fields=' + fields.join(',') : ''
  const urlIds = 'ids=' + ids.join(',')
  const url = baseUrl + 'artworks?' + urlIds + '&' + urlFields

  return await fetch(url)
    .then(async (response) => await response.json())
    .then((data) => data.data as APIArtwork[])
    .then((data) => data.map((artwork) => artworkAdapter(artwork)))
}

export const parseArtworksIds = (
  artworks: (Artwork | APIArtwork | APIArtworkSearch)[]
) => artworks.map((artwork) => artwork.id || 0)
