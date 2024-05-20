import React, { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
function Countrydetails(){
    var {cname} = useParams();   
    var [details,setDetails]=useState()
    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/alpha/${cname}`).then(res=>{
            setDetails({...res.data[0]})
           
        })
    },[cname])
    console.log(details)
    return <div align="center" className="border border-2 border-info">
        <h1>Name: {details?.name.common}</h1>
        <img src={details?.flags.png} width="200px" />
        <h3>Capital:{details?.capital}</h3>
        <h2>Population:{details?.population}</h2>
    </div>
}
export default Countrydetails