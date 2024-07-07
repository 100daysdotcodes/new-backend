// require('dotenv').config({ path: './env' })  // this is correct but not consistent

import dotenv from "dotenv" // but ye chalega nahi we have to config it then it works
import connectDB from "./db/index.js"
dotenv.config({
    path: './env'
})
connectDB()

