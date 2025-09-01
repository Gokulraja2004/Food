import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://Gokulraja:9150540647@cluster0.7yymxnk.mongodb.net/FOOD')
    .then(()=>console.log('db is connected'))
}