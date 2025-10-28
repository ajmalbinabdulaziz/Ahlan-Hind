import { CallToAction } from "./CallToAction"
import { Hero } from "./Hero"
import { LogoTicker } from "./LogoTicker"
import Packages from "./Packages"
import { ProductList } from "./ProductList"
import { Testimonials } from "./Testimonials"
import { currentUser } from "@clerk/nextjs/server";
import { client } from "../sanity/lib/client"
import EnquiryForm from "./EnquiryForm"



async function MainPage() {

    // const user: any = await currentUser();
    const user: any = true;
    if (!user) {
        // return NextResponse.redirect('http://localhost:3000/sign-in');
        return (
            <div className="relative">
              <Hero />
              
              <div className="container absolute top-[450px] md:top-[590px] inset-s-10 inset-e-10 
              mb-10 p-2 mx-auto w-auto border-white shadow-lg shadow-[#4b0328] overflow-visible">
                <EnquiryForm />
              </div>

              <LogoTicker />
              <ProductList />
              {/* <ProductShowcase /> */}≠
              <Packages />
              {/* <PopularPackages /> */}
              {/* <Pricing /> */}
              <Testimonials />
              <CallToAction />
            
          </div>
        )
    }
  
    // const {id, username, firstName, lastName, emailAddresses} = user;
    // await client.createIfNotExists({
    //   _type: "user",
    //   _id: id,
    //   username,
    //   firstName,
    //   lastName,
    //   email: emailAddresses[0].emailAddress
    // })
  
  return (
    <>
      <Hero />
      {/* <div>
        <EnquiryForm />
      </div> */}

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