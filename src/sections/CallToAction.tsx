"use client"
import Image from "next/image"
import starImage from "@/assets/star.png"
import ArrowRight from "@/assets/arrow-right.svg"
import springImage from "@/assets/spring.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


export const CallToAction = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">

        <div className="section-heading relative">
          <h2 className="text-center text-5xl md:text-5xl font-bold text-[#019c76] mt-6">Sign up to Explore</h2>
          <p className="section-description mt-5">
          With a commitment to create and provide the best value for our clientele, our partners and our team, 
          we at Ahlan-Hind welcome you to unlock the most beautiful destinations
          </p>
          <motion.img 
            src={starImage.src} alt="Star Image" width={360} className="absolute -left-[350px] -top-[137px]" 
            style={{
              translateY,
            }}
          />
          <motion.img 
            src={springImage.src} alt="Spring Image" width={360} className="absolute -right-[331px] -top-[19px]" 
            style={{
              translateY,
            }}
          />
        </div>

        <div className="flex gap-2 mt-10 justify-center">
          {/* <button className="btn btn-primary">Get for free</button> */}
          <button className="btn btn-text gap-1">
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

      </div>
    </section>
  )
};
