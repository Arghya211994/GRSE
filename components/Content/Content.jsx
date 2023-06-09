import React from 'react'
import styles from './Content.module.css'

const Content = () => {
    return (
        <>
            <main>
                <div className={styles.header_div}>
                    <p>WELCOME TO THE OFFICIAL WEBSITE OF GARDEN REACH SHIPBUILDERS &amp; ENGINEERS LIMITED</p>
                </div>

                <div className={styles.header_nav}>
                    <p>Important Notice & Annoucement</p>
                    <p>CMD Speaks</p>
                    <p>Latest Events</p>
                    <p>Photo Gallery</p>
                    <p>Visits</p>
                    <p>Press Releases</p>
                    <p>Recent Accolades</p>
                    <p>E-Tenders</p>
                    <p>CMD's Messages</p>
                </div>

                <div className={styles.header_content}>
                    <p>GRSE at Glance</p>

                    <div>
                        <p>The genesis of Garden Reach Shipbuilders &amp; Engineers
                            Ltd (GRSE) dates back to 1884 when it started its
                            journey as a small workshop to repair vessels of River
                            Steam Navigation Company. In 1934, the Company was
                            registered under the Indian Companies Act, 1913 and
                            started its journey as Garden Reach Workshops (GRW)
                            Limited. The Company was acquired by the Government of
                            India in the year 1960 and there was no looking back
                            since then. The 1st&nbsp;warship of Independent India,
                            INS Ajay was delivered to the Indian Navy in 1961,
                            within one year of being taken over by the Ministry of
                            Defence. GRSE, a Mini Ratna Category 1 Company has so
                            far delivered 107 warships to Indian Navy, Indian Coast
                            Guard, Mauritius Coast Guard and Seychelles Coast Guard
                            &amp; is the only shipyard to achieve this Centennial
                            Mark. The shipyard has received ISO 9001, 14001, 45001
                            and 50001 certification. The 1st warship for export by
                            India was delivered by GRSE to Mauritius in 2014.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Odit possimus facilis optio nisi provident, perferendis,
                            neque officia velit repellat nam rerum quam blanditiis
                            porro quas similique et hic. Mollitia, aspernatur! <br/>
                            he genesis of Garden Reach Shipbuilders &amp; Engineers
                            Ltd (GRSE) dates back to 1884 when it started its
                            journey as a small workshop to repair vessels of River
                            Steam Navigation Company. In 1934, the Company was
                            registered under the Indian Companies Act, 1913 and
                            started its journey as Garden Reach Workshops (GRW)
                            Limited. The Company was acquired by the Government of
                            India in the year 1960 and there was no looking back
                            since then. <br/><br/>

                            <button className={styles.content_btn}>read more</button>
                        </p>
                        <div className={styles.header_content_img}>
                            <img src="https://www.grse.in/i0.wp.com/grse.in/wp-content/uploads/2022/10/CMD-Pic-1f798.jpg?fit=1500%2C1000&ssl=1" alt="image" />
                            <p>Cmde PR Hari,IN (Retd.)</p>
                            <p>Chairman &amp; Managing Director</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Content