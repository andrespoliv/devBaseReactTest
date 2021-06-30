import stylesWeb from './stylesWeb.module.css'
import stylesMobile from './stylesMobile.module.css'
import { isDesktop } from 'react-device-detect'

const Person = ({history}) => {
  const {fullName, avatar, location} = history.location.state
  const style = isDesktop ? stylesWeb : stylesMobile

  return (<div className={style.outermostDiv}>
    <div className={style.userContainer}>
      <img src={avatar} alt="avatar" className={style.avatar}/>
      <div className={style.nameAndLocationContainer}>
        <h3>{fullName}</h3>
        <p>{location}</p>
      </div>
      
    </div>
    
  </div>
  )
}

export default Person