import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateEmployee = () => {
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [location,setLocation] = useState('')
    const [position,setPosition] = useState('')
    const [salary,setSalary] = useState('')
    const [_id,setId] = useState(null)
    console.log("first")
    console.log(_id)

    const [userToken,settoken] = useState(sessionStorage.getItem("userToken"))


    const apiUrl="http://localhost:5000/update"

    useEffect(() =>{
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
        setLocation(localStorage.getItem("location"))
        setPosition(localStorage.getItem("position"))
        setSalary(localStorage.getItem("salary"))
        setId(localStorage.getItem("_id"))
        console.log("inside useeffect")
        // console.log(_id)
    },[])

    const setdatatoApi = ()=>{
        const employeeData = {
            "_id": _id,
            "name" : name,
            "email": email,
            "location" : location,
            "position" : position,
            "salary" : salary,
            "token": userToken
        }
        axios.post(apiUrl,employeeData)
        .then(response =>{
            if(response.data.status === 'Data Updated'){
                console.log("inside axios")
                navigate('/')
            }
            else{
                alert("Update Failed")
            }
        })
    }

  return (
    <div>
        <div className="container ">
            <div className="row g-3" style={{margin: "40px 10px 0 10px"}}>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3 position-absolute top-50 start-50 translate-middle">
                        <div className="col-12">
                            <label htmlFor="" className='form-label'>NAME</label>
                            <input name='username' type="text"  className="form-control" />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="" className='form-label'>EMAIL</label>
                            <input name='email' type="email"  className="form-control"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="" className='form-label'>Phone NO</label>
                            <input name='phone' type="text"  className="form-control"  />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="" className='form-label'>POSITION</label>
                            <input name='position' type="text"  className="form-control"  />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="" className='form-label'>SALARY</label>
                            <input name='salary' type="text"  className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onclick={setdatatoApi} className="btn btn-warning"> UPDATE </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateEmployee