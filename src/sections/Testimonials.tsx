"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { useTranslations } from "next-intl";
import { testimonials } from "../../public/data/testimonials";
import { testimonialsArabic } from "../../public/data/testimonials";
import { useParams } from 'next/navigation';


const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const firstColumnArabic = testimonialsArabic.slice(0, 3)
const secondColumnArabic = testimonialsArabic.slice(3, 6)
const thirdColumnArabic = testimonialsArabic.slice(6, 9)


const TestimonialsColumn = (props: { 
  className?: string, 
  testimonials?: typeof testimonials
  testimonialsArabic?: typeof testimonialsArabic
  duration: number
  locale?: string
}) => (

  <div className={props.className}>
    <motion.div 
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6">

      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
            {/* {(props.locale === 'en' ?  props.testimonials?) */}


            {
              props?.locale === 'en' ?
              (props.testimonials?.map(({ text, imageSrc, name, username }, index) => (
                <div key={index} className="card">
                  <div>{text}</div>
                    <div className="flex items-center gap-2 mt-5">
                      <Image
                        src={imageSrc} 
                        alt={name}
                        width={40}
                        height={40}  
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="flex flex-col">
                        <div className="font-medium tracking-tight leading-5">
                          {name}
                        </div>
                        <div className="leading-5 text-sm tracking-tight">{username}</div>
                      </div>
                    </div>
                </div>
                ))
              ):
              (props.testimonialsArabic?.map(({ text, imageSrc, name, username }, index) => (
                <div key={index} className="card">
                  <div>{text}</div>
                    <div className="flex items-center gap-2 mt-5">
                      <Image
                        src={imageSrc} 
                        alt={name}
                        width={40}
                        height={40}  
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="flex flex-col">
                        <div className="font-medium tracking-tight leading-5">
                          {name}
                        </div>
                        <div className="leading-5 text-sm tracking-tight">{username}</div>
                      </div>
                    </div>
                </div>
                ))
              )
          }

        </React.Fragment>
      ))}

    </motion.div>
  </div>
)

export const Testimonials = () => {

  const t = useTranslations('TestimonialsPage');
  
  const params = useParams();
  const currentLocale = params.locale as string;

  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">{t('Testimonials')}</div>
          </div>
          <h2 className="text-center text-5xl md:text-5xl font-bold text-[#780540] mt-6">{t('What our users say')}</h2>
          <p className="section-description mt-5">
            {t('para')}
          </p>
        </div>

        {currentLocale === 'en' ? (
          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} locale={currentLocale} />
            <TestimonialsColumn testimonials={secondColumn} duration={19} locale={currentLocale} className="hidden md:block"/>
            <TestimonialsColumn testimonials={thirdColumn} duration={17} locale={currentLocale} className="hidden lg:block" />
          </div>
        ): (
          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
            <TestimonialsColumn testimonialsArabic={firstColumnArabic} duration={15} locale={currentLocale} />
            <TestimonialsColumn  testimonialsArabic={secondColumnArabic} duration={19} locale={currentLocale} className="hidden md:block"/>
            <TestimonialsColumn testimonialsArabic={thirdColumnArabic} duration={17} locale={currentLocale} className="hidden lg:block" />
          </div>
        ) }





      </div>
    </section> 
  )
};
