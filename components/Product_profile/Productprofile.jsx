import React, { useContext } from 'react'
import styles from './Productprofile.module.css'
import {FaGavel,FaLeaf,FaWheelchair,FaRegCopy,FaShip,FaUserFriends,FaGlobeAmericas,FaTrophy} from 'react-icons/fa'
import { ThemeContext } from '@/Context/ThemeContext'
import { FontContext } from '@/Context/FontContext'

const Productprofile = () => {

  const {themeVariables} = useContext(ThemeContext)

  const {size} = useContext(FontContext)

  //fontsize part
  const fontSize1 = `calc(${size}px + 4px)`
  const fontSize2 = `calc(${size}px + 2px)`
  const fontSize3 = size

  return (
    <>
    <main className={styles.container}
    style={{backgroundColor:themeVariables.backgroundColor2}}
    >
        <p style={{color:themeVariables.color,fontSize:fontSize1}}>Product Profile</p>
        <div className={styles.main_content}>
            <div>
                <img src="https://www.grse.in/grse-media/Shipbuilding03.JPG?fit=500%2C200&ssl=1" alt="" />
                <p style={{color:themeVariables.color,fontSize:fontSize2}}>Shipbuilding</p>
            </div>

            <div>
                <img src="https://www.grse.in/grse-media/Engineering03.JPG?fit=500%2C200&ssl=1" alt="" />
                <p style={{color:themeVariables.color,fontSize:fontSize2}}>Engineering</p>
            </div>

            <div>
                <img src="https://www.grse.in/i0.wp.com/grse.in/wp-content/uploads/2022/04/rsz_1vlcsnap-2018-10-09-13h39m24s1385d39.png?fit=500%2C200&ssl=1" alt="" />
                <p style={{color:themeVariables.color,fontSize:fontSize2}}>Engine</p>
            </div>
        </div>
    </main>

    <main className={styles.container2}
    style={{backgroundColor:themeVariables.backgroundColor2}}
    >
        <div className={styles.main_content2}
        style={{fontSize:fontSize3}}
        >
            <div className={styles.item1}
            style={{boxShadow:themeVariables.boxShadow}}
            >
                <div>
                    <FaGavel/>
                </div>
                <p>TENDER</p>
            </div>

            <div className={styles.item2}
            style={{boxShadow:themeVariables.boxShadow}}>
                <div>
                <FaLeaf/>
                </div>
                <p>GREEN INITIATIVES</p>
            </div>

            <div className={styles.item3}
            style={{boxShadow:themeVariables.boxShadow}}>
                <div>
                <FaWheelchair/>
                </div>
                <p>RETIREMENT</p>
            </div>

            <div className={styles.item4}
            style={{boxShadow:themeVariables.boxShadow}}> 
                <div>
                <FaRegCopy/>
                </div>
                <p>RTI</p>
            </div>

            <div className={styles.item5}
            style={{boxShadow:themeVariables.boxShadow}}
            >
                <div>
                <FaShip/>
                </div>
                <p>GAINS 2023</p>
            </div>

            <div className={styles.item6}
            style={{boxShadow:themeVariables.boxShadow}}>
                <div>
                <FaUserFriends/>
                </div>
                <p>VENDOR</p>
            </div>

            <div className={styles.item7}
            style={{boxShadow:themeVariables.boxShadow}}>
                <div>
                <FaGlobeAmericas/>
                </div>
                <p>OL IMPLEMENTATION</p>
            </div>

            <div className={styles.item8}
            style={{boxShadow:themeVariables.boxShadow}}>
                <div>
                <FaTrophy/>
                </div>
                <p>AWARDS</p>
            </div>
        </div>
    </main>
    </>
  )
}

export default Productprofile