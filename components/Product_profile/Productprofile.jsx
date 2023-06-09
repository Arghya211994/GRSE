import React from 'react'
import styles from './Productprofile.module.css'
import {FaGavel,FaLeaf,FaWheelchair,FaRegCopy,FaShip,FaUserFriends,FaGlobeAmericas,FaTrophy} from 'react-icons/fa'

const Productprofile = () => {
  return (
    <>
    <main className={styles.container}>
        <p>Product Profile</p>
        <div className={styles.main_content}>
            <div>
                <img src="https://www.grse.in/grse-media/Shipbuilding03.JPG?fit=500%2C200&ssl=1" alt="" />
                <p>Shipbuilding</p>
            </div>

            <div>
                <img src="https://www.grse.in/grse-media/Engineering03.JPG?fit=500%2C200&ssl=1" alt="" />
                <p>Engineering</p>
            </div>

            <div>
                <img src="https://www.grse.in/i0.wp.com/grse.in/wp-content/uploads/2022/04/rsz_1vlcsnap-2018-10-09-13h39m24s1385d39.png?fit=500%2C200&ssl=1" alt="" />
                <p>Engine</p>
            </div>
        </div>
    </main>

    <main className={styles.container2}>
        <div className={styles.main_content2}>
            <div className={styles.item1}>
                <div>
                    <FaGavel/>
                </div>
                <p>TENDER</p>
            </div>

            <div className={styles.item2}>
                <div>
                <FaLeaf/>
                </div>
                <p>GREEN INITIATIVES</p>
            </div>

            <div className={styles.item3}>
                <div>
                <FaWheelchair/>
                </div>
                <p>RETIREMENT</p>
            </div>

            <div className={styles.item4}> 
                <div>
                <FaRegCopy/>
                </div>
                <p>RTI</p>
            </div>

            <div className={styles.item5}>
                <div>
                <FaShip/>
                </div>
                <p>GAINS 2023</p>
            </div>

            <div className={styles.item6}>
                <div>
                <FaUserFriends/>
                </div>
                <p>VENDOR</p>
            </div>

            <div className={styles.item7}>
                <div>
                <FaGlobeAmericas/>
                </div>
                <p>OL IMPLEMENTATION</p>
            </div>

            <div className={styles.item8}>
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