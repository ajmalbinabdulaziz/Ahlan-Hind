import { client } from "../../sanity/lib/client"
import PopularPackages from "./PopularPackages"
import UpcomingPackages from "./UpcomingPackages"
import { getPackages } from "../../services"
import Packages from "./Packages"
import pic from "../../assets/homeImages/homepage3.jpg"


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
  // const upcomingPackages = packages.filter((pack: getPackagesProps) => {
  //   return pack?.category?.title === "upcoming packages"
  // })

  // const popularPackages = packages.filter((pack: getPackagesProps) => {
  //   return pack?.category?.title === "popular packages"
  // }) 

    const allPackages = packages.filter((pack: getPackagesProps) => {
    return pack?.category?.title === "packages"
  }) 

  // console.log(`packages ${JSON.stringify(allPackages)}`)
  // bg-[url('https://images.unsplash.com/photo-1731946660299-8f091eb1caee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]


  return (
      <section className="relative">
        {/* bg-[radial-gradient(ellipse_150%_50%_at_top_left,#75eb2d,#768071_100%)] */}


        <div
            className="mt-2 pb-20 md:pt-5 md:pb-10 overflow-x-clip w-full h-screen 
            bg-[url('/homepage3.jpg')] bg-cover bg-center bg-no-repeat 
            fixed top-10 -z-10
            "
          >  
        <div className="absolute z-10 mt-56 left-20 right-20 text-center text-4xl text-white font-bold">"A journey of a thousand miles begins with a single step."</div>

          <div className="absolute opacity-60 bg-[radial-gradient(ellipse_150%_50%_at_bottom_left,#75eb2d,#768071_100%)] h-screen w-full" />
        </div>

      {/* <div className="mt-2 pb-20 md:pt-5 md:pb-10 overflow-x-clip w-full h-screen ">
        <img src="https://images.unsplash.com/photo-1731946660299-8f091eb1caee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="BannerImage" className="absolute h-[70vh] lg:h-[80vh] w-full object-cover object-right opacity-50 " />
        <div className="absolute -z-10 bg-gradient-to-t from-white via-gray-900 to-black h-[70vh] lg:h-[80vh] w-full" />

      </div> */}


 
        {/* bg-[radial-gradient(ellipse_150%_50%_at_top_left,#75eb2d,#768071_100%)]  */}

        <div className="mt-[350px] 
        overflow-x-clip pb-36 bg-white ">
          <Packages data={allPackages} />
        </div>

      </section>
  )
}
export default page



export const revalidate = 6