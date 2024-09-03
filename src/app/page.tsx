import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import Packages from "@/sections/Packages";
import { ProductList } from "@/sections/ProductList";
// import { Pricing } from "@/sections/Pricing";
// import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductList />
      {/* <ProductShowcase /> */}
      <Packages />
      {/* <Pricing /> */}
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  )
}
