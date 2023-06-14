import React, { useState,useContext } from 'react'
import styles from './Header.module.css'
import { BiSearch } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'

import { ThemeContext
 } from '@/Context/ThemeContext'
import { FontContext } from '@/Context/FontContext'

const Header = () => {

  const [dropdown1, setDropdown1] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)
  const [dropdown3, setDropdown3] = useState(false)
  const [dropdown4, setDropdown4] = useState(false)
  const [dropdown5, setDropdown5] = useState(false)
  const [dropdown6, setDropdown6] = useState(false)
  const [dropdown7, setDropdown7] = useState(false)
  const [dropdown8, setDropdown8] = useState(false)

  const { theme, changeToLightTheme, changeToDarkTheme, themeVariables} = useContext(ThemeContext);
  const {size, increase, normal , decrease} = useContext(FontContext)

  //for sub-header
  const font_sub_header1 = `calc(${size}px + 3px)`
  const font_sub_header2 = `calc(${size}px - 3px)`
  //for dropdown header
  const fontSizenew = `calc(${size}px - 2px)`

 
  return (
    <>
      <nav className={styles.nav} 
      style={{
        backgroundColor: themeVariables.backgroundColor,
        fontSize:`${size}px`
      }}
      >
        <div className={styles.inner_nav}>
          <div className={styles.div_one}>
            <p>Screen Reader Access</p>
            <div></div>
            <p>Skip to Main Content</p>
          </div>

          <div className={styles.div_two}>
            <p>English</p>
            <div></div>
            <p>हिंदी</p>
          </div>

          <div className={styles.div_three}>
            <div>
              <p 
              style={{cursor:"pointer"}}
              onClick={changeToLightTheme}
              >A</p>
              <p
              style={{cursor:"pointer"}}
              onClick={changeToDarkTheme}
              >A</p>
            </div>

            <div>
              <p onClick={increase}
              style={{cursor:"pointer"}}
              >A+</p>
              <p onClick={normal}
              style={{cursor:"pointer"}}
              >A</p>
              <p onClick={decrease}
              style={{cursor:"pointer"}}
              >A-</p>
            </div>
          </div>

          <div className={styles.div_four}>
            <div className={styles.search}>
              <input type="text" placeholder='Search' />
              <div>
                <BiSearch />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className={styles.sub_header}>
        <div className={styles.sub_left}>
          <div>
            <img src="https://www.grse.in/wp-content/uploads/2022/04/logo-new.png" alt="logo" />
          </div>

          <div>
            <p style={{fontSize:font_sub_header1}}>GARDEN REACH SHIPBUILDERS AND ENGINEERS LIMITED</p>
            <p style={{fontSize:font_sub_header2}}>A GOVERNMENT OF INDIA UNDERTAKING - MINISTRY OF DEFENCE</p>
            <p style={{fontSize:font_sub_header2}}>"AN ISO 9001:2015 CERTIFIED COMPANY"</p>
          </div>
        </div>


        <div className={styles.sub_right}>
          <div>
            <img src="https://www.grse.in/social-icons/Ask-Anvesha-Logo.jpg" alt="" />
          </div>

          <div>
            <img src="https://www.grse.in/social-icons/Azadi-Ka-Amrit-Mahotsav.jpg" alt="" />
          </div>

          <div>
            <img src="https://www.grse.in/social-icons/GAINS_LOGO.png" alt="" />
          </div>

          <div>
            <img src="https://www.grse.in/social-icons/Online-Vendor-Regn.jpg" alt="" />
          </div>

          <div>
            <img src="https://www.grse.in/social-icons/TUV-ISO14001.jpg" alt="" />
          </div>
        </div>
      </nav>

      <nav className={styles.sub_header_two}
      style={{backgroundColor:themeVariables.backgroundColor}}
      >
        <div className={styles.inner_sub_header_two}>
          <div className={styles.home_icon}>
            <AiFillHome />
          </div>

          <div 
          onMouseEnter={() => setDropdown1(true)} 
          onMouseLeave={() => setDropdown1(false)}
          className={styles.content_box}
          >
            <p style={{fontSize:fontSizenew}}>About Us</p>
            <div className={styles.chevron_color}>
              <BiChevronDown />
            </div>

            {
              dropdown1 && <div className={styles.dropdown}>
                <div>
                  <p style={{background:"#058be4",fontSize:fontSizenew}}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engineering</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engine</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Technical Training Center</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engineering</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engine</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Technical Training Center</p>
                </div>

              </div>
            }

          </div>

          <div
          onMouseEnter={() => setDropdown2(true)} 
          onMouseLeave={() => setDropdown2(false)}
          className={styles.content_box}
          >
            <p style={{fontSize:fontSizenew}}>Product Profile</p>
            <div className={styles.chevron_color}>
              <BiChevronDown />
            </div>

            {
              dropdown2 && <div className={styles.dropdown}>
                <div>
                  <p style={{fontSize:fontSizenew}}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engineering</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Technical Training Center</p>
                </div>

              </div>
            }
          </div>

          <div
           onMouseEnter={() => setDropdown3(true)} 
           onMouseLeave={() => setDropdown3(false)}
           className={styles.content_box}
          >
            <p style={{fontSize:fontSizenew}}>Infrastructure</p>
            <div className={styles.chevron_color}>
              <BiChevronDown />
            </div>

            {
              dropdown3 && <div className={styles.dropdown}>
                <div>
                  <p style={{fontSize:fontSizenew}}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engineering</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engine</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Technical Training Center</p>
                </div>

              </div>
            }
          </div>

          <div
           onMouseEnter={() => setDropdown4(true)} 
           onMouseLeave={() => setDropdown4(false)}
           className={styles.content_box}
          >
            <p style={{fontSize:fontSizenew}}>Achievements</p>
            <div className={styles.chevron_color}>
              <BiChevronDown />
            </div>

            {
              dropdown4 && <div className={styles.dropdown}>
                <div>
                  <p style={{fontSize:fontSizenew}}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engineering</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engine</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Technical Training Center</p>
                </div>

              </div>
            }
          </div>

          <div
           onMouseEnter={() => setDropdown5(true)} 
           onMouseLeave={() => setDropdown5(false)}
           className={styles.content_box}
          >
            <p style={{fontSize:fontSizenew}}>News Room</p>
            <div className={styles.chevron_color}>
              <BiChevronDown />
            </div>

            {
              dropdown5 && <div className={styles.dropdown}>
                <div>
                  <p style={{fontSize:fontSizenew}}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engineering</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Technical Training Center</p>
                </div>

              </div>
            }
          </div>

          <div
           onMouseEnter={() => setDropdown6(true)} 
           onMouseLeave={() => setDropdown6(false)}
           className={styles.content_box}
          >
            <p style={{fontSize:fontSizenew}}>Investor's Corner</p>
            <div className={styles.chevron_color}>
              <BiChevronDown />
            </div>

            {
              dropdown6 && <div className={styles.dropdown}>
                <div>
                  <p style={{fontSize:fontSizenew}}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engineering</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engine</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Technical Training Center</p>
                </div>


                <div>
                  <p style={{fontSize:fontSizenew}}>Engineering</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engine</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Technical Training Center</p>
                </div>

              </div>
            }
          </div>

          <div
           onMouseEnter={() => setDropdown7(true)} 
           onMouseLeave={() => setDropdown7(false)}
           className={styles.content_box}
          >
            <p style={{fontSize:fontSizenew}}>Public Grievances</p>
            <div className={styles.chevron_color}>
              <BiChevronDown />
            </div>

            {
              dropdown7 && <div className={styles.dropdown}>
                <div>
                  <p style={{fontSize:fontSizenew}}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engineering</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engine</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Technical Training Center</p>
                </div>

              </div>
            }
          </div>

          <div
           onMouseEnter={() => setDropdown8(true)} 
           onMouseLeave={() => setDropdown8(false)}
           className={styles.content_box}
          >
            <p style={{fontSize:fontSizenew}}>CSR</p>
            <div className={styles.chevron_color}>
              <BiChevronDown />
            </div>

            {
              dropdown8 && <div className={styles.dropdown}>
                <div>
                  <p style={{fontSize:fontSizenew}}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engineering</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Engine</p>
                </div>

                <div>
                  <p style={{fontSize:fontSizenew}}>Technical Training Center</p>
                </div>

              </div>
            }
          </div>

          <p className={styles.contact} style={{fontSize:fontSizenew}}>Contact Us</p>
        </div>
      </nav>
    </>
  )
}

export default Header