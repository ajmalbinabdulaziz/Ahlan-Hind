import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { useTranslations } from "next-intl"


interface getImagesProps {
  map(arg0: (gallery: any, index: any) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>
  id: string
  _createdAt: string
  localizedTitle: string
  mainImage: any
  localizedAlt: string
}



function Gallery({data}: {data: getImagesProps}) {

  const t = useTranslations('GalleryPage');

  return (
    <section className="relative">

      <div
          className="mt-10 pb-20 md:pb-10 overflow-x-clip w-full h-screen 
          bg-[url('/taj.jpg')] bg-cover bg-center bg-no-repeat 
          fixed top-10 -z-10
          "
        >  
        <div className="absolute opacity-60 bg-[radial-gradient(ellipse_150%_50%_at_bottom_left,#75eb2d,#768071_100%)] h-screen w-full" />
      </div>


      <div className="md:container text-center space-y-10 pt-10 pb-32 mt-40">

          <div className="tag bg-white">
             {t('tag')}
          </div>

          <div className="text-center text-2xl md:text-4xl text-white font-bold">{t('title')}</div>
  
           <div 
          // className="border min-h-fit min-w-min flex flex-wrap flex-grow p-4 space-x-2 space-y-2"
          className="flex flex-wrap justify-center border max-w-fit p-4 bg-white"
          >
            {data?.map((gallery, index)=> (
              <div key={index}>
                 <Image src={urlFor(gallery?.mainImage).url()} width={500} height={300} alt={gallery?.localizedAlt || 'Gallery image'} className="p-1 hover:scale-110 transition-transform duration-500" />   
                 <p className="font-mono">{gallery?.localizedTitle}</p>
              </div>
            ))}
          </div>


      </div>


</section>


  )
}
export default Gallery