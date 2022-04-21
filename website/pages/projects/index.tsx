import React from 'react'
import { sanityClient } from '../../clients/sanity'
import { Project } from '../../typings'

interface Projects {
  data: [Project]
}

const Projects = ({ data }: Projects) => {
  console.log(data[0])
  return <div>{data[0].title}</div>
}

export const getStaticProps = async () => {
  const query = `
  *[_type == "post"]{
    _id,
    title,
    body  
  }`

  const projects = await sanityClient.fetch(query)

  return {
    props: {
      data: projects,
    },
  }
}

export default Projects
