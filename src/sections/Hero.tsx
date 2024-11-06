'use client'
import ArrowIcon from "@/assets/arrow-right.svg"
import CogImage from "@/assets/cog.png"
import CylinderImage from "@/assets/cylinder.png"
import noodleImage from "@/assets/noodle.png"
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from "react";
import EnquiryForm from "./EnquiryForm";
import { HomeCarousel } from "@/components/HomeCarousel"


 
export const Hero = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])


  return(
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_150%_50%_at_bottom_left,#780540,#edd1df_100%)] overflow-x-clip">

      <div className="container">
        <div className="md:flex items-center">

            <div className="md:w-[478px]">
                <div className="tag">
                  Travel around.
                </div>
                <h1 className="text-5xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#31011a] text-transparent bg-clip-text mt-6">
                  Welcome to Ahlan Hind!
                </h1>
                <p className="text-xl text-[#4b0328] tracking-tight mt-6">
                Hospitality is one of the most treasured values of Indian culture and lies at the heart of our desire to open our doors to 
                international travellers..
                </p>
                <div className="flex gap-1 items-center mt-[30px]">
                  <button className='btn btn-primary'>Sign Up</button>
                  <button className='btn btn-text gap-1'>
                    <span>Read More</span>
                    <ArrowIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-10">
                  <EnquiryForm />
                </div>
            </div>

            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
              {/* <motion.img src={CogImage.src} alt="Cog Image" 
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut"
              }}
              /> */}

            <div className="rotate-6 mt-36 ml-44 md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0  ">
             <HomeCarousel />             
            </div>
               
              <motion.img src={CylinderImage.src} width={220} height={220} alt="Cylinder Image"
               className="hidden md:block -top-8 -left-32 md:absolute"
               style={{
                translateY: translateY,
               }}
               />
               <motion.img src={noodleImage.src} width={220}  alt="Noodle Image"
               className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
               style={{
                rotate: 30,
                translateY: translateY,
               }}
               />
            </div>

        </div>
      </div>

    </section>
  )
};
 