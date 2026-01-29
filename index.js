import { connectDB } from "./Db/db.js";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoute from "./Routes/userRoute.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT ||5000;

//middlware
app.use(express.json())
app.use(cors())
//connectivity
connectDB()
//routes definition
app.use('/api/user', userRoute);
    // http://localhost:5000/api/users/signup
    app.listen(PORT,() => {
        console.log(`Your server is running in ${PORT}`);

    })
    connectDB()

    
