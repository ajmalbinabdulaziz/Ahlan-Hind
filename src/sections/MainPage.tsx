import { CallToAction } from "./CallToAction"
import { Hero } from "./Hero"
import { LogoTicker } from "./LogoTicker"
import Packages from "./Packages"
import { ProductList } from "./ProductList"
import { Testimonials } from "./Testimonials"
import { currentUser } from "@clerk/nextjs/server";
import { client } from "../sanity/lib/client"



async function MainPage() {

    const user: any = await currentUser();
    if (!user) {
        // return NextResponse.redirect('http://localhost:3000/sign-in');
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
  
    const {id, username, firstName, lastName, emailAddresses} = user;
    await client.createIfNotExists({
      _type: "user",
      _id: id,
      username,
      firstName,
      lastName,
      email: emailAddresses[0].emailAddress
    })
  
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