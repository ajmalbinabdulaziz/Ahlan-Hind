import Image from "next/image";
import logo from "@/assets/logosaas.png"
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialPin from "@/assets/social-pin.svg"
import SocialYoutube from "@/assets/social-youtube.svg"




export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm pt-56 pb-14 text-center">
        {/* <div className="container absolute bottom-[450px] md:bottom-[10px] left-10 right-10 
              mb-10 p-2 mx-auto w-auto border-white shadow-lg shadow-[#4b0328] overflow-visible">
                <NewsLetter />
              </div> */}

              {/* <div className="container mb-16 absolute bottom-96 left-10 right-10">
                <NewsLetter />
              </div> */}

      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:w-full before:blur
         before:bg-[linear-gradient(to_right,#F87BFF, #FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:bg-red-500 before:absolute">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          {/* <a href="#">Features</a> */}
          {/* <a href="#">Customers</a> */}
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Contact</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          {/* <SocialLinkedin /> */}
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">@copy; 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
};
