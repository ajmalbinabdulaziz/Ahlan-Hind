"use client"
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";



const testimonials = [
  {
    text: "I really enjoy the trip. It was an excellent travel memmory. Very nice, polite and quite team. Thank you so much team Ahlan Hind",
    imageSrc: avatar1.src,
    name: "Rasmitha Raghuvaran",
    username: "@rasmitharaghuvaranu00",
  },
  {
    text: "Excellent service and the staff are very courteous from the day we arrived in Kochi to the departure they are in touch with us. We booked a two day trip to Munnar coordinated by Mr. Abdul Rahim. The driver, Radesh is very respectful and did not neglect us. ",
    imageSrc: avatar2.src,
    name: "Aysha Suleiman",
    username: "@ayshasuleiman99",
  },
  {
    text: "A distinguished company. The hotels were booked and the driver's name was Shamsu. The trip was arranged through the company. The trip was special.",
    imageSrc: avatar3.src,
    name: "Mohammed Hijab",
    username: "@mohijab767",
  },
  {
    text: "I booked through them twice God willing, after 10, it will be the third time and the reservation will be confirmed.",
    imageSrc: avatar4.src,
    name: "Alma Ouren",
    username: "@almaouren",
  },
  {
    text: "The office is excellent and adheres to what is agreed upom i travelled through them twice if I return to Kerala, my reservation will be through them. Their work is professional and organized.",
    imageSrc: avatar5.src,
    name: "Mo Saleh",
    username: "@mosaleh88",
  },
  {
    text: "A wonderful tourist services office, suitable services, elegant treatment, and wonderful cooperation. The drivers are also cooperative.",
    imageSrc: avatar6.src,
    name: "Amaal Sufi",
    username: "@sufiamaal",
  },
  {
    text: "The best tourism company in the world. I traveled with them twice, and God willing, we will continue with them Great services and with you all the time for any emergency matter, clear and appropriate services at the price and credibility, and they care very much about customer satisfaction, especially the employee.",
    imageSrc: avatar7.src,
    name: "Maram Aboul Enein",
    username: "@maenein",
  },
  {
    text: "Peace be upon you. I am Aqeel from Saudi Arabia. I came to Kerala for ten days with young people. The trip schedule was beautiful. Clean hotels and a clean car. The driver, Abu Nabil. Thank you to the office for the trust.",
    imageSrc: avatar8.src,
    name: "Mohamamed Aqeel",
    username: "@moaqeel543",
  },
  {
    text: "The Travel and Tourism Office takes care of all reservations and arranges them. We had the oppurtunity to travel though them in Kerala after I coordinated with them from Saudi Arabia. Frankly, they are very tidy, their coordination is wonderful, and their treatment is sophisticated.",
    imageSrc: avatar9.src,
    name: "Safdar Hashmi",
    username: "@shashmi676",
  },
];

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const TestimonialsColumn = (props: { 
  className?: string, 
  testimonials: typeof testimonials 
  duration: number
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

              {props.testimonials.map(({ text, imageSrc, name, username }, index) => (
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
                        <div className="leading-5 tracking-tight">{username}</div>
                      </div>
                    </div>
                </div>
              ))}

        </React.Fragment>
      ))}

    </motion.div>
  </div>
)

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="text-center text-5xl md:text-5xl font-bold text-[#780540] mt-6">What our users say</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} duration={19} className="hidden md:block"/>
          <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
        </div>
      </div>
    </section> 
  )
};
