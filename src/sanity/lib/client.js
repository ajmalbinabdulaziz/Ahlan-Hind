import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId, token } from '../env'

const dataset = 'production'
const projectId = 'c4p78oz0'
const token = 'skeuTbTx3PwL75Z8I2jH7lMUOrkzdNE5Q51rU26YOD8zYb25u8NgA8Xp3Tlcg4g6CTNz2KKXgXi4kToHcJyu0cnfqFyk0bwFaZj9W5Cdf9g7S2a11iQnnJTkFTZd6onahb4vwUtnvOVYMsHc1ytIJPAlGZyXXM98uGpbTO0toBr57plCKyHO'
const apiVersion = '2024-09-25'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation, 
  // `false` if you want to ensure fresh data
})
