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
import { currentUser } from "@clerk/nextjs/server";
import { client } from "../sanity/lib/client"
import { StringDecoder } from "string_decoder";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";


// interface UserProps {
//   id: string 
//   username: string 
//   firstName: string 
//   lastName: string 
//   emailAddresses: string 
// }


// export const GET = async (req: NextApiRequest) => {
//     const user = await currentUser();
//     if (!user) {
//         return NextResponse.redirect("/sign-in");
//     }

//     const {id, firstName, lastName, emailAddresses} = user;

//     await client.createIfNotExists({
//             _type: "user",
//             _id: id,
//             firstName,
//             lastName,
//             email: emailAddresses[0].emailAddress
//         })

//         const url = req.url?.split("/create-sanity-user")[0] || "/"
//             return NextResponse.redirect(url);

// }


export default async function Home() {

  const user: any = await currentUser();
  // const url = 'http://localhost:3000/sign-in'
  // if (!user) {
  //     return NextResponse.redirect('http://localhost:3000/sign-in');
  // }
  
  if(user){
    const {id = 0, username, firstName, lastName, emailAddresses} = user;
    await client.createIfNotExists({
      _type: "user",
      _id: id,
      username,
      firstName,
      lastName,
      email: emailAddresses[0].emailAddress
    })
  }



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
