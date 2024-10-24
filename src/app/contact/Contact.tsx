'use client'

import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CogImage from "@/assets/cog.png"
import Image from "next/image";
import { createEnquiry } from "../actions/createEnquiry";



const Contact = () => {

  const [ submitted, setSubmitted ] = useState(false)

  const { register,handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = async(data) => {
//     await fetch('/api/createMessage', {
//       method: 'POST',
//       body: JSON.stringify(data),
//     }).then(()=> {
//       console.log(data);
//       setSubmitted(true);
//     }).catch((err) => {
//       console.log(err);
//       setSubmitted(false);
//     })
//   } 

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
            // action={createEnquiry}
            className="flex flex-col p-5 font-semibold font-sans">
            <label>FULL NAME</label>
            <input {...register("name", { required: true })} className="mb-5 shadow border rounded py-1 form-input mt-1 block w-full ring-[#9ced6b] outline-none focus:ring" type="text" name="name" />

            <label>EMAIL</label>
            <input  {...register("email", { required: true })} className="mb-5 shadow border rounded py-1 form-input mt-1 block w-full ring-[#9ced6b] outline-none focus:ring" type="email" name="email" />

            <label>PHONE</label>
            <input  {...register("email", { required: true })} className="mb-5 shadow border rounded py-1 form-input mt-1 block w-full ring-[#9ced6b] outline-none focus:ring" type="text" name="phone" />

            <label>MESSAGE</label>
            <textarea 
              {...register("message", { required: true })}
              className=" shadow border rounded block mt-1 py-2 w-full ring-[#9ced6b] outline-none focus:ring form-textarea"
              rows={8} name="message"
                      />

            <div className="flex flex-col">
              {errors.name && <span className="text-red-500">The Name Field is Required</span>} 
              {errors.email && <span className="text-red-500">The Email Field is Required</span>}
              {errors.message && <span className="text-red-500">The Message Field is Required</span>}    
            </div>          

            <input type="submit" 
                  className="bg-[#75eb2d] mt-3 h-10 w-full hover:bg-[#9ced6b] cursor-pointer border rounded text-white font-bold" />
          </form>

        </div>

      </div>)}
    </>
  )
}

export default Contact 