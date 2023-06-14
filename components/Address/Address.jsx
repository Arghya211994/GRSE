import React, { useContext } from 'react'
import styles from './Adress.module.css'
import { FontContext } from '@/Context/FontContext'

const Address = () => {

    const {size} = useContext(FontContext)

    //font part
    const fontSize1 = `calc(${size}px + 2px)`
    const fontSize2 = size
    return (
        <>
            <main className={styles.container}>
                <div className={styles.content}>
                    <p style={{fontSize:fontSize1}}>Shri Sandeep Mahapatra
                        Investment Officer
                    </p>
                    <p style={{fontSize:fontSize1}}>GRSE Bhavan, 61, Garden Reach Road,
                        Kolkata - 700 024</p>

                    <div style={{fontSize:fontSize2}}>
                        <div className={styles.item}>
                            <p>Phone</p>
                            <p>+91-33-2469-8545</p>
                        </div>

                        <div className={styles.item}>
                            <p>Fax</p>
                            <p>+91-33-2469-8150</p>
                        </div>

                        <div className={styles.item3}>
                            <p>Email</p>
                            <p>co[dot]sec[at]grse[dot]co[dot]in</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Address