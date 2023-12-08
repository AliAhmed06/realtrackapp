"use client";

const LeadsTable = ({data}) => {
  return (
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
  )
}

export default LeadsTable