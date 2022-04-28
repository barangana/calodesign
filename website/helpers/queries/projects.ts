export const projectsQuery = `
*[_type == "post"]{
  _id,
  slug,
  body,
  mainImage,
  title
}
`
