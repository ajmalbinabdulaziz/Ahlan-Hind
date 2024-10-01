import { client } from "@/sanity/lib/client"
import Gallery from "./Gallery"


export const getGallery = async ()=>{
  const query = `*[_type=="gallery"]{
    _id,
    _createdAt,
    title,
    mainImage,
  }`
 
  // const packages = await client.fetch<getPackagesProps[]>(query)
  const gallery = await client.fetch(query)
  return gallery
}


async function page() {

  const data = await getGallery()
  console.log(data)


  return (
    <div>
        <Gallery data={data} />
    </div>
  )
}
export default page

export const revalidate = 5