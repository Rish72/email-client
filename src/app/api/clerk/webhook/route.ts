///api/clerk/webhook

import { db } from "~/server/db"


export const POST = async (req : Request) => {
    const {data}  = await req.json()

    const user_id = data.id
    const firstName = data.first_name
    const lastName = data.last_name
    const imgUrl = data.image_url
    const emailAddress = data.email_addresses[0].email_address

    const user = await db.user.create({
        data : {
            id : user_id,
            emailAddress,
            firstName,
            lastName,
            imgUrl
        }
    })
    console.log("user created");

    return new Response("WEbhook received ", {status : 200})
    
}   