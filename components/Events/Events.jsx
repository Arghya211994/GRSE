import React, { useContext } from 'react'
import styles from  './Events.module.css'
import { ThemeContext } from '@/Context/ThemeContext'
import { FontContext } from '@/Context/FontContext'

const Events = () => {

  const {themeVariables} = useContext(ThemeContext)
  const {size} = useContext(FontContext)

  //font size part
  const fontsize1 = `calc(${size}px + 4px)`
  const fontSize2 = size
  return (
    <>
    <main className={styles.container}
    style={{backgroundColor:themeVariables.backgroundColor2}}
    >
        <p style={{color:themeVariables.color,fontSize:fontsize1}}>Latest Events</p>
        <div className={styles.content} style={{fontSize:fontSize2}}>
            <div>
                <img src="https://www.grse.in/photo-gallery/pic/WED01.jpg" alt="" />
                <div>
                    <p>World Environment Day 2023 Tree Plantation at TU on 05 Jun 23</p>
                    <p>Zoom</p>
                </div>
            </div>

            <div>
                <img src="https://www.grse.in/photo-gallery/pic/WED01.jpg" alt="" />
                <div>
                    <p>World Environment Day 2023 Tree Plantation at TU on 05 Jun 23</p>
                    <p>Zoom</p>
                </div>
            </div>

            <div>
                <img src="https://www.grse.in/photo-gallery/pic/WED01.jpg" alt="" />
                <div>
                    <p>World Environment Day 2023 Tree Plantation at TU on 05 Jun 23</p>
                    <p>Zoom</p>
                </div>
            </div>

            <div>
                <img src="https://www.grse.in/photo-gallery/pic/WED01.jpg" alt="" />
                <div>
                    <p>World Environment Day 2023 Tree Plantation at TU on 05 Jun 23</p>
                    <p>Zoom</p>
                </div>
            </div>

            <div>
                <img src="https://www.grse.in/photo-gallery/pic/WED01.jpg" alt="" />
                <div>
                    <p>World Environment Day 2023 Tree Plantation at TU on 05 Jun 23</p>
                    <p>Zoom</p>
                </div>
            </div>

            <div>
                <img src="https://www.grse.in/photo-gallery/pic/WED01.jpg" alt="" />
                <div>
                    <p>World Environment Day 2023 Tree Plantation at TU on 05 Jun 23</p>
                    <p>Zoom</p>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default Events