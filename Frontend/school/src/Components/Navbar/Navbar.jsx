import React, { useEffect, useState } from 'react'
import home from '../../assets/images/home.png'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import {
    MenuList,
    MenuItem,
    Menu, MenuButton, Portal

} from '@chakra-ui/react'
export default function Navbar() {
    const [state,setState]=useState(false);
    useEffect(()=>{
        if(localStorage.getItem("token")){
            setState(true)
        }
    },[localStorage.getItem("token")])
    const logoutFunc=()=>{
        localStorage.removeItem("token")
        setState(false)
    }
    return (
        <div>
            <div className={style.navbar} style={{ display: "flex", justifyContent: "space-between", padding: '10px 100px',gap:"30px" }}>
                <Link to='/'>
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", alignItems: "center", fontSize: '18px', fontWeight: "800" }}>
                            <img style={{ height: "40px", width: "40px", minWidth: "40px", maxWidth: "40px", minHeight: "40px", maxHeight: '40px', borderRadius: "20px" }} src={home} /> <h2>MR</h2>
                        </div>
                        <div className={style.homeIcon}>
                            <p style={{ paddingTop: "7px", fontSize: "12px" }}> Part of times <br /> Higher Education</p>
                        </div>
                    </div>
                </Link>
                <div className={style.link} style={{ display: "flex", gap: "100px", alignItems: 'center' }}>
                    <Link>Learn</Link>
                    <Link to='/mentors'>Mentors</Link>
                    <Link>Compete</Link>
                    <Link>Jobs</Link>
                </div>
                <div style={{ display: "flex", alignItems: 'center' }}>
                    
                        {
                            state ?
                             <button onClick={logoutFunc}>Logout</button>
                            : 
                            <Menu>
                            <MenuButton >
                            Login / Signup
                        </MenuButton>
                        <Portal>
                            <MenuList>
                                <Link to='/studentlogin'><MenuItem fontSize={13}>Student login</MenuItem></Link>
                                <Link to='/companylogin'><MenuItem fontSize={13}>Company login</MenuItem></Link>
                            </MenuList>
                        </Portal>
                        </Menu>
                        }
                    
                </div>
            </div>
        </div>
    )
}
