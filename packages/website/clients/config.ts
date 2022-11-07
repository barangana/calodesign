export interface Config {
  sanity: {
    projectId: string
    dataset: string
    token: string
  }
}

export const config: Config = {
  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    token: process.env.SANITY_API_TOKEN || '',
  },
}
