import { client } from "../sanity/lib/client"




export const getCategory = async ()=>{
    const query = `*[_type=="category" ]{
        title,       
      }`

    const categories = await client.fetch(query)

    return categories
      
}


export const getPackages = async ()=>{
  const query = `*[_type=="packages"]{
    _id,
    _createdAt,
    title,
    category[0]->{
      title,
    },
    price,
    mainImage,
    slug {
      current
    },
  }`
 
  // const packages = await client.fetch<getPackagesProps[]>(query)
  const packages = await client.fetch(query)
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
    price,
    body, 
  }`;


  const packageDetails = await client.fetch(query, { slug })

  return packageDetails
    
}
