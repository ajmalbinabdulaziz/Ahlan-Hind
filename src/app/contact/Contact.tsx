'use client'

import Head from "next/head";
import { useRef, useState } from "react";
import CogImage from "@/assets/cog.png"
import Image from "next/image";
import { createEnquiry } from "../actions/createEnquiry";
import { toast } from "react-hot-toast";



const Contact = () => {

  const [ submitted, setSubmitted ] = useState(false)
  const ref = useRef<HTMLFormElement>(null);


  return (
    <section className="bg-[url('/Hogenakkal.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="fixed opacity-30  bg-[radial-gradient(ellipse_150%_50%_at_bottom_left,#75eb2d,#768071_100%)] h-full w-full" />

    <Head>
      <title>Ajmal Codes | Contact</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {submitted ? (<h3 className="text-center w-auto h-screen text-3xl pt-48 font-bold">Thank you for your message!</h3>)
    :

      (<div className="grid grid-cols-1 px-5 pt-12 md:grid-cols-2 max-w-full ">

        <div className="text-white">
          <h2 className="font-bold text-2xl text-center p-5 mt-5">Feel free to ask us anything!</h2>
          <Image className="mx-auto m-5" src={CogImage} width={200} height={200} alt="" />
          <p className="p-5 text-white font-semibold">
            If you have any suggestions, please let me know. Your suggestions are highly appreciated. Keep dropping your priceless opinions.
          </p>
        </div>

        <div className="max-w-full z-10 mb-16 md:mb-10">
      
          <form ref={ref} 
            action={async (formData) => {
              setSubmitted(true)
              ref.current?.reset()
              await createEnquiry(formData)             
              toast.success('Enquiry submitted'); 
            }}
            className="flex flex-col p-5 font-semibold font-sans text-white">
            <label>FULL NAME</label>
            <input  required minLength={7} maxLength={15}
              className="mb-5 shadow border rounded py-1 form-input mt-1 block w-full ring-[#9ced6b] outline-none focus:ring" 
              type="text" name="fullname" />

            <label>EMAIL</label>
            <input  required minLength={7} maxLength={30}
              className="mb-5 shadow border rounded py-1 form-input mt-1 block w-full ring-[#9ced6b] outline-none focus:ring" 
              type="email" name="email" />

            <label>PHONE</label>
            <input  required minLength={7} maxLength={15}
              className="mb-5 shadow border rounded py-1 form-input mt-1 block w-full ring-[#9ced6b] outline-none focus:ring" 
              type="text" name="phone" />

            <label>MESSAGE</label>
            <textarea 
              required minLength={3} maxLength={200}
              className=" shadow border rounded block mt-1 py-2 w-full ring-[#9ced6b] outline-none focus:ring form-textarea"
              rows={8} name="message" />            

            <input disabled={submitted}
              className="bg-[#75eb2d] mt-3 h-10 w-full hover:bg-[#9ced6b] cursor-pointer border rounded text-white font-bold" 
              type="submit" />
          </form>

        </div>

      </div>)}

    </section>
  )
}

export default Contact 