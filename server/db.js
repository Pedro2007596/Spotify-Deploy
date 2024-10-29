import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dbPassword = process.env.REACT_DB_PASSWORD;

export default async function conectaNaDb(){
    mongoose.connect(`mongodb+srv://b4rr1gameplay:${dbPassword}@spotify.smm0e.mongodb.net/?retryWrites=true&w=majority&appName=Spotifyd6VDeWheABTrInPJ`);

    return mongoose.connection;
}