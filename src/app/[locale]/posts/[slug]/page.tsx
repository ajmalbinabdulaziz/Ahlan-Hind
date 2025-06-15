'use client'
import { urlFor } from "@/sanity/lib/image";
import { myPortableTextComponents } from "../../../components/PortableTextComponents";
import { PortableText } from "next-sanity";
import { getPackageDetails } from "@/services";
import Image from "next/image";
import EnquiryForm from "@/sections/EnquiryForm";


interface IParams {
  slug?: string;
}


async function page({ params }: { params: IParams }) {

  const postDataDetails = await getPackageDetails(params?.slug)

  const port: any = myPortableTextComponents

  return (
    <section className="relative">

      <div
          className="mt-10 pb-20 md:pb-10 overflow-x-clip w-full h-screen 
          bg-[url('/riverHouse.jpg')] bg-cover bg-center bg-no-repeat 
          fixed top-10 -z-10
          "
        >  
        <div className="absolute z-10 mt-32 md:mt-40 left-20 right-20 text-center text-2xl md:text-4xl text-white font-bold">"A journey of a thousand miles begins with a single step."</div>

        <div className="absolute opacity-60 bg-[radial-gradient(ellipse_150%_50%_at_top_right,#eaede8,#1b1c1b_100%)] h-screen w-full" />
      </div>

      <div className='flex flex-col md:grid md:grid-cols-3 md:gap-10 mt-[350px] lg:grid-cols-3 px-10 py-4 bg-gray-50'>

            <article className='flex flex-col col-span-2 lg:pl-4 pr-0 mb-4 md:mb-44 border-green-500'>

                <h1 className='font-bold text-2xl text-stone-800 pt-7' >{postDataDetails?.title}  -  USD {postDataDetails?.price}/-</h1>

                <hr className=" border-purple-500" />

                <div className="py-3 mt-2 mb-5">
                  <PortableText value={postDataDetails?.body} components={port} />
                </div>   

                <hr className='max-w-full mt-5 border border-purple-500 border-t-0'/>                  

            </article>

            <div className="relative w-96 h-60 mt-2 md:mt-20 mb-14 flex flex-col space-y-20 mx-auto overflow-hidden col-span-1 hover:opacity-90">  
              <div className="">
                <Image
                  src={urlFor(postDataDetails?.mainImage?.asset).url()}
                  fill
                  alt="Image"
                />
              </div>  
            </div> 

  
      </div> 


  </section>

  )
}
export default page