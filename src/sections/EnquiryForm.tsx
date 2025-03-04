"use client"

import { createEnquiry } from "@/app/actions/createEnquiry"
import { useRef } from "react"
import { toast } from "react-hot-toast";

function EnquiryForm() {

  const ref = useRef<HTMLFormElement>(null);

  
  return (
    <section className="border bg-white min-w-min max-h-min">

    <h1 className="text-center mt-3 text-[#780540] font-bold">Enquiry</h1>
    <div className="flex justify-between">
    <form ref={ref} className="flex flex-col p-3 font-semibold font-sans"
        action={async (formData) => {
          ref.current?.reset()
          await createEnquiry(formData) 
          toast.success('Enquiry submitted'); 

        }}
    >

        <div className="flex flex-col md:flex-row space-x-2">

            <input placeholder="Full Name" required minLength={3} maxLength={15}
                className="mb-5 shadow border rounded px-20 py-2 form-input mt-1 block w-full ring-[#780540] outline-none focus:ring" 
                type="text" name="fullname" />

            <input placeholder="Phone" required minLength={7} maxLength={15}
                className="mb-5 shadow border rounded px-20 py-2 form-input mt-1 block w-full ring-[#780540] outline-none focus:ring" 
                type="text" name="phone" />

            <input placeholder="Email" required minLength={7} maxLength={30}
                className="mb-5 shadow border rounded px-20 py-2 form-input mt-1 block w-full ring-[#780540] outline-none focus:ring" 
                type="email" name="email" />
        </div>

        <div className="flex space-x-4">
          <div className="w-full">
            <textarea 
              placeholder="Message" required minLength={3} maxLength={200}
              className="shadow border rounded block mt-1 p-2 w-full ring-[#780540] outline-none focus:ring form-textarea"
              rows={2} name="message"
              />
          </div>

          <div className="">
            <button type="submit" 
                  className="px-4 mt-3 h-10 w-full cursor-pointer border rounded font-bold  text-white bg-[#780540]"
                  >
                Submit
            </button>     
          </div>

        </div>

      </form>
    </div>


</section>
  )
}
export default EnquiryForm