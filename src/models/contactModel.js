import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Provide a name"],        
    },
    email: {
        type: String,
        required: [true, "Please Provide an email"],
        unique: true
    },
    phone: {
        type: String,
        required: [true, "Please Provide a contact number"],        
    },
    message: {
        type: String,
        required: [true, "Please Provide a message"],        
    },
        
})

const Contact = mongoose.models.contact || mongoose.model("contact", contactSchema);

export default Contact;