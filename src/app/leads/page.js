"use client";
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const LeadsPage = () => {
  const [data, setData] = useState([]);
  
  async function getData (){
    const resposne = await axios.get(`/api/contacts`);
    // return resposne.data.contacts;
    setData(resposne.data.contacts);
  }
  useEffect(() => {
    getData();
  }, [])
  
  console.log(data);
  return (
    <div className="min-h-[500px] w-full flex items-center justify-center text-black py-10 overflow-hidden   ">
    <div className="overflow-auto border border-black">
      <table className="table">
        <thead>
          <tr className="">
            <th>Name</th>
            <th>Email</th>
            <th>phone</th>
            <th>Message</th>                    
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.message}</td>              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default LeadsPage