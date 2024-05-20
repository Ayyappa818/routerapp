import React, { useEffect, useState } from "react";
import axios from "axios"
import {Link, Outlet} from "react-router-dom"

function Countrys(){
    var[country,setCountry]=useState();
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all").then(res=>{
        
            setCountry([...res.data])})
    },[])
    return <div className="d-flex">
        <div>
        <h1>Countries</h1>
        {
            country?.map((s)=>{
        
                return <li>
                    <Link to={`countrydet/${s.cca3}`}>{s.name.common}</Link>
            
                    </li>
    
            })
        }
        </div>
    <div><Outlet></Outlet></div>
    </div>
}
export default Countrys