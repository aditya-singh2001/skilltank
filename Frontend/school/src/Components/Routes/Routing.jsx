import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Signin from '../Signin/Signin'
import Mentor from '../Mentor/Mentor'
import LandingPage from '../LandingPage/LandingPage'
export default function Routing() {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
        <Route path='/' element={<><Navbar/><LandingPage/></>}/>
        <Route path='/studentlogin' element={<><Navbar/><Signin/></>}/>
        <Route path='/companylogin' element={<><Navbar/><Signin/></>}/>
        <Route path='/mentors' element={<><Navbar/><Mentor/></>}/>
    </Routes>
    </>
  )
}
