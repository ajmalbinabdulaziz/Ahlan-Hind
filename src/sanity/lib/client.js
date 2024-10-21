import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId, token } from '../env'

const dataset = 'production'
const projectId = 'c4p78oz0'
const token = 'skkTt7eCJLSEHWmxR7QNmgKc4xCuCFMAho1ieZpZ0fzbtW8nj6JSlGSS7m3Go0RCrWDonac6qNnwwlGY6Ei30blZjfG3Q8tMmhVglRNp4QhCRatADEzsAffgFu18QvDD2vYrh682XI76Di1CCeHDSf6BWGPwcHSnkiSrXp6AI1zaFlOf2RoG'
const apiVersion = '2024-09-25'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation, 
  // `false` if you want to ensure fresh data
})
