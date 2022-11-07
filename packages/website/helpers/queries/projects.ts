export const singleProjectsQuery = `
*[_type == "projects" && slug.current == $slug][0]{
  _id,
  slug,
  mainImage,
  title,
  type,
  content,
  imagesGallery
}
`
export const minimalInfoProjectsQuery = `
*[_type == "project"]{
  _id,
  slug{
    current
  },
}
`

export const multipleProjectsQuery = `
*[_type == "projects"]{
  _id,
  slug{
    current
  },
  mainImage,
  title,
  size,
  type
}
`

export const multipleBlogsQuery = `
  *[_type == "blogs"]{
    _id,
    slug{
      current
    },
    mainImage,
    title,
    content
  }
`

export const limitedProjectsQuery = `
*[_type == "projects"][0..3]{
  _id,
  slug{
    current
  },
  mainImage,
  title,
  size,
  type
}
`

export const singleBlogsQuery = `
*[_type == "blogs" && slug.current == $slug][0]{
  _id,
  slug,
  mainImage,
  title,
  type,
  content,
}
`
export const minimalInfoBlogsQuery = `
*[_type == "blogs"]{
  _id,
  slug{
    current
  },
}
`
