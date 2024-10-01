import { sanityClient } from "../sanity";



export const getCategory = async ()=>{
    const query = `*[_type=="category" ]{
        title,       
      }`

    const categories = await sanityClient.fetch(query)

    return categories
      
}


export const getPackages = async ()=>{
  const query = `*[_type=="packages"]{
    _id,
    slug {
      current
    },
  }`
 
  const packages = await sanityClient.fetch(query)
  return packages
}

export const getPackageDetails = async (slug) => {
  const query = `*[_type=="packages" && slug.current==$slug][0]{
    _id,
    _createdAt,
    title,
    categories[0]->{
      title,
    },
    description,
    mainImage,
    slug,
    body, 
  }`;


  const packageDetails = await sanityClient.fetch(query, { slug })

  return packageDetails
    
}
