import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";

export const inngest = new Inngest({
    id: "career-bridge"
});

const syncUser = inngest.createFunction(
    {
        id: "sync-user",
        triggers: [{ event: "clerk/user.created" }]
    },
    async ({ event }) => {
        await connectDB();  //connect to DB

        const { id, email_addresses, first_name, last_name, image_url } = event.data;  //get the user data

        const newUser = {   //create the User object
            clerkId: id,
            email: email_addresses[0]?.email_address,
            name: `${first_name || ""} ${last_name || ""}`,
            profileImage: image_url
        };

        await User.create(newUser);  //pass the User object and create the user in DB
    }
);

const deleteUserFromDB = inngest.createFunction(
    {
        id: "delete-user-from-db",
        triggers: [{ event: "clerk/user.deleted" }]
    },
    async ({ event }) => {
        await connectDB();  //connect to DB

        const { id } = event.data;   //get the user id

        await User.deleteOne({ clerkId: id });  //delete the user
    }
);

export const functions = [syncUser, deleteUserFromDB];
