import { NextRequest, NextResponse } from "next/server";
import Contact from "@/models/contactModel";
import connectDB from "@/dbConfig/dbConfig";

connectDB();

export const dynamic = 'force-dynamic';
export async function GET(NextRequest){
    try {
        const contacts = await Contact.find(); 
        // console.log("yes 1")
        return NextResponse.json({
          message: "",
          contacts,
          success: true          
        })
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({
            message: error.message,
            status: 500,
            success: false
        })
    }
}


export async function POST(NextRequest){
    try {
        // console.log("hello ali 1");
        const reqBody = await NextRequest.json();
        const {name, email, phone, message} = reqBody;

        const newContact = new Contact({
            name,
            email,
            phone,
            message
        })

        // Save contact in db
        const savedContact = await newContact.save();
        // console.log("hello ali 2");
        return NextResponse.json({
            message: "Contact Saved successfully",
            success: true,            
        })
    }
    catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500,
            success: false,
        })
    }
}