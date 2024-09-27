import express from "express";
import cors from "cors";
import { template } from "./routes/templates";
const port =3000
const app = express();
app.use(cors());

app.use("/api/v1",template)
app.listen(port,()=>{
    console.log(`server is running on ${port}`)

})