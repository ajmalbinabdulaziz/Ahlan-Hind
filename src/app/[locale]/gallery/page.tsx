import { client } from "@/sanity/lib/client"
import Gallery from "./Gallery"


const getImages = async ()=>{
  const query = `*[_type=="gallery"]{
    _id,
    _createdAt,
    title,
    mainImage,
  }`
 
  // const packages = await client.fetch<getPackagesProps[]>(query)
  const images = await client.fetch(query)
  return images
}


async function page() {

  const data = await getImages()
  return (
    <div>
        <Gallery data={data} />
    </div>
  )
}
export default page

export const revalidate = 5