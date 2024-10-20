import Alleppey from "@/assets/alleppey.jpg"
import Thekkady from "@/assets/thekkady.jpg"
import Wagamon from "@/assets/wagamon.jpg"
import Image from "next/image"
import ArrowIcon from "@/assets/arrow-right.svg"
import { getPackages } from "../services"
import { urlFor } from "../sanity/lib/image"
import Link from "next/link"


async function Packages() {

  const postData = await getPackages()

  return (
    <section className="py-24 bg-white">

        <div className="container">
            <div className="flex flex-col">

                <div className="tag mx-auto">
                    Packages
                </div>
                
                <div className="section-heading flex flex-col gap-2">
                    <h2 className="section-title text-5xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#1c4205] text-transparent bg-clip-text mt-6">Explore Kerala Tourism</h2>
                    <p className="section-description mt-4">
                        The South-west state of India, Kerala enjoys all the blessings of nature – a long coastline, 
                        mountain stretches, meandering rivers, stunning water falls, dense forests, surf washed beaches, & dazzling monsoon.
                    </p>
                    <button className='btn btn-text gap-1'>
                        <span>Read More</span>
                        <ArrowIcon className="h-5 w-5" />
                  </button>
                </div>

            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3
                md:gap-6 p-3 md:px-1 max-w-6xl mx-auto mt-8'>
                {postData?.map((data: any) => (
                <Link key={data?._id} href={`/posts/${data?.slug?.current}`} target="_blank">
                    <div className='border p-1 mb-4 group cursor-pointer overflow-hidden'>

                        <Image className='h-48 w-full object-cover group-hover:scale-105
                        transition-transform duration-200 ease-in-out' src={urlFor(data?.mainImage).url()} width={400} height={400} alt="" />
                
                        <div className="h-16">
                        <p className="text-lg text-center pt-1 font-bold">{data?.title}</p>
                        </div>
                    </div>
                </Link>
                ))}
            </div>


        </div>

    </section>
  )
}
export default Packages