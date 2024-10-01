import Image from "next/image"
import Alleppey from "@/assets/alleppey.jpg"
import Thekkady from "@/assets/thekkady.jpg"
import Wagamon from "@/assets/wagamon.jpg"
import Himalaya from "@/assets/himalaya.jpg"
import Andaman from "@/assets/andaman.jpg"
import Tajmahal from "@/assets/tajmahal.jpg"
import Hogenakkal from "@/assets/Hogenakkal.jpg"
import Ayurveda from "@/assets/ayurveda.jpg"
import { urlFor } from "@/sanity/lib/image"

interface getGalleryProps {
  map(arg0: (gallery: any, index: any) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>
  id: string
  _createdAt: string
  title: string
  mainImage: string
}



function Gallery({data}: {data: getGalleryProps}) {
  return (
    <section className="container text-center space-y-10 pt-10 pb-32">
        <div className="tag">
            Gallery
        </div>
        {/* <div className="border w-auto h-auto flex flex-wrap flex-grow p-4 space-x-2 space-y-2">
            <Image src={Alleppey} width={350} height={350} alt="Alleppey" className="grow hover:scale-110 transition-transform duration-500" />   
            <Image src={Thekkady} width={350} height={350} alt="Thekkady" className="grow hover:scale-110 transition-transform duration-500" />   
            <Image src={Wagamon} width={350} height={350} alt="Wagamon" className="grow hover:scale-110 transition-transform duration-500" />   
            <Image src={Himalaya} width={350} height={350} alt="Himalaya" className="grow hover:scale-110 transition-transform duration-500" />   
            <Image src={Andaman} width={350} height={350} alt="Andaman" className="grow hover:scale-110 transition-transform duration-500" />   
            <Image src={Tajmahal} width={350} height={350} alt="Tajmahal" className="grow hover:scale-110 transition-transform duration-500" />   
            <Image src={Hogenakkal} width={350} height={350} alt="Hodenakkal" className="grow hover:scale-110 transition-transform duration-500" />   
            <Image src={Ayurveda} width={350} height={350} alt="Ayurveda" className="grow hover:scale-110 transition-transform duration-500" />                       
        </div> */}

        

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