import mongoose from "mongoose";
import { ENV } from "./env.js";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDB = async () => {
    try {
        if (!ENV.DB_URL) {
            throw new Error("DB_URL is not defined");
        }
        await mongoose.connect(ENV.DB_URL);
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB connection error", error);
        process.exit(1);
    }
};