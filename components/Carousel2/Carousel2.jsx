import React, { useContext } from 'react'
import styles from './Carousel.module.css'
import { Carousel } from 'react-responsive-carousel'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import { FontContext } from '@/Context/FontContext'

const Carousel2 = () => {

    const {size} = useContext(FontContext)

    //font sizes
    const fontSize1 = `calc(${size}px + 17px)`
    const fontSize2 = `calc(${size}px - 2px)`
    const fontSize3 = size


    const customArrowPropsPrev = {
        // Define the styles for the custom arrows
        style: {
          position: 'absolute',
          top: '50%',
          left: '15px',
          transform: 'translateY(-50%)',
          zIndex: 2,
          cursor: 'pointer',
          padding: '10px',
          fontSize: '2rem',
          color:"white",
          background: "none",
          border:"none"
        },
      };
    
      const customArrowPropsNext = {
        // Define the styles for the custom arrows
        style: {
            position: 'absolute',
            top: '50%',
            right: '15px',
            transform: 'translateY(-50%)',
            zIndex: 2,
            cursor: 'pointer',
            padding: '10px',
            fontSize: '2rem',
            color:"white",
            background: "none",
            border:"none"
        },
      };
    return (
        <>
            <main className={styles.container}>
                <Carousel
                showThumbs={false}
                showIndicators={false}
                infiniteLoop={true}
                renderArrowPrev={(onClickHandler, hasPrev) =>
                  hasPrev && (
                    <button
                      type="button"
                      onClick={onClickHandler}
                      {...customArrowPropsPrev}
                      className="custom-arrow custom-arrow-prev"
                    >
                      <FaChevronLeft/>
                    </button>
                  )
                }
          
                renderArrowNext={(onClickHandler, hasPrev) =>
                  hasPrev && (
                    <button
                      type="button"
                      onClick={onClickHandler}
                      {...customArrowPropsNext}
                      className="custom-arrow custom-arrow-prev"
                    >
                      <FaChevronRight/>
                    </button>
                  )
                }
                autoPlay={false}
                showStatus={false}
                >
                    <div className={styles.carousel_container}>
                        <div className={styles.inner_carousel_content}>
                            <div>
                                <p style={{fontSize:fontSize1}}>Make In India</p>
                                <p style={{fontSize:fontSize2}}>GRSE has developed in-house capabilities to design & build most 
                                    modern warships in the country. Presently the shipyard is building 
                                    03 P17A Advanced Frigates, 04 Survey Vessels (Large), 08 Anti-Submarine
                                     Warfare Shallow Water Crafts, 01 Fast Patrol Vessel, 01 Ocean Going 
                                     Passenger and Cargo Ferry for Cooperative Republic of Guyana and 06 
                                     Patrol Boats for Bangladesh Govt. Taking the Government’s Make in India
                                      Initiative forward, the ASW Corvettes and LCUs delivered by GRSE over 
                                      the last few years, had an indigenous content of over 90%, a major step 
                                      towards achieving self-reliance in state of the art warship design and 
                                      construction. GRSE targets to continue its efforts on indigenization 
                                      proportions of over 90 % in all its ships slated for future delivery. 
                                      The Engineering Division of GRSE has developed capabilities to design 
                                      and manufacture Engineering Equipment/ Items with the Launch of “First 
                                      of it’s kind” Portable Assault Bridge, Double Lane Bridge installed in 
                                      Flaghill, Dokalam, Sikkim. The Deck Machinery unit has also developed 
                                      “Rail-less Helicopter Traversing System” in collaboration with M/s MTS,
                                       UK, for installation on warships. GRSE has achieved 72% indigenous 
                                       content and is a prime supplier of Rail-less Helicopter Traversing 
                                       System to Indian Navy and Indian Coast Guard.......</p>

                                <button style={{fontSize:fontSize3}}>More</button>
                            </div>

                            <div>
                                <img src="https://www.grse.in/wp-content/uploads/2022/04/make-in-India-logo-scaled.jpg" alt="" />
                            </div>
                        </div>

                    </div>

                    <div className={styles.carousel_container}>
                    <div className={styles.inner_carousel_content}>
                            <div>
                                <p style={{fontSize:fontSize1}}>Swachh Bharat Abhiyaan</p>
                                <p style={{fontSize:fontSize2}}>The Company has joined the call of the Prime Minister for Swachh Bharat Mission. Some of the initiatives include :-Construction of toilets in local schools under Swachh Vidyalaya, Improvement of Anganwadi centres of Metiabruz in collaboration with CII, Training to school children for sanitation and hygiene practices under Swachh Bharat Mission, Study by TISS for Swachh Bharat Mission Roadmap, Contribution to Swachh Bharat Kosh and Clean Ganga Fund. GRSE has contributed Rs. 75 lakh towards Swachh Bharat Kosh and of Rs. 25 lakh towards Clean Ganga Fund...</p>

                                <button style={{fontSize:fontSize3}}>More</button>
                            </div>

                            <div>
                                <img src="https://www.grse.in/wp-content/uploads/2022/04/swachh.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </Carousel>
            </main>
        </>
    )
}

export default Carousel2