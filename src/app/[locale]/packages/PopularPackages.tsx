import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"



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


function PopularPackages( {data}: {data: dataProps} ) {
  return (
    <div className="container text-center pt-8">
      
      <div className="tag bg-white">
          Popular Packages.
      </div>

      <div className="py-8 md:ml-4 lg:ml-32 w-auto md:max-w-3xl px-10">

        <Carousel className=" w-full max-w-4xl">
          <CarouselContent className="">

            {data?.map((_popularPackage: any, index: string) => (

              // {Array.from({ length: 5 }).map((_, index) => (

              <CarouselItem key={index} className="pl-10 md:pl-4 lg:pl-8 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 ">

                      <Card>
                        <CardContent className="flex flex-col aspect-square items-center justify-center p-1 hover:scale-105 
                        transition-all border rounded-md">
                          <div className="w-full h-full relative">
                            <Image src={urlFor(_popularPackage?.mainImage).url()} layout="fill" alt="image" />
                          </div>
                          <p>₹ {_popularPackage?.price}</p>
                        </CardContent>
                      </Card>
                      <p className="p-1 font-serif text-white">{_popularPackage?.title}</p>

                </div>
              </CarouselItem>

            ))}
          </CarouselContent>
          {data?.length > 3 ? (
            <>
               <CarouselPrevious />
               <CarouselNext />
            </>
          ): "" }
       
        </Carousel>

      </div>

    </div>
  )
}
export default PopularPackages