'use client'

import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CogImage from "@/assets/cog.png"
import Image from "next/image";
import { createEnquiry } from "../actions/createEnquiry";



const Contact = () => {

  const [ submitted, setSubmitted ] = useState(false)


  return (
    <>
    <Head>
      <title>Ajmal Codes | Contact</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {submitted ? (<h3 className="text-center w-auto h-screen text-3xl pt-48 font-bold">Thank you for your message!</h3>)
    :

      (<div className="grid grid-cols-1 px-5 pt-12 md:grid-cols-2  max-w-full">

        <div className="">
          <h2 className="font-bold text-2xl text-center p-5 mt-5">Feel free to ask us anything!</h2>
          <Image className="mx-auto m-5 " src={CogImage} width={200} height={200} alt="" />
          <p className="p-5">
            If you have any suggestions, please let me know. Your suggestions are highly appreciated. Keep dropping your priceless opinions.
          </p>
        </div>

        <div className="max-w-full">
      
          <form 
            action={createEnquiry}
            className="flex flex-col p-5 font-semibold font-sans">
            <label>FULL NAME</label>
            <input  required 
              className="mb-5 shadow border rounded py-1 form-input mt-1 block w-full ring-[#9ced6b] outline-none focus:ring" 
              type="text" name="fullname" />

            <label>EMAIL</label>
            <input  required 
              className="mb-5 shadow border rounded py-1 form-input mt-1 block w-full ring-[#9ced6b] outline-none focus:ring" 
              type="email" name="email" />

            <label>PHONE</label>
            <input  required 
              className="mb-5 shadow border rounded py-1 form-input mt-1 block w-full ring-[#9ced6b] outline-none focus:ring" 
              type="text" name="phone" />

            <label>MESSAGE</label>
            <textarea 
              required
              className=" shadow border rounded block mt-1 py-2 w-full ring-[#9ced6b] outline-none focus:ring form-textarea"
              rows={8} name="message" />            

            <input  
              className="bg-[#75eb2d] mt-3 h-10 w-full hover:bg-[#9ced6b] cursor-pointer border rounded text-white font-bold" 
              type="submit" />
          </form>

        </div>

      </div>)}
    </>
  )
}

export default Contact 