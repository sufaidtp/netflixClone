import React from 'react'
import './Footer.css'
import youtube_icon from "../../assets/youtube_icon.png"
import twitter_icon from "../../assets/twitter_icon.png"
import instagram_icon from "../../assets/instagram_icon.png"
import facebook_icon from "../../assets/facebook_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Dscription</li>
        <li>Help center</li>
        <li>Gift cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Tearms Of Use</li>
        <li> Privacy</li>
        <li>Leagal Notices</li>
        <li>Cookie Preference</li>
        <li>Corporate Information</li>
        <li> Contact</li>
      </ul>
      <p className='copyright-text'>1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
