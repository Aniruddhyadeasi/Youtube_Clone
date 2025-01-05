import mongoose from 'mongoose';
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MOGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongodb connected!!`)
    } catch (error) {
        console.log("MONGODB connection erreor", error);
        process.exit(1)
    }
}


export default connectDB