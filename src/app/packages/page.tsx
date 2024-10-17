
import { client } from "../../sanity/lib/client"
import PopularPackages from "./PopularPackages"
import UpcomingPackages from "./UpcomingPackages"
import { getPackages } from "../../services"


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