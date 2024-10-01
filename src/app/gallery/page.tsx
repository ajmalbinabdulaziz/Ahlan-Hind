import { client } from "@/sanity/lib/client"
import Gallery from "./Gallery"


interface getImagesProps {
  map(arg0: (gallery: any, index: any) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>
  id: string
  _createdAt: string
  title: string
  mainImage: string
}

export const getImages = async ()=>{
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

  const data: getImagesProps = await getImages()
  return (
    <div>
        <Gallery data={data} />
    </div>
  )
}
export default page

export const revalidate = 5