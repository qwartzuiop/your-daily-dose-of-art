import type { APIArtwork, Artwork } from '@/types'

export const artworkAdapter: (artwork: APIArtwork) => Artwork = (artwork) => {
  const imageSrc = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
  const imageSrc600w = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/600,/0/default.jpg`
  const imageSrc400w = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`

  return {
    id: artwork.id || Date.now(),
    title: artwork.title || 'Unnamed',
    creationDate: artwork.date_end || 0,
    origin: artwork.place_of_origin || '',
    materials: artwork.medium_display || '',
    dimensions: artwork.dimensions || '',
    history: artwork.credit_line || '',
    image: {
      src: imageSrc,
      src600w: imageSrc600w,
      src400w: imageSrc400w,
      srcLowRes: artwork.thumbnail?.lqip || '',
      alt: artwork.thumbnail?.alt_text || artwork.title || '',
    },
    artist: artwork.artist_title || 'Unknown creator',
  }
}
