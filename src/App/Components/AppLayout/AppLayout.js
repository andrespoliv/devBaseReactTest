import React from 'react'
import stylesWeb from './stylesWeb.module.css'
import stylesMobile from './stylesMobile.module.css'
import { isDesktop } from 'react-device-detect'
import backArrow from './left-arrow.svg'
import {useHistory} from 'react-router-dom'

const AppLayout = ({ children }) => {
  const style = isDesktop ? stylesWeb: stylesMobile
  const history = useHistory()
  const person = window.location.pathname.includes("person") ? true : false

  const getBack = () => {
    history.push({
      pathname: '/'
    })
  }
  return (
    <div className={style.container}>
      <div className={style.topbar}>
        
          <div className={style.back}>
          { person &&
          <div className={style.backContent} onClick={()=>getBack()}>
            <img src={backArrow} alt="back arrow" className={style.arrow}/>
            <div>Back</div>
          </div>
          }
        </div>
        
        <div className={style.title}>
          Home
        </div>
        
      </div>
      <div className={style.content}>{children}</div>
    </div>
  )
}

export default AppLayout