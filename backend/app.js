import express  from "express";
// console.log("hello aditya verma");
import mongoose from 'mongoose';
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
const app= express();
// app.use("/api",(req,res,next)=>{
//     res.send("hello !!!!!") ;

// });

app.use(express.json());
app.use("/api/user", router) ;  

app.use("/api/blog",blogRouter);

mongoose
.connect('mongodb+srv://admin:U9bzOuZQs0meetam@cluster0.ejg1efz.mongodb.net/?retryWrites=true&w=majority')
.then(()=>app.listen(5000))
.then(()=>
     console.log("connected to database and listening to localhost 5000")
     )
.catch((err)=>console.log(err));

// app.listen(5000);




