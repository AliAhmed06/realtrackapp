import axios from 'axios'
import React from 'react'
import LeadsTable from './LeadsTable';


const getData = async () => {
    const resposne = await axios.get(`${process.env.DOMAIN}api/contacts`);
    return resposne.data.contacts;

    // let response = await fetch(`${process.env.DOMAIN}api/contacts`, { next: { revalidate: 1 } });
    // response = await response.json();
    // return response.contacts;
}

const LeadsPage = async () => {
    const data = await getData();
    // console.log("ali", data);
  return (
    <div className="min-h-[500px] w-full flex items-center justify-center text-black py-10 overflow-hidden   ">
    <LeadsTable data={data} />
  </div>
  )
}

export default LeadsPage