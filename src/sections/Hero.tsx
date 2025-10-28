// import ArrowIcon from "@/assets/arrow-right.svg"
// import EnquiryForm from "./EnquiryForm";
// import {getLocale, getTranslations} from 'next-intl/server';
import { useTranslations } from 'next-intl';

 
export const  Hero = () => {

  const t = useTranslations('HeroPage');

  return(
    <section 
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[url('https://images.unsplash.com/photo-1731946660299-8f091eb1caee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
      overflow-x-clip h-screen"
    >

      <div className="container">

            <div className="md:flex-col p-2">

              <div className="md:w-[478px] mx-auto">
                  <div className="tag">
                    {t('tag')}
                  </div>
                  <h1 className="text-5xl md:text-5xl font-bold text-black mt-6">
                  {t('title')}
                  </h1>
                  <p className="text-xl text-[#4b0328] tracking-tight mt-6">
                  {t('para')}
                  </p>
                  <div className="flex py-2">
                    <p className="font-semibold ">{t('read more')}</p>
                  </div>           
              </div>

            </div>

      </div>

    </section>
  )
};
 