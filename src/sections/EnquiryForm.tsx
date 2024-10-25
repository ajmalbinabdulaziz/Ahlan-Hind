"use client"

import { createEnquiry } from "@/app/actions/createEnquiry"
import { useState } from "react"


function EnquiryForm() {

  const [click, setClick] = useState<boolean>(false)

  // const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault();
  //   setClick(true)
  //   console.log(click)
  // }
  
  return (
    <section className="border bg-white min-h-full">

    <h1 className="text-center mt-3 text-[#469922] font-bold">Enquiry</h1>
    <div className="flex justify-between">
    <form action={createEnquiry} className="flex flex-col p-3 font-semibold font-sans">
        <div className="flex space-x-2">

            <input placeholder="Full Name" required
                className="mb-5 shadow border rounded p-1 form-input mt-1 block w-full ring-[#83eb57] outline-none focus:ring" 
                type="text" name="fullname" />

            <input placeholder="Phone" required
                className="mb-5 shadow border rounded p-1 form-input mt-1 block w-full ring-[#83eb57] outline-none focus:ring" 
                type="text" name="phone" />

            <input placeholder="Email" required
                className="mb-5 shadow border rounded p-1 form-input mt-1 block w-full ring-[#83eb57] outline-none focus:ring" 
                type="email" name="email" />
        </div>


        <textarea 
          placeholder="Message" required
          className=" shadow border rounded block mt-1 p-2 w-full ring-[#83eb57] outline-none focus:ring form-textarea"
          rows={2} name="message"
        />

        <button type="submit" disabled={click}
              className={`mt-3 h-10 w-full cursor-pointer border rounded font-bold ${click ?'bg-[#b5f09c] text-black': 'bg-[#79ee47] text-white'}"`}
        >
            {click ? 'Submitted' : 'Submit'}
         </button>       
      </form>
    </div>


</section>
  )
}
export default EnquiryForm