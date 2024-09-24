import Image from "next/image"
import Alleppey from "@/assets/alleppey.jpg"
import Thekkady from "@/assets/thekkady.jpg"
import Wagamon from "@/assets/wagamon.jpg"
import Himalaya from "@/assets/himalaya.jpg"
import Andaman from "@/assets/andaman.jpg"
import Tajmahal from "@/assets/tajmahal.jpg"
import Hogenakkal from "@/assets/Hogenakkal.jpg"
import Ayurveda from "@/assets/ayurveda.jpg"




function Gallery() {
  return (
    <section className="container text-center space-y-10 pt-10 pb-32">
        <div className="tag">
            Gallery
        </div>
        <div className="border w-auto h-auto flex flex-wrap flex-grow p-4 space-x-2 space-y-2">
            <Image src={Alleppey} width={350} height={350} alt="Alleppey" className="grow hover:scale-110 transition-transform" />   
            <Image src={Thekkady} width={350} height={350} alt="Thekkady" className="grow hover:scale-110 transition-transform" />   
            <Image src={Wagamon} width={350} height={350} alt="Wagamon" className="grow hover:scale-110 transition-transform" />   
            <Image src={Himalaya} width={350} height={350} alt="Himalaya" className="grow hover:scale-110 transition-transform" />   
            <Image src={Andaman} width={350} height={350} alt="Andaman" className="grow hover:scale-110 transition-transform" />   
            <Image src={Tajmahal} width={350} height={350} alt="Tajmahal" className="grow hover:scale-110 transition-transform" />   
            <Image src={Hogenakkal} width={350} height={350} alt="Hodenakkal" className="grow hover:scale-110 transition-transform" />   
            <Image src={Ayurveda} width={350} height={350} alt="Ayurveda" className="grow hover:scale-110 transition-transform" />                       
        </div>

    </section>
  )
}
export default Gallery