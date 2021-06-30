import React, { useEffect, useState } from 'react'
import stylesWeb from './stylesWeb.module.css'
import stylesMobile from './stylesMobile.module.css'
import { isDesktop } from 'react-device-detect'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Home =  () => {
  const style = isDesktop ? stylesWeb : stylesMobile
  const [topFive, setTopFive] = useState([])
  const history = useHistory()

  const getAllUsers = async () => {
    const users = await axios.get("https://api.github.com/users?per_page=5")
    setTopFive(users.data)
  }

  const showUser = async (user) => {
    const userData = await axios.get(`https://api.github.com/users/${user.login}`)
    console.log(userData)
    history.push({
      pathname: '/person',
        state: {
          fullName: userData.data.name,
          avatar: userData.data.avatar_url,
          location: userData.data.location
        }
    })
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  

  return (
  <div className={style.outermostDiv}>
    <h1>
    Top 5 GitHub users
    </h1>
    <p>
      Tap the username to see more information
    </p>
    <div className={style.topFive}>
    {
      topFive.length > 0 &&
      topFive.map((user, index) => {
        return <button index={index} className={style.user} onClick={() => showUser(user)}>{user.login}</button>
      })
    }
    </div>
    


    
  </div>
  )
}

export default Home