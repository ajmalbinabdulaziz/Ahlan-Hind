'use server'

import { client } from "@/sanity/lib/client";
import { revalidatePath } from "next/cache";
import { z } from 'zod'


const createNewsletterSchema = z.object({
  fullname: z.string().min(3).max(15),
  email: z.string().min(7).max(30)
});

export const createNewsletter = async (formData: FormData)=> {

  try{
    const { fullname, email } = createNewsletterSchema.parse({
      fullname: formData.get('fullname'),
      email: formData.get('email')
    });
      
      await client.create({
        _type: "newsletter",
        fullname, email
      })
      console.log("success!")
  }   catch (error) {
    console.log("error")
    console.log(error)
  }

    revalidatePath('/');
}
