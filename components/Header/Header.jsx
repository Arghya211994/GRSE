import React, { useState } from 'react'
import styles from './Header.module.css'
import { BiSearch } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'

const Header = () => {

  const [dropdown1, setDropdown1] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)
  const [dropdown3, setDropdown3] = useState(false)
  const [dropdown4, setDropdown4] = useState(false)
  const [dropdown5, setDropdown5] = useState(false)
  const [dropdown6, setDropdown6] = useState(false)
  const [dropdown7, setDropdown7] = useState(false)
  const [dropdown8, setDropdown8] = useState(false)
  const [dropdown9, setDropdown9] = useState(false)

  return (
    <>
      <nav className={styles.nav}>
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
              <p>A</p>
              <p>A</p>
              <p>A</p>
            </div>

            <div>
              <p>A+</p>
              <p>A</p>
              <p>A-</p>
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
            <p>GARDEN REACH SHIPBUILDERS AND ENGINEERS LIMITED</p>
            <p>A GOVERNMENT OF INDIA UNDERTAKING - MINISTRY OF DEFENCE</p>
            <p>"AN ISO 9001:2015 CERTIFIED COMPANY"</p>
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

      <nav className={styles.sub_header_two}>
        <div className={styles.inner_sub_header_two}>
          <div className={styles.home_icon}>
            <AiFillHome />
          </div>

          <div 
          className={styles.active} 
          onMouseEnter={() => setDropdown1(true)} 
          onMouseLeave={() => setDropdown1(false)}>
            <p>About Us</p>
            <div>
              <BiChevronDown />
            </div>

            {
              dropdown1 && <div className={styles.dropdown}>
                <div>
                  <p className={styles.dropdown_active}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p>Engineering</p>
                </div>

                <div>
                  <p>Engine</p>
                </div>

                <div>
                  <p>Technical Training Center</p>
                </div>

                <div>
                  <p>Engineering</p>
                </div>

                <div>
                  <p>Engine</p>
                </div>

                <div>
                  <p>Technical Training Center</p>
                </div>

              </div>
            }

          </div>

          <div className={styles.active}
          onMouseEnter={() => setDropdown2(true)} 
          onMouseLeave={() => setDropdown2(false)}
          >
            <p>Product Profile</p>
            <div>
              <BiChevronDown />
            </div>

            {
              dropdown2 && <div className={styles.dropdown}>
                <div>
                  <p className={styles.dropdown_active}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p>Engineering</p>
                </div>

                <div>
                  <p>Technical Training Center</p>
                </div>

              </div>
            }
          </div>

          <div
           onMouseEnter={() => setDropdown3(true)} 
           onMouseLeave={() => setDropdown3(false)}
          >
            <p>Infrastructure</p>
            <div>
              <BiChevronDown />
            </div>

            {
              dropdown3 && <div className={styles.dropdown}>
                <div>
                  <p className={styles.dropdown_active}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p>Engineering</p>
                </div>

                <div>
                  <p>Engine</p>
                </div>

                <div>
                  <p>Technical Training Center</p>
                </div>

              </div>
            }
          </div>

          <div
           onMouseEnter={() => setDropdown4(true)} 
           onMouseLeave={() => setDropdown4(false)}
          >
            <p>Achievements</p>
            <div>
              <BiChevronDown />
            </div>

            {
              dropdown4 && <div className={styles.dropdown}>
                <div>
                  <p className={styles.dropdown_active}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p>Engineering</p>
                </div>

                <div>
                  <p>Engine</p>
                </div>

                <div>
                  <p>Technical Training Center</p>
                </div>

              </div>
            }
          </div>

          <div
           onMouseEnter={() => setDropdown5(true)} 
           onMouseLeave={() => setDropdown5(false)}
          >
            <p>News Room</p>
            <div>
              <BiChevronDown />
            </div>

            {
              dropdown5 && <div className={styles.dropdown}>
                <div>
                  <p className={styles.dropdown_active}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p>Engineering</p>
                </div>

                <div>
                  <p>Technical Training Center</p>
                </div>

              </div>
            }
          </div>

          <div
           onMouseEnter={() => setDropdown6(true)} 
           onMouseLeave={() => setDropdown6(false)}
          >
            <p>Investor's Corner</p>
            <div>
              <BiChevronDown />
            </div>

            {
              dropdown6 && <div className={styles.dropdown}>
                <div>
                  <p className={styles.dropdown_active}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p>Engineering</p>
                </div>

                <div>
                  <p>Engine</p>
                </div>

                <div>
                  <p>Technical Training Center</p>
                </div>


                <div>
                  <p>Engineering</p>
                </div>

                <div>
                  <p>Engine</p>
                </div>

                <div>
                  <p>Technical Training Center</p>
                </div>

              </div>
            }
          </div>

          <div
           onMouseEnter={() => setDropdown7(true)} 
           onMouseLeave={() => setDropdown7(false)}
          >
            <p>Public Grievances</p>
            <div>
              <BiChevronDown />
            </div>

            {
              dropdown7 && <div className={styles.dropdown}>
                <div>
                  <p className={styles.dropdown_active}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p>Engineering</p>
                </div>

                <div>
                  <p>Engine</p>
                </div>

                <div>
                  <p>Technical Training Center</p>
                </div>

              </div>
            }
          </div>

          <div
           onMouseEnter={() => setDropdown8(true)} 
           onMouseLeave={() => setDropdown8(false)}
          >
            <p>CSR</p>
            <div>
              <BiChevronDown />
            </div>

            {
              dropdown8 && <div className={styles.dropdown}>
                <div>
                  <p className={styles.dropdown_active}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p>Engineering</p>
                </div>

                <div>
                  <p>Engine</p>
                </div>

                <div>
                  <p>Technical Training Center</p>
                </div>

              </div>
            }
          </div>

          <div
           onMouseEnter={() => setDropdown9(true)} 
           onMouseLeave={() => setDropdown9(false)}
          >
            <p>Contact Us</p>
            <div>
              <BiChevronDown />
            </div>

            {
              dropdown9 && <div className={styles.dropdown}>
                <div>
                  <p className={styles.dropdown_active}>Shipbuilding & Repair</p>
                </div>

                <div>
                  <p>Engineering</p>
                </div>

                <div>
                  <p>Engine</p>
                </div>

                <div>
                  <p>Technical Training Center</p>
                </div>

              </div>
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header