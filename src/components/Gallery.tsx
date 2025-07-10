import Image from "next/image"
import Himalaya from "@/assets/himalaya.jpg"
import Andaman from "@/assets/andaman.jpg"
import Tajmahal from "@/assets/tajmahal.jpg"
import Hogenakkal from "@/assets/Hogenakkal.jpg"
import Ayurveda from "@/assets/ayurveda.jpg"
import ArrowIcon from "@/assets/arrow-right.svg"
import { useTranslations } from "next-intl"



function Gallery() {

  const t = useTranslations('Gallery');

    return ( 

      <section className="w-full h-[50vh] rounded-xl overflow-hidden relative ">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-2 min-h-full'>
            <div className="relative hover:opacity-90 cursor-pointer">  
              <Image
                src={Ayurveda}
                fill
                alt="Image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className="absolute w-fit pr-10 right-1 left-3 bottom-2 bg-black/50 text-white text-sm">{t('Ayurveda Tourism')}</p>
            </div>

            <div className="hidden md:grid grid-rows-2 gap-2 min-h-full">

                  <div className="grid grid-cols-2 gap-2">

                      <div className="relative hover:opacity-90 cursor-pointer ">  
                        <Image
                          src={Himalaya}
                          fill
                          alt=""
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <p className="absolute w-fit pr-10 right-1 left-3 bottom-2 bg-black/50 text-white text-sm">{t('The Himalayas')}</p>
                      </div>
                      <div className="relative hover:opacity-90 cursor-pointer ">  
                        <Image
                          src={Hogenakkal}
                          fill
                          alt=""
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <p className="absolute w-fit pr-10 right-1 left-3 bottom-2 bg-black/50 text-white text-sm">{t('Hogenakkal')}</p>
                      </div>

                  </div>
                  <div className="grid grid-cols-2 gap-2">

                      <div className="relative hover:opacity-90 cursor-pointer">  
                        <Image
                          src={Tajmahal}
                          fill
                          alt=""
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <p className="absolute w-fit pr-10 right-1 left-3 bottom-2 bg-black/50 text-white text-sm">{t('Tajmahal')}</p>
                      </div>
                      <div className="relative hover:opacity-90 cursor-pointer"> 
                          <Image
                            src={Andaman}
                            fill
                            alt=""
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        <p className="absolute w-fit pr-10 right-1 left-3 bottom-2 bg-black/50 text-white text-sm">{t('Andaman')}</p>
                      </div>

                  </div>

            </div>
          </div>
      </section>


  )
}
export default Gallery