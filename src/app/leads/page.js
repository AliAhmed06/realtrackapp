import axios from "axios";
import Link from "next/link";
import React from "react";

const getData = async () => {
  let response = await  axios.get("/api/contacts");
  // let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
//   response = await response.json();
  // response = response.meals;
  return response.data.contacts;
};

const page = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="min-h-[500px] w-full flex items-center justify-center text-white py-10 overflow-hidden">
      <div className="w-[80%] overflow-auto border border-white">
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
            {/* {data?.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.message}</td>                
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;