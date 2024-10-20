import { CallToAction } from "./CallToAction"
import { Hero } from "./Hero"
import { LogoTicker } from "./LogoTicker"
import Packages from "./Packages"
import { ProductList } from "./ProductList"
import { Testimonials } from "./Testimonials"

function MainPage() {
    
  return (
    <>
      <Hero />
      <LogoTicker />
      <ProductList />
      {/* <ProductShowcase /> */}≠
      <Packages />
      {/* <PopularPackages /> */}
      {/* <Pricing /> */}
      <Testimonials />
      <CallToAction />
    </>
  )
}
export default MainPage