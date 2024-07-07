import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    //always put db in try catch
    // also here node js gives access of PROCESS read about it
    try {
        const connectionInstance = await mongoose.connect(`${process.env.
            MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connnected !! DB host:
         ${connectionInstance.connection.host}`)
     
    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1)
    }
}

export default connectDB