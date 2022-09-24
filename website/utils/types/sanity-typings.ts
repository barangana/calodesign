// sanity types

export type SanityImage = {
  _key: string
  _type: 'image'
  asset: any
  alt?: string
}

export interface Project {
  _id: string
  title: string
  size: string
  type: string
  mainImage: SanityImage
  imagesGallery: SanityImage[]
  slug: {
    current: string
  }
  content: string
}
