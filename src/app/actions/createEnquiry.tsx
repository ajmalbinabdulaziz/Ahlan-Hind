'use server'

import { client } from "@/sanity/lib/client";
import { revalidatePath } from "next/cache";
import { z } from 'zod'


const createEnquirySchema = z.object({
  fullname: z.string().min(3).max(15),
  phone: z.string().min(7).max(15),
  email: z.string().min(7).max(30),
  message: z.string().min(3).max(200),
});


export const createEnquiry = async (formData: FormData)=> {

  try{
    const { fullname, phone, email, message } = createEnquirySchema.parse({
      fullname: formData.get('fullname'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    // const fullname = formData.get('fullname')
    // const phone = formData.get('phone')
    // const email = formData.get('email')
    // const message = formData.get('message')
      
      await client.create({
        _type: "enquiry",
        fullname, phone, email, message
      })
  }   catch (error) {
    // Capture the error message to display to the user
    console.log(error)
  }

    revalidatePath('/');
}
