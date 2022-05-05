import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { config } from './config'

export const clientConfig = {
  dataset: config.sanity.dataset,
  projectId: config.sanity.projectId,
  apiVersion: '2021-03-25',
  useCdn: true,
}

// Set up client to fetch data in the getProps page functions
export const sanityClient = createClient(clientConfig)

export const urlFor = (source: any) =>
  createImageUrlBuilder(clientConfig).image(source)
