import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"


interface getImagesProps {
  map(arg0: (gallery: any, index: any) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>
  id: string
  _createdAt: string
  title: string
  mainImage: string
}



function Gallery({data}: {data: getImagesProps}) {
  return (
    <section className="container text-center space-y-10 pt-10 pb-32">
        <div className="tag">
            Gallery
        </div>
  
          <div 
          // className="border min-h-fit min-w-min flex flex-wrap flex-grow p-4 space-x-2 space-y-2"
          className="flex flex-wrap border max-w-fit p-4"
          >
            {data?.map((gallery, index)=> (
              <div key={index}>
                 <Image src={urlFor(gallery?.mainImage).url()} width={500} height={300} alt="Wagamon" className="p-1 hover:scale-110 transition-transform duration-500" />   
                 <p className="font-mono">{gallery?.title}</p>
              </div>
            ))}
          </div>
          

    </section>
  )
}
export default Gallery