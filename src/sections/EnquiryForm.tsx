"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";


interface EnquiryFormProps {
    name: string
    phone: string
    email: string
    message: string
}


function EnquiryForm() {


    const [ submitted, setSubmitted ] = useState(false)

    const { register,handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit: any = async(data: EnquiryFormProps) => {
      await fetch('/api/createMessage', {
        method: 'POST',
        body: JSON.stringify(data),
      }).then(()=> {
        console.log(data);
        setSubmitted(true);
      }).catch((err) => {
        console.log(err);
        setSubmitted(false);
      })
    } 


  return (
    <section className="border bg-white min-h-full">

        <h1 className="text-center mt-3 text-[#469922] font-bold">Enquiry</h1>
        <div className="flex justify-between">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-3 font-semibold font-sans">
            <div className="flex space-x-2">

                <input {...register("name", { required: true })} placeholder="Name" 
                    className="mb-5 shadow border rounded p-1 form-input mt-1 block w-full ring-[#83eb57] outline-none focus:ring" type="text" name="name" />

                <input  {...register("phone", { required: true })} placeholder="Phone" 
                    className="mb-5 shadow border rounded p-1 form-input mt-1 block w-full ring-[#83eb57] outline-none focus:ring" type="text" name="phone" />

                <input  {...register("email", { required: true })} placeholder="Email" 
                    className="mb-5 shadow border rounded p-1 form-input mt-1 block w-full ring-[#83eb57] outline-none focus:ring" type="text" name="email" />
            </div>

            {/* <label>SUBJECT</label>
            <input  {...register("subject", { required: true })} className="mb-5 shadow border rounded py-1 form-input mt-1 block w-full ring-purple-500 outline-none focus:ring" type="text" name="subject" /> */}

            <textarea 
              {...register("message", { required: true })} placeholder="Message"
              className=" shadow border rounded block mt-1 p-2 w-full ring-[#83eb57] outline-none focus:ring form-textarea"
              rows={2} name="message"
            />

            <div className="flex flex-col">
              {errors.name && <span className="text-red-500">The Name Field is Required</span>} 
              {errors.phone && <span className="text-red-500">The Phone Field is Required</span>}
              {errors.email && <span className="text-red-500">The Email Field is Required</span>}
              {/* {errors.subject && <span className="text-red-500">The Subject Field is Required</span>} */}
              {errors.message && <span className="text-red-500">The Message Field is Required</span>}    
            </div>      

            <input type="submit" 
                  className="bg-[#79ee47] mt-3 h-10 w-full hover:bg-[#aaf589] cursor-pointer border rounded text-white font-bold" />
          </form>
        </div>


    </section>
  )
}
export default EnquiryForm