import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

function Navbar() {

    const navref=useRef()
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY >=80){
                navref.current.classList.add('nav-dark')
            }else{
                navref.current.classList.remove('nav-dark')
            }
        })
    },[])
    return (
        <div ref={navref}  className='navbar'>
            <div className="navbar-left">
                <img src={logo} alt='' />
                <ul>
                    <li>Home</li>
                    <li>TV show</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>MY list</li>
                    <li>Browse by Language</li>

                </ul>
            </div>
            <div className="navbar-right">
                <img src={search} alt="" className='icon' />
                <p>Children</p>
                <img src={bell_icon} alt="" className='icon' />
                <div className="navbar-profile">
                    <img src={profile_img} alt="" className='profile' />
                    <img src={caret_icon} alt="" />
                    <div className="dropdown">
                        <p onClick={()=>{logout()}}>Sign out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
