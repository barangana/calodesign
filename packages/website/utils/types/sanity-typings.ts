// sanity types

export type SanityImage = {
  _key: string
  _type: 'image'
  asset: any
  alt?: string
}

export type Project = {
  _id: string
  title: string
  mainImage: SanityImage
  slug: {
    current: string
  }
  content: string
  imagesGallery?: SanityImage[]
  size?: string
  type?: string
}

export type Blogs = {
  _id: string
  title: string
  content: string
  mainImage: SanityImage
  slug: {
    current: string
  }
}
