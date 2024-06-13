import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewBus = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8080/view",data).then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <div className="container">
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
                                {data.map(
                                    (value,index)=>{
                                        return <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{value.bname}</td>
                                        <td>{value.route}</td>
                                        <td>{value.busno}</td>
                                        <td>{value.drivername}</td>
                                    </tr>
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBus