import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewOnly = () => {
const apiUrl = "http://localhost:5000/viewall";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.post(apiUrl) 
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item Id</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Position</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.position}</td>
              <td>{item.salary}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
        <form action="./">
        <button className="btn btn-primary">LOG OUT</button>
        </form>
      
    </div>
  )
}

export default ViewOnly