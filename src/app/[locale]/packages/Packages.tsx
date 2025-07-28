import Image from "next/image"
import Link from "next/link"
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { urlFor } from "@/sanity/lib/image";
import { useTranslations } from "next-intl";


interface dataProps {
  length: number
  map(arg0: (_popularPackage: any, index: string) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>
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


function Packages( {data}: {data: dataProps} ) {

  const t = useTranslations('PackagesPage')



  return (
    <div className="text-center pt-8 bg-white">
      
      <div className="tag bg-white">
          {t('Popular Packages')}   
      </div>

      <div dir="ltr" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3
                md:gap-6 p-3 md:px-1 max-w-6xl mx-auto mt-8'>
              {data?.map((_popularPackage: any, index: string) => (
                <Link key={_popularPackage?._id} href={`/posts/${_popularPackage?.slug?.current}`} target="_blank">
                    <div className='relative border mb-4 group cursor-pointer overflow-hidden'>

                        <Image className='h-80 w-full object-cover group-hover:scale-105
                        transition-transform duration-200 ease-in-out' src={urlFor(_popularPackage?.mainImage).url()} width={400} height={400} alt="" />

                        <p className="bg-black w-full absolute top-10 left-32 right-2 rotate-45 font-medium p-1 text-white">
                          USD  {_popularPackage?.price}/-
                        </p>

                        <div className="flex px-1 bg-white w-1/3 absolute top-4 left-6 right-2 font-medium ltr">
                          (5.0)
                          <p className="py-1"><FaStar color="gold" /></p>
                          <p className="py-1"><FaStar color="gold" /></p>
                          <p className="py-1"><FaStar color="gold" /></p>
                          <p className="py-1"><FaStar color="gold" /></p>
                          <p className="py-1"><FaStar color="gold" /></p>                  
                        </div>

                        <div className="flex justify-around absolute bottom-40 left-4 right-6 font-medium">
                          <p className="py-1 text-white"><FaLocationDot color="gold" />Location</p>
                          <p className="py-1 text-white"><IoTime color="gold" />Days</p>
                          <p className="py-1 text-white"><HiUsers color="gold" />Pax</p>     
                        </div>

                        <div className="h-20 mt-2">
                          <p className="text-lg text-center p-6 pt-1 font-bold">{_popularPackage?.title}</p>
                        </div>

                        <div className="py-2">
                          <p className="w-2/3 text-black bg-yellow-400 p-2 mx-auto font-bold">{t('Book Now')}</p>
                        </div>
                    </div>
                </Link>
                ))}
            </div>

    </div>
  )
}
export default Packages