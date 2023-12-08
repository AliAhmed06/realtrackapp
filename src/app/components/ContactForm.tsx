"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [loading, setLoading] = useState(false);

  const contactHandler = async (e) => {
    e.preventDefault();
    try {
      if (name === "") {
        setNameError("Name field is required");
      } else {
        setNameError("");
      }

      if (email === "") {
        setEmailError("Email field is required");
      } else {
        setEmailError("");
      }

      if (phone === "") {
        setPhoneError("Phone field is required");
      } else {
        setPhoneError("");
      }

      if (message === "") {
        setMessageError("Message field is required");
      } else {
        setMessageError("");
      }

      if (name === "" || email === "" || phone === "" || message === "") {
        return;
      } else {
          setLoading(true);
          const response =  await axios.post("/api/contacts", {name, email, phone, message});         
          // console.log(response);
          if(response.data.success){
            toast.success("Your Message has been received!", {position: toast.POSITION.TOP_RIGHT});            
          }
          else{
            toast.error(response.data.message, { position: toast.POSITION.TOP_RIGHT});
          }
          
          setName("");
          setEmail("");
          setPhone("");                
          setMessage("");
          setLoading(false);
      }
    } catch (error) {

    }

    // if(response.data.success){
    // toast.success("User Registered Successfully", { position: toast.POSITION.TOP_RIGHT});
    // }
    // else{
    // toast.error(response.data.error, { position: toast.POSITION.TOP_RIGHT});
    // }
  };

  return (
    <div className="w-full md:w-[400px] lg:w-[500px] mt-5 flex flex-col gap-6 ">
      <input
        type="text"
        className="w-full outline-none border border-gray-300 py-3 px-5 rounded-md focus:border-yellow-500 bg-gray-50"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {nameError !== "" && <p className="text-red-500">{nameError}</p>}

      <input
        type="email"
        className="w-full outline-none border border-gray-300 py-3 px-5 rounded-md focus:border-yellow-500 bg-gray-50"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError !== "" && <p className="text-red-500">{emailError}</p>}

      <input
        type="number"
        className="w-full outline-none border border-gray-300 py-3 px-5 rounded-md focus:border-yellow-500 bg-gray-50"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {phoneError !== "" && <p className="text-red-500">{phoneError}</p>}

      <textarea
        className="w-full outline-none border border-gray-300 py-3 px-5 rounded-md focus:border-yellow-500 bg-gray-50 h-[200px]"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      {messageError !== "" && <p className="text-red-500">{messageError}</p>}

      <button
        onClick={contactHandler}
        className="bg-yellow-500 py-3 px-8 text-white rounded-md hover:bg-opacity-80 mx-auto w-[200px] h-[50px] flex items-center justify-center"
      >
        { !loading ? "SEND MESSAGE" : <img src="/images/loading.gif" alt="" className="h-[40px]" />   }  
        
      </button>
    </div>
  );
};

export default ContactForm;
