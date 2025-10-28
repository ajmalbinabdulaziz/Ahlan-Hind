import { getPackages } from "@/services"
import Packages from "./Packages"
import { getTranslations } from "next-intl/server"


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


async function page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  const packages = await getPackages(locale)

    const allPackages = packages.filter((pack: getPackagesProps) => {
    return pack?.category?.localizedTitle === "packages"
  }) 

  const t = await getTranslations('PackagesPage')

  return (
      <section className="relative">

          <div
              className="mt-10 pb-20 md:pt-5 md:pb-10 overflow-x-clip w-full h-screen 
              bg-[url('/homepage3.jpg')] bg-cover bg-center bg-no-repeat 
              fixed top-10 -z-10
              "
            >  
            {/* <div className="absolute z-10 mt-56 left-20 right-20 text-center text-4xl text-white font-bold">"A journey of a thousand miles begins with a single step."</div> */}

            {/* <div className="absolute opacity-40 bg-[radial-gradient(ellipse_150%_50%_at_top,#faf5f2,#eb9d86_100%)] h-screen w-full" /> */}
          </div>

          <div className="mt-[100px] 
          overflow-x-clip pb-36">
            <div className="mb-32 text-center  text-white font-bold">
              <p className="text-6xl py-8">{t('title')}</p>
              <p className="text-2xl">{t('desc')}</p>
              
            </div>

            <Packages data={allPackages} />
            
          </div>

      </section>
  )
}
export default page



export const revalidate = 6