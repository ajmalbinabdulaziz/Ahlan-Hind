'use client'
import Logo from "@/assets/logosaas.png"
import Image from 'next/image';
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
import { Button } from '@/components/ui/button'
import { HamburgerMenu } from "@/components/HamburgerMenu"
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useTranslations } from "next-intl";


export const Header = () => {

  const t = useTranslations('Header');


  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>

      {/* <div className="flex justify-center items-center py-7 text-white text-sm bg-[#780540]">
        <div className="flex justify-center gap-6">
          <SocialX />
          <SocialInsta />
          <SocialPin />
          <SocialYoutube />
        </div>
      </div> */}

      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <a href="/">
              <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            </a>
            <div className="md:hidden">
              <HamburgerMenu />
            </div>
            <nav className='hidden md:flex gap-6 text-black/80 items-center'>

              <a href="/">{t('Home')}</a>
              <a href="/about">{t('About')}</a>
              <a href="/packages">{t('Packages')}</a>
              <a href="/gallery">{t('Gallery')}</a>
              <a href="/contact">{t('Contact')}</a>

            <div>
            <LocaleSwitcher />  
            </div>  

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
