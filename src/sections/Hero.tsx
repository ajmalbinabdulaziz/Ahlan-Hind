'use client'
import ArrowIcon from "@/assets/arrow-right.svg"
import CylinderImage from "@/assets/cylinder.png"
import noodleImage from "@/assets/noodle.png"
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from "react";
import EnquiryForm from "./EnquiryForm";
import { HomeCarousel } from "@/components/HomeCarousel"
import mountainView from '@/assets/homeImages/mountainView.jpg'


 
export const Hero = () => {

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  const [title, setTitle] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api', {
        method: 'POST',
      });
      const data = await response.json();
      setTitle(data);
    }

    fetchData();
  }, []);

  console.log(`data  ${title}`)

  return(
    <section ref={heroRef} 
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[url('https://images.unsplash.com/photo-1731946660299-8f091eb1caee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
      overflow-x-clip"
    >

      <div className="container">
        <div className="md:flex items-center">

            <div className="md:w-[478px]">
                <div className="tag">
                  Travel around.
                </div>
                <h1 className="text-5xl md:text-5xl font-bold text-black mt-6">
                  Welcome to Ahlan Hind!
                </h1>
                <p className="text-xl text-[#4b0328] tracking-tight mt-6">
                Hospitality is one of the most treasured values of Indian culture and lies at the heart of our desire to open our doors to 
                international travellers..
                </p>
                <div className="flex py-2">
                  <p className="font-semibold ">Read More</p>
                  <ArrowIcon className="h-5 w-5 pt-1" />
                </div>
                <div className="mt-10">
                  <EnquiryForm />
                </div>
            </div>

            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">


              <div className="md:rotate-6 md:mt-36 md:ml-44 md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 
                lg:left-0 ">
                  <div className="">
                
                    <HomeCarousel />             
                
                  </div>
              </div>
               
                <motion.img src={CylinderImage.src} width={220} height={220} alt="Cylinder Image"
                className="hidden md:block -top-8 -left-20 md:absolute"
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
 