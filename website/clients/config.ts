export interface Config {
  sanity: {
    projectId: string
    dataset: string
  }
}

export const config: Config = {
  sanity: {
    //all of a sudden stopped working ??
    // projectId: process.env.NEXT_SANITY_PROJECT_ID || '',

    projectId: 'lnpf4tn5' || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
}
