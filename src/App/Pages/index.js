import React from 'react'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import Home from './Home'
import Person from './Person'
import CustomRoute from './CustomRoute'

const Pages = () => {
  return (
    <Router>
      <Switch>
        <CustomRoute path="/" exact component={Home} />
        <CustomRoute path="/person" component={Person} />
      </Switch>
    </Router>
  )
}

export default Pages