import { urlFor } from "@/sanity/lib/image";
import { getPackageDetails } from "@/services"
import { PortableText } from "next-sanity";
import Head from "next/head";
import Image from "next/image";

interface IParams {
    slug?: string;
  }
  

async function page({ params }: { params: IParams }) {
    const postDataDetails = await getPackageDetails(params?.slug)
    console.log(postDataDetails)
    console.log(`slug - ${params.slug}`)
  return (
    <main>
    <Head>
    <title>Ahlan Hind | Tour Package</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>


    <div className='bg-gray-50 grid grid-cols-1 mt-6 lg:grid-cols-3 px-10 py-4'>

        <article className='flex flex-col col-span-2 lg:pl-4 pr-0 mb-44'>

           <div className="relative w-full h-72 hover:opacity-90 cursor-pointer">  
              <Image
                src={urlFor(postDataDetails?.mainImage?.asset).url()}
                fill
                alt="Image"
              />
              {/* <h1 className='font-bold text-4xl text-stone-800 pt-7' >test</h1> */}
            </div>

            <h1 className='font-bold text-2xl text-stone-800 pt-7' >{postDataDetails?.title}  -  ₹{postDataDetails?.price}</h1>

            <hr className=" border-purple-500" />

            <div className="py-3 mt-2 mb-5">

            <PortableText value={postDataDetails?.body}  />
            </div>   

            <hr className='max-w-full mt-5 border border-purple-500 border-t-0'/>                  


        </article>

        {/* <div className='flex flex-col space-y-10 p-5 my-10 lg:pl-14'>
            <Advertisement />
          {slug && (post?.categories?.title !== undefined) &&
            <SimilarPosts slug={slug} category={post?.categories?.title} />
          }  
        </div> */}

    </div> 

</main>

  )
}
export default page