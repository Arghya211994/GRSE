import React, { useContext } from 'react'
import styles from './Footer.module.css'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { FontContext } from '@/Context/FontContext'

const Footer = () => {

  const {size} = useContext(FontContext)

  //fontpart
  const fontSize1 = `calc(${size}px + 6px)`
  const fontSize2 = size
  const fontSize3 = `calc(${size}px - 2px)`
  return (
    <>
      <main className={styles.container}>
        <div className={styles.content}>
          <div>
            <p style={{fontSize:fontSize1}}>Legal</p>

            <div style={{fontSize:fontSize2}}>
              <p>Terms & Conditions</p>
              <p>Hyper Linking Policy</p>
              <p>Copyright Policy</p>
              <p>Privacy Policy</p>
              <p>Security Policy</p>
              <p>Disclaimer Policy</p>
            </div>

            <p style={{fontSize:fontSize1}}>Social Media</p>

            <div className={styles.socialmedia}>
              <span><img src="https://www.grse.in/social-icons/facebook.png" alt="" /></span>
              <span><img src="https://www.grse.in/social-icons/instagram.png" alt="" /></span>
              <span><img src="https://www.grse.in/social-icons/youtube.png" alt="" /></span>
              <span><img src="https://www.grse.in/social-icons/twitter.png" alt="" /></span>
              <span><img src="https://www.grse.in/social-icons/linkedin.png" alt="" /></span>
            </div>
          </div>

          <div>
            <p style={{fontSize:fontSize1}}>Quick Links</p>

            <div style={{fontSize:fontSize2}}>
              <p>Terms & Conditions</p>
              <p>Hyper Linking Policy</p>
              <p>Copyright Policy</p>
              <p>Privacy Policy</p>
              <p>Security Policy</p>
              <p>Disclaimer Policy</p>
              <p>Security Policy</p>
            </div>

          </div>

          <div>
            <p style={{fontSize:fontSize1}}>Other Links</p>

            <div style={{fontSize:fontSize2}}>
              <p>Terms & Conditions</p>
              <p>Hyper Linking Policy</p>
              <p>Copyright Policy</p>
              <p>Privacy Policy</p>
              <p>Security Policy</p>
              <p>Disclaimer Policy</p>
              <p>Security Policy</p>
            </div>

            <p style={{fontSize:fontSize1}}>Employee Corner</p>

            <p style={{fontSize:fontSize2}}>Higher Pension Scheme</p>

          </div>

          <div>
            <p style={{fontSize:fontSize1}}>Go To</p>

            <div>
              <div><img src="https://www.grse.in/wp-content/uploads/2022/05/IIG.png" alt="imag1" /></div>
              <div><img src="https://www.grse.in/wp-content/uploads/2022/05/national-portal.gif" alt="imag1" /></div>
              <div><img src="https://www.grse.in/wp-content/uploads/2022/05/img3.jpg" alt="imag1" /></div>
              <div><img src="https://www.grse.in/wp-content/uploads/2022/05/mod_sites.png" alt="imag1" /></div>
              <div><img src="https://www.grse.in/wp-content/uploads/2022/05/logo_nvsp.jpg" alt="imag1" /></div>
            </div>
          </div>

        </div>
      </main>

      <main className={styles.container2}>
        <div className={styles.content2}>
          <div>
            <div><img src="https://www.grse.in/wp-content/uploads/2022/06/download.png" alt="img1" /></div>
            <div><img src="https://www.grse.in/wp-content/uploads/2022/06/wcag2A.png" alt="img2" /></div>
          </div>

          <p style={{fontSize:fontSize3}}>Copyright © 2023 - All Rights Reserved - Official website of Garden Reach
            Shipbuilders and Engineers Limited - A Government of India undertaking,
            Ministry of Defence 
          </p>

          <p style={{fontSize:fontSize3}}>Last Modified: June 09, 2023 @ 04:53 am.</p>
        </div>
      </main>
    </>
  )
}

export default Footer