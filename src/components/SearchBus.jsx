import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'


const SearchBus = () => {
    const [data, changeData] = useState(
        {
            "bname": ""
        }
    )
    const [result, changeResult] = useState([])
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }

    const deleteBus = (id)=>{
        let input = {"_id": id}
        axios.post("http://localhost:8080/delete",input).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("Deleted Successfully")
                    }
                else{
                    alert("Failed")
                }
            }
        ).catch().finally()
    }


    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                console.log(response.data)
                changeResult(response.data) 
            }
        ).catch(
            (error)=>{
                alert(error)
            }
        ).finally()
    }
    return (
        <div>
            <div className="container">
                <Navbar/>
                <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Bus Name</label>
                            <input type="text" className="form-control" name='bname' value={data.bname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Search</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Index</th>
                                        <th scope="col">Bus Name</th>
                                        <th scope="col">Route</th>
                                        <th scope="col">Bus No</th>
                                        <th scope="col">Driver Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th scope="row">{index}</th>
                                            <td>{value.bname}</td>
                                            <td>{value.route}</td>
                                            <td>{value.busno}</td>
                                            <td>{value.drivername}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={()=>{deleteBus(value._id)}}>Delete</button>
                                            </td>
                                        </tr>
                                        }
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBus