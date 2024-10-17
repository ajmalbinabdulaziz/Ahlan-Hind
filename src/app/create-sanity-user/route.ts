import { NextApiRequest } from "next";
import { client } from "../../sanity/lib/client"
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export const GET = async (req: NextApiRequest) => {
    const user = await currentUser();
    if (!user) {
        return NextResponse.redirect("/sign-in");
    }

    const {id, username, firstName, lastName, emailAddresses} = user;

    await client.createIfNotExists({
            _type: "user",
            _id: id,
            username,
            firstName,
            lastName,
            email: emailAddresses[0].emailAddress
        })

        const url = req.url?.split("/create-sanity-user")[0] || "/"
            return NextResponse.redirect(url);
    

}

