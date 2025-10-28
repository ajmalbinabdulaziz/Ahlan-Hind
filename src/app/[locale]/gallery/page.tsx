import { client } from "@/sanity/lib/client"
import Gallery from "./Gallery"


const getImages = async (locale: string = 'en')=>{
  const query = `*[_type=="gallery"]{
    _id,
    _createdAt,
    title,
    "localizedTitle": title.${locale},
    mainImage,
    "localizedAlt": mainImage.alt.${locale},
  }`
 
  // const packages = await client.fetch<getPackagesProps[]>(query)
  const images = await client.fetch(query)
  return images
}


async function page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const data = await getImages(locale)
  return (
    <div>
        <Gallery data={data} />
    </div>
  )
}
export default page

export const revalidate = 5