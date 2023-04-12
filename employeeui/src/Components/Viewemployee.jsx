
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EmployeeHeader from './EmployeeHeader';

 const Viewemployee = () => {
  const apiUrl = "http://localhost:5000/viewall";
  const deleteApi = "http://localhost:5000/deleteEmployee"

  const [visible, setVisible] = useState(true)
  const [data, setData] = useState([])
  const [userToken, setToken] = useState(sessionStorage.getItem("userToken"))

  useEffect(() => {
    let role = sessionStorage.getItem("role")
    if (role === 'item') {
      setVisible(false)
    }
    else {
      setVisible(true)
    }
    axios.post(apiUrl, { "token": userToken }).then(
      (response) => {
        setData(response.data)
      }
    )
  }, [userToken]) 

  const clickDelete = (event) => {
    event.persist();
    const element = {
      "_id": event.target.value,
      "token": userToken
    }
    console.log(element)
    axios.post(deleteApi, element)
      .then(response => {
        console.log(response)
        if (response.data.status === 'Deleted Successfully') {
          window.location.reload(true)
        }
      })
  }

  return (
    <div>
      <EmployeeHeader visible={visible} />
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
            <th scope="col"></th>
            <th scope="col"></th>
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
              <td><button className="btn btn-warning">UPDATE</button></td>
              <td><button className='btn btn-danger' value={item._id} onClick={clickDelete}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <form action='./add'>
          <button type="submit" className="btn btn-primary">ADD EMPLOYEE</button>
        </form>
      </div>

      <form action='./'>
        <button type="submit" className="btn btn-primary">LOG OUT</button>
      </form>
    </div>
  );
};

export default Viewemployee;

