// sanity types

export type SanityImage = {
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
  slug: {
    current: string
  }
}
