import Alleppey from "@/assets/alleppey.jpg"
import Thekkady from "@/assets/thekkady.jpg"
import Wagamon from "@/assets/wagamon.jpg"
import Image from "next/image"
import ArrowIcon from "@/assets/arrow-right.svg"



function Packages() {
  return (
    <section className="py-24 bg-white">

        <div className="container">
            <div className="flex flex-col">

                <div className="tag mx-auto">
                    Packages
                </div>
                
                <div className="section-heading flex flex-col gap-2">
                    <h2 className="section-title text-5xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#1c4205] text-transparent bg-clip-text mt-6">Explore Kerala Tourism</h2>
                    <p className="section-description mt-4">
                        The South-west state of India, Kerala enjoys all the blessings of nature – a long coastline, 
                        mountain stretches, meandering rivers, stunning water falls, dense forests, surf washed beaches, & dazzling monsoon.
                    </p>
                    <button className='btn btn-text gap-1'>
                        <span>Read More</span>
                        <ArrowIcon className="h-5 w-5" />
                  </button>
                </div>

            </div>

            <div className="flex flex-col items-center md:flex md:flex-row gap-4 mt-12">
                <div className="relative">
                    <Image src={Alleppey} width={350} height={350} alt="Alleppey" />   
                    <p className="absolute bottom-1 right-4 text-white text-lg font-bold">Alleppey</p>
                </div>
                <div className="relative">
                    <Image src={Thekkady} width={350} height={350} alt="Thekkady" />   
                    <p className="absolute bottom-1 right-4 text-white text-lg font-bold">Thekkady</p> 
                </div>
                <div className="relative">
                    <Image src={Wagamon} width={350} height={350} alt="Wagamon" />   
                    <p className="absolute bottom-1 right-4 text-white text-lg font-bold">Wagamon</p> 
                </div>
            </div>
        </div>

    </section>
  )
}
export default Packages