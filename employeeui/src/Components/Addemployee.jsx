import axios from 'axios'
import React, { useState } from 'react'
import EmployeeHeader from './EmployeeHeader'

const Addemployee = () => {
    const apiUrl = "http://localhost:5000/register "
    const [input,setInput]=useState({})

    const changeMyData=(event)=>{
        setInput({
            ...input,[event.target.name]:event.target.value
        })
    }
    const buttonClickEvent=()=>{
        console.log(input)
        axios.post(apiUrl,input).then(
            (response)=>{
                console.log(response.data)
            }
        )
    }
  return (
    <div>
        <EmployeeHeader/>
        <h1>ADD EMPLOYEE DETAILS</h1>

        <div className="container"g-3>
            <div className="row" g-3>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">User Name</label>
                    <input name='username' type="text" className="form-control" onChange={changeMyData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">email</label>
                    <input name='email' type="text" className="form-control" onChange={changeMyData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">phone</label>
                    <input name='phone' type="number" className="form-control" onChange={changeMyData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">position</label>
                    <input name='position' type="text" className="form-control" onChange={changeMyData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">salary</label>
                    <input name='salary' type="number" className="form-control" onChange={changeMyData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button href="./Viewemployee" onClick={buttonClickEvent} className="btn-warning">ADD</button>
                   
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Addemployee