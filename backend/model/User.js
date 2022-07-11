import mongoose from "mongoose";

const Schema=mongoose.Schema;

const userSchema= new Schema({

    name:{
        type:String,
        required: true
    },
     email:{
        type:String, // if it wont work then change it ro String-----------
        required:true,
        unique:true,
     },
     password: {
        type:String,
        required: true,
        minlength:8
     },
     blogs:[{type: mongoose.Types.ObjectId,ref:"Blog",required:true}],
});


export default mongoose.model("User", userSchema);



