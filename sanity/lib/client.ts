import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skzI9aFA3xMBqlTynp5caxnV2jrapsgUqYInITHXjcFAnvfAojVOQYkYKgc3SdvARBrigEFpEWG54RMo78rJVFL00uqMvxbXK1ZAf33bMd92L2n2hJRs0s7dFjBIhA6MWYzrs1mAjfr2ai9Euz8MucBtkcl1wgfVDtXNQ21cEsraWN3cpHor"
})
