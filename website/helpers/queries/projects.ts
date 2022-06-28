export const projectsQuery = `
*[_type == "project" && slug.current == $slug][0]{
  _id,
  slug,
  body,
  mainImage,
  title
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
*[_type == "project"]{
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
