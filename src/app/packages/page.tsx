
import { client } from "../../sanity/lib/client"
import PopularPackages from "./PopularPackages"
import UpcomingPackages from "./UpcomingPackages"
// import { getPackages } from "@/sanity/lib"

interface getPackagesProps {
  id: string
  _createdAt: string
  title: string
  slug: {
    current: string
  }
  category: {
    title: string
  }
  price: string
  mainImage: string
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


async function page() {

  const packages = await getPackages()
  const upcomingPackages = packages.filter((pack: getPackagesProps) => {
    return pack.category.title === "upcoming packages"
  })

  const popularPackages = packages.filter((pack: getPackagesProps) => {
    return pack.category.title === "popular packages"
  }) 


  return (
    <div className="bg-[radial-gradient(ellipse_150%_50%_at_top_left,#75eb2d,#768071_100%)] overflow-x-clip pb-36">
        <PopularPackages data={popularPackages} />
        <UpcomingPackages data={upcomingPackages} />
    </div>
  )
}
export default page



export const revalidate = 6