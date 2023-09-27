import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Mentor() {
  const [allMentor,setAllMentor]=useState([]);
  useEffect(()=>{
    fetchAllMentor();
  },[])
  const fetchAllMentor=()=>{
    fetch(`http://localhost:4000/mentor/`,{
      headers:{
        "Authorization":localStorage.getItem("token")
      }
    }).then(res=>res.json()).then((res)=>{
      if(res.message){
        alert(`${res.message}`)
      }else{
        setAllMentor(res)
        // console.log(res)
      }
    }).catch(err=>console.log(err))
  }
  return (
    <div>
      {
        allMentor.length > 0 ?
        <table style={{width:"85%",textAlign:"center",margin:'auto',marginTop:"20px",boxShadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
        <thead style={{border:'1px solid',padding:"7px",fontSize:"18px"}}>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
              allMentor.map((el,ind)=>{
                return <tr key={ind+1} style={{border:'1px solid',padding:"7px"}}>
                  <td><img style={{width:"100px",height:"100px",margin:'auto'}} src={el.images}/></td>
                  <td>{el.name}</td>
                  <td><Link to={`${el._id}`}>Book Appointment</Link></td>
                </tr>
              })
            }
        </tbody>
      </table> : <h1 style={{textAlign:"center",color:"red",fontSize:"40px",marginTop:"40px"}}>No, mentor found</h1>
      }
    </div>
  )
}
