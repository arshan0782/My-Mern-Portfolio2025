import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import {errorMiddleware } from "./middlewares/error.js";
import router from "./routes/routes.js";
import {dbConnect} from "./database/db.js";


const app = express();

dotenv.config({path: "./config/config.env"})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use(cors({
    origin:["http://localhost:5173","https://mohdarshan782.netlify.app/"],
    method: ["POST"],
    credentials: true,
})
);
app.use(express.json());
app.use(express.urlencoded({ extended:true}))

app.use('/contact', router)
app.get("/",(req,res,next)=>{
    return res.status(200).json({
        success:true,
        message:"Welcome to Contact Form API"
    })
})

dbConnect()
app.use(errorMiddleware)


export default app;


