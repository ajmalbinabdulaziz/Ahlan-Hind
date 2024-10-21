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
import MainPage from "@/sections/MainPage";



export default function Home() {


  // const user: any = await currentUser();
  // if (!user) {
  //     // return NextResponse.redirect('http://localhost:3000/sign-in');
  //     return <MainPage />
  // }

  // const {id, username, firstName, lastName, emailAddresses} = user;
  // await client.createIfNotExists({
  //   _type: "user",
  //   _id: id,
  //   username,
  //   firstName,
  //   lastName,
  //   email: emailAddresses[0].emailAddress
  // })

  return <MainPage />
}
