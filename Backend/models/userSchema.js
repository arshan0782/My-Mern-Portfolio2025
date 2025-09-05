import mongoose from "mongoose";
import validator from "validator";

const ContactformSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength:[3, 'Name must be at least 3 characters long'],
        maxlength:[30, 'Name cannot exceed 30 characters'],
    },
    number:{
        type: String,
        minlength:[10, 'Number must be at least 10 digits'],
        maxlength:[10, 'Number cannot exceed 10 digits'],
        
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    message:{
        type: String,
        required: true,

    },
})


const Contactform = mongoose.model("Contactform", ContactformSchema);
export default Contactform;