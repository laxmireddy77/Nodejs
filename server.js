
const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
dotenv.config();
const signUpRouter=require("./routes/SignUpRoute");
const updateRouter=require("./routes/UpdateRoute");
const deleteRouter=require("./routes/DeleteRoute");
const app=express();
app.use(cors());
app.use('/uploads',express.static('uploads'))
app.use("/",signUpRouter)
app.use("/",updateRouter)
app.use("/",deleteRouter);
app.listen(9999,()=>{
    console.log("Listening to port 9999");
})