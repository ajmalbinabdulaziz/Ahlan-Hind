'use client'
import Logo from "@/assets/logosaas.png"
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg'
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialLinkedin from "@/assets/social-linkedin.svg"
import SocialPin from "@/assets/social-pin.svg"
import SocialYoutube from "@/assets/social-youtube.svg"
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
// import { currentUser } from "@clerk/nextjs/server";
import { Button } from '@/components/ui/button';


export const Header = () => {

  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>

      <div className="flex justify-center items-center py-7 text-black text-sm bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,#75eb2d,#f0feea_100%)]">
        {/* <div className='inline-flex gap-1 items-center'> */}
          {/* <p>Get started for free</p> */}
          <div className="flex justify-center gap-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>
          {/* <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" /> */}
        {/* </div> */}
      </div>

      {/* Navbar  */}

      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>

              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/packages">Packages</a>
              <a href="/gallery">Gallery</a>
              <a href="">Hospitality</a>

              <a href="/contact">Contact</a>


              {/* <button className='bg-[#0e2401] text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight'>
                Sign Up</button> */}

 

            <SignedIn>
                <UserButton />
            </SignedIn>

            <SignedOut>
              <Button asChild variant="secondary">
                <SignInButton />
              </Button>
            </SignedOut>

            </nav>
          </div>
        </div>
      </div>
    </header>

  )
}
