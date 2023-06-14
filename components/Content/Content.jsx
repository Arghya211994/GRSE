import React, { useContext } from 'react'
import styles from './Content.module.css'
import { ThemeContext } from '@/Context/ThemeContext'
import { FontContext } from '@/Context/FontContext'

const Content = () => {

    const {themeVariables} = useContext(ThemeContext)
    const {size} = useContext(FontContext)

    //font Size
    const fontSize1 = `calc(${size}px - 4px)`
    return (
        <>
            <main className={styles.container}
            style={{backgroundColor:themeVariables.backgroundColor2}}
            >
                <div className={styles.content}>
                    <div style={{fontSize:fontSize1}}>
                        <p>Environmental Acts & Rules</p>
                        <p>Media Corner</p>
                        <p>Court Cases</p>
                        <p>Best Environmental Management Practises</p>
                        <p>E-Governance Portal</p>
                        <p>Air Pollution Complaint</p>
                        <p>Drafts Reports Comments/Suggestion</p>
                        <p>Air Pollution Complaint</p>
                        <p>Media Corner</p>
                    </div>

                    <div style={{fontSize:fontSize1}}>
                        <div>
                            <p>Messages</p>
                            <div>
                                <p>Chairman</p>
                                <p>Sh Tanmay Kumar, IAS</p>
                            </div>

                            <div>
                                <p>Chairman</p>
                                <p>Sh Tanmay Kumar, IAS</p>
                            </div>
                        </div>

                        <div>
                            <p>Important Annoucements</p>
                            <div>
                                <div>
                                    <img src="https://cpcb.nic.in/images/ln-ic.png" alt="" />
                                </div>
                                <p>Notice regarding Removal of Difficulties for Imple</p>
                            </div>

                            <div>
                                <div>
                                    <img src="https://cpcb.nic.in/images/ln-ic.png" alt="" />
                                </div>
                                <p>Notice regarding Removal of Difficulties for Imple</p>
                            </div>

                            <div>
                                <div>
                                    <img src="https://cpcb.nic.in/images/ln-ic.png" alt="" />
                                </div>
                                <p>Notice regarding Removal of Difficulties for Imple</p>
                            </div>

                            <button>Read More</button>
                        </div>
                    </div>

                    <div style={{fontSize:fontSize1}}>
                        <div>
                            <p>Directions issued by CPCB</p>
                            <div>
                                <div>
                                    <img src="https://cpcb.nic.in/images/ln-ic.png" alt="" />
                                </div>
                                <p>Directions issued under Section 18(1)(b)/31-A</p>
                            </div>

                            <div>
                                <div>
                                    <img src="https://cpcb.nic.in/images/ln-ic.png" alt="" />
                                </div>
                                <p>Directions issued under Section 18(1)(b)/31-A</p>
                            </div>

                            <div>
                                <div>
                                    <img src="https://cpcb.nic.in/images/ln-ic.png" alt="" />
                                </div>
                                <p>Directions issued under Section 18(1)(b)/31-A</p>
                            </div>

                            <div>
                                <div>
                                    <img src="https://cpcb.nic.in/images/ln-ic.png" alt="" />
                                </div>
                                <p>Directions issued under Section 18(1)(b)/31-A</p>
                            </div>
                        </div>

                        <div>
                            <p>Latest @ CPCB</p>

                            <div>
                                <div>
                                    <img src="https://cpcb.nic.in/images/new.gif" alt="" />
                                </div>
                                <p>Committee Report before The National Green Tribunal Principal Bench, New Delhi in OA number 19 of 2021</p>

                            </div>

                            <div>
                                <div>
                                    <img src="https://cpcb.nic.in/images/new.gif" alt="" />
                                </div>
                                <p>Committee Report before The National Green Tribunal Principal Bench, New Delhi in OA number 19 of 2021</p>

                            </div>

                            <div>
                                <div>
                                    <img src="https://cpcb.nic.in/images/ln-ic.png" alt="" />
                                </div>
                                <p>Guidelines for Environmentally Sound Facilities For handling and</p>
                            </div>

                            <button>Read More</button>

                        </div>
                    </div>

                    <div style={{fontSize:fontSize1}}>
                        <p>Important Links</p>

                        <div>
                            <div>
                                <img src="https://cpcb.nic.in/images/ln-ic.png" alt="" />
                            </div>
                            <p>Directions issued under Section 18(1)(b)/31-A</p>
                        </div>

                        <div>
                            <div>
                                <img src="https://cpcb.nic.in/images/ln-ic.png" alt="" />
                            </div>
                            <p>Directions issued under Section 18(1)(b)/31-A</p>
                        </div>

                        <div>
                            <div>
                                <img src="https://cpcb.nic.in/images/ln-ic.png" alt="" />
                            </div>
                            <p>Directions issued under Section 18(1)(b)/31-A</p>
                        </div>

                        <div>
                            <div>
                                <img src="https://cpcb.nic.in/images/ln-ic.png" alt="" />
                            </div>
                            <p>Directions issued under Section 18(1)(b)/31-A</p>
                        </div>

                        <div>
                            <div>
                                <img src="https://cpcb.nic.in/images/ln-ic.png" alt="" />
                            </div>
                            <p>Directions issued under Section 18(1)(b)/31-A</p>
                        </div>

                        <div>
                            <div>
                                <img src="https://cpcb.nic.in/images/ln-ic.png" alt="" />
                            </div>
                            <p>Directions issued under Section 18(1)(b)/31-A</p>
                        </div>

                        <div>
                            <div>
                                <img src="https://cpcb.nic.in/images/ln-ic.png" alt="" />
                            </div>
                            <p>Directions issued under Section 18(1)(b)/31-A</p>
                        </div>

                        <div>
                            <div>
                                <img src="https://cpcb.nic.in/images/ln-ic.png" alt="" />
                            </div>
                            <p>Directions issued under Section 18(1)(b)/31-A</p>
                        </div>

                        <button>Read More</button>
                    </div>

                    <div>
                        <div>
                            <img src="https://cpcb.nic.in/images/modi5.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Content