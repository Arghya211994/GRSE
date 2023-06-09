import React from 'react'
import styles from './Adress.module.css'

const Address = () => {
    return (
        <>
            <main className={styles.container}>
                <div className={styles.content}>
                    <p>Shri Sandeep Mahapatra
                        Investment Officer
                    </p>
                    <p>GRSE Bhavan, 61, Garden Reach Road,
                        Kolkata - 700 024</p>

                    <div>
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