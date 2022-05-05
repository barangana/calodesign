export interface Config {
  sanity: {
    projectId: string
    dataset: string
  }
}

export const config: Config = {
  sanity: {
    projectId: process.env.NEXT_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
}
