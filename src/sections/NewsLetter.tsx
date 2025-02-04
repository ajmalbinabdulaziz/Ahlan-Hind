"use client"

import { createNewsletter } from "@/app/actions/createNewsletter";
import { useRef } from "react"
import { toast } from "react-hot-toast";


function NewsLetter() {

  const ref = useRef<HTMLFormElement>(null);

  return (
    <section className="border rounded-2xl shadow-lg shadow-[#9b4371] bg-white min-w-min max-h-min  ">

    <div className="flex justify-between">
      <form ref={ref} className="flex flex-col p-3 font-semibold font-sans"
          action={async (formData) => {
            ref.current?.reset()
            await createNewsletter(formData) 
            toast.success('Newsletter submitted'); 

          }}
      >

        <div className="md:grid grid-cols-2 md:py-4">

            <div className="md:py-2">
              <h1 className="text-center md:text-left md:ml-3 mt-3 text-2xl font-bold">Newsletter</h1>
              <h3 className="text-center md:text-left my-2 md:ml-3 mt-1 text-lg font-normal">
                Type your email to be the first to get our offers and news
              </h3>
            </div>

            <div className="flex flex-col md:flex-col">
              <div className="flex space-x-2">
                <input placeholder="Full Name" required minLength={3} maxLength={15}
                      className="mb-5 shadow border rounded px-6 py-2 form-input block w-full ring-[#ad4f80] outline-none focus:ring" 
                      type="text" name="fullname" />      

                <input placeholder="Email" required minLength={7} maxLength={30}
                    className="mb-5 shadow border rounded px-6 py-2 form-input block w-full ring-[#924c70] outline-none focus:ring" 
                    type="email" name="email" />
              </div>
  

              <div className="">
                <button type="submit" 
                      className="px-10 h-10 w-full cursor-pointer border rounded font-bold  text-white bg-[#780540]"
                      >
                    Sign Up
                </button>     
              </div>

            </div>
        


        </div>

      </form>
    </div>


</section>
  )
}
export default NewsLetter