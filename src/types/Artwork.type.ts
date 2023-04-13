export interface Artwork {
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
}

// ################
// Artic API https://api.artic.edu/docs/#artworks
// ################

// https://api.artic.edu/docs/#get-artworks-search
export interface APIArtworkSearch {
  _score: number | null
  thumbnail: APIThumbnail | null
  api_model: string | null
  is_boosted: boolean | null
  api_link: string | null
  id: number | null
  title: string | null
  timestamp: Date | null
}

// https://api.artic.edu/docs/#get-artworks
export interface APIArtwork {
  id: number | null
  title: string | null
  date_end: number | null
  place_of_origin: string | null
  medium_display: string | null
  dimensions: string | null
  color: APIColor | null
  credit_line: string | null
  image_id: string | null
  thumbnail: APIThumbnail | null
  artist_title: string | null
}

export interface APIColor {
  h: number | null
  s: number | null
  l: number | null
  percentage: number | null
  population: number | null
}

export interface APIThumbnail {
  lqip: string | null
  width: number | null
  height: number | null
  alt_text: string | null
}
// ################
