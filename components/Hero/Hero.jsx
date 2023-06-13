import React from 'react'
import styles from './Hero.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import {BiArrowToLeft, BiArrowToRight} from 'react-icons/bi'

const Hero = () => {

  const customArrowPropsPrev = {
    // Define the styles for the custom arrows
    style: {
      position: 'absolute',
      top: '50%',
      left: '30px',
      transform: 'translateY(-50%)',
      zIndex: 2,
      cursor: 'pointer',
      backgroundColor: "#07222e",
      padding: '10px',
      fontSize: '2rem',
      border:"none",
      height:"50px",
      width:"50px",
      display: "flex",
      justifyContent:"center",
      alignItems: "center",
      borderRadius: "50%",
      color:"white",
    },
  };

  const customArrowPropsNext = {
    // Define the styles for the custom arrows
    style: {
      position: 'absolute',
      top: '50%',
      right: '30px',
      transform: 'translateY(-50%)',
      zIndex: 2,
      cursor: 'pointer',
      backgroundColor: "#07222e",
      padding: '10px',
      fontSize: '2rem',
      border:"none",
      height:"50px",
      width:"50px",
      display: "flex",
      justifyContent:"center",
      alignItems: "center",
      borderRadius: "50%",
      color:"white",
    },
  };

  const customArrowPropsPrev2 = {
    // Define the styles for the custom arrows
    style: {
      position: 'absolute',
      top: '50%',
      right: '47px',
      transform: 'translateY(-50%)',
      zIndex: 2,
      cursor: 'pointer',
      padding: '10px',
      fontSize: '1.7rem',
      color:"black",
      background:"transparent",
      display: "flex",
      justifyContent:"center",
      alignItems: "center",
      backgroundColor:"#f1cb38",
      borderLeft:"none",
      borderRight:"1px solid rgba(0,0,0,0.2)"
    },
  };

  const customArrowPropsNext2 = {
    // Define the styles for the custom arrows
    style: {
      position: 'absolute',
      top: '50%',
      right: '0px',
      transform: 'translateY(-50%)',
      zIndex: 2,
      cursor: 'pointer',
      padding: '10px',
      fontSize: '1.7rem',
      color:"black",
      background:"transparent",
      border:"none",
      display: "flex",
      justifyContent:"center",
      alignItems: "center",
      backgroundColor:"#f1cb38"
    },
  };
  return (
    <>
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
      autoPlay={true}
      showStatus={false}
      >
        <div className={styles.carousel_container}>
          <img src="https://www.grse.in/i0.wp.com/grse.in/wp-content/uploads/2022/10/HOVERCRAFTf349.jpg?fit=755%2C347&ssl=1" />
        </div>
        <div className={styles.carousel_container}>
          <img src="https://www.grse.in/i0.wp.com/grse.in/wp-content/uploads/2022/09/RBDf349.jpg?fit=755%2C347&ssl=1" />
        </div>
        <div className={styles.carousel_container}>
          <img src="https://www.grse.in/i0.wp.com/grse.in/wp-content/uploads/2022/09/LCU-2f349.jpg?fit=755%2C347&ssl=1" />
        </div>
      </Carousel>

      <main className={styles.main_alert}>
        <div className={styles.alert}>ALERT</div>

        <Carousel
      showThumbs={false}
      showIndicators={false}
      infiniteLoop={true}
      autoPlay={true}

      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            {...customArrowPropsPrev2}
            className="custom-arrow custom-arrow-prev"
          >
            <BiArrowToLeft/>
          </button>
        )
      }

      renderArrowNext={(onClickHandler, hasPrev) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            {...customArrowPropsNext2}
            className="custom-arrow custom-arrow-prev"
          >
            <BiArrowToRight/>
          </button>
        )
      }
      showStatus={false}
      >
        <div
        className={styles.carousel_container2}
        >
          <p>LAST DATE OF ONLINE SUBMISSION OF APPLICATIONS EXTENDED TILL 18 JUN 2023 FOR ALL POSTS UNDER  EN:2023/03(O) (URL)</p>
        </div>

        <div
        className={styles.carousel_container2}
        >
          <p>ADDITION OF POSTS OF OFFICERS UNDER EN:2023/03(O) (Detailed Advertisement) (URL)</p>
        </div>
      </Carousel>
      </main>
     
    </>
  )
}

export default Hero