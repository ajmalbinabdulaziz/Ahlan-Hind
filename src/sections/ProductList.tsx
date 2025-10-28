'use client'
import productImage from "@/assets/product-image.png"
import Image from "next/image"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Gallery from "@/components/Gallery"
import { useTranslations } from "next-intl"


export const ProductList = () => {

  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  const t = useTranslations('ProductList');


  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">{t('Select your interests')}</div>
          </div>
            <h2 className="text-5xl md:text-5xl font-bold text-[#350ca8] mt-6 mb-10">
                    {t('Trust our experience to share natural beauty!')}
            </h2>
            {/* <p className="section-description mt-5 text-[#1c4205]">
              Effortlessly turn your ideas into a fully functional, responsive. Saas
              website in just minutes with this template.
            </p> */}
        </div>
        <div className="relative">
          {/* <Image src={productImage} alt="Product Image" className="mt-10" /> */}
            <Gallery />

          <motion.img src={pyramidImage.src} alt="Pyramid Image" height={262} width={262} 
            className="hidden md:block absolute -inset-e-36 -top-32" 
            style={{ translateY }}
          />
          <motion.img src={tubeImage.src} alt="Tube Image" height={248} width={248} 
            className="hidden md:block absolute bottom-24 -inset-s-36" 
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  )
};
