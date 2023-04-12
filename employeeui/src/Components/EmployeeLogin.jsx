import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EmployeeHeader from './EmployeeHeader';

export const EmployeeLogin = () => {
  const [input,setInput] = useState({})

  const navigate = useNavigate()

  const apiUrl ="http://localhost:5000/employeeLogin"

  
  const changeData = (event) =>{

    setInput({
      ...input,[event.target.name]:event.target.value
    })
  }

  const clickLogin = ()=>{
  
    axios.post(apiUrl,input)
    .then(response =>{
        console.log(response)
        alert(response.data.msg)
        if (response.data.msg === "login successful") {


          navigate("/viewonly")


        } else {
          alert("Invalid Credentials")
        }
    })
  }

  return (

    <div>
    <EmployeeHeader/>
    <h1>EMPLOYEE LOGIN</h1>
    <div className="container">
      <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="" className="form-label"> Email ID </label>
          <input name='email' type="text" className="form-control" onChange={changeData} />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label"> Password </label>
          <input name='phone' type="number" className="form-control" onChange={changeData} />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <button onClick={clickLogin}  className="btn btn-primary"> LOGIN </button>
        </div>
       
      </div>
    </div>
  </div>

  );
};

export default EmployeeLogin;
