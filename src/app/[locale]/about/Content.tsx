import EnquiryForm from "@/sections/EnquiryForm"
import { HomeCarousel } from "@/components/HomeCarousel"
import { useTranslations } from "next-intl";



function Content() {

  const t = useTranslations('AboutPage');

  return (
    <section className="relative">

            <div
                className=" pb-20 mt-10 md:pt-5 md:pb-10 overflow-x-clip w-full h-screen 
                bg-[url('/teaPlant.jpg')] bg-cover bg-center bg-no-repeat 
                fixed top-10 -z-10
                "
            >  
                
                <div className="absolute z-10 mt-20 inset-s-20 inset-e-20 text-center "> 

                    <p className="tag">{t('About')}</p>

                    <p className="mt-10 text-5xl md:text-5xl font-bold text-white">{t('About us')}</p>
                
                    <p className="mt-10 text-xl md:text-3xl text-white font-bold">{t('brief')}</p>
                   
                </div>

                {/* <div className="absolute opacity-30 bg-[radial-gradient(ellipse_150%_50%_at_bottom_left,#75eb2d,#768071_100%)] h-screen w-full" /> */}

            </div>

  
             {/* Carousal */}

            <div className="md:grid grid-cols-3 gap-10 p-10 justify-around border bg-white mt-[400px] "> 

                <div className="col-span-2">
                    
                    <div className="col-span-2 bg-white p-10">
                        <h1 className="text-2xl font-sans mb-4">{t('title1')}</h1>
                        <p className="text-gray-600 whitespace-pre-wrap pb-4">{t('para1')}</p>
                        <p className="text-gray-600 whitespace-pre-wrap pb-4">{t('para2')}</p>
                        <p className="text-gray-600 whitespace-pre-wrap pb-4">{t('para3')}</p>

                        <h1 className="text-2xl font-sans mb-4">{t('title2')}</h1>
                        <p className="text-gray-600 whitespace-pre-wrap pb-4">{t('para4')}</p>
                        <p className="text-gray-600 whitespace-pre-wrap pb-4">{t('para5')}</p>
                        <p className="text-gray-600 whitespace-pre-wrap pb-4">{t('para6')}</p>
                        <p className="text-gray-600 whitespace-pre-wrap pb-4">{t('para7')}</p>

                        <h1 className="text-2xl font-sans pb-4">{t('title3')}</h1>
                        <li>{t('list1')}</li>
                        <li>{t('list2')}</li>
                        <li>{t('list3')}</li>
                        <li>{t('list4')}</li>
                        <li>{t('list5')}</li>
                        <li>{t('list6')}</li>   

                        <hr className="my-4" />
                        <p className="text-gray-700 whitespace-pre-wrap pb-2 font-semibold">{t('para8')}</p>       
                        <hr className="my-4" />          
                    </div>

                </div>

                <div className="col-span-1 mb-10 px-24 md:hidden lg:inline lg:px-10 lg:mt-20">
                    <HomeCarousel />
                </div>
                    
                {/* <div className="hidden py-16 md:inline-block md:w-[320px]">
                <EnquiryForm />
                </div>     */}

            </div>
    

  </section>
  )
}
export default Content