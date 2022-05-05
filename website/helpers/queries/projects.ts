export const projectsQuery = `
*[_type == "post"]{
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
  slug,
  mainImage,
  title,
  size,
  type
}
`
