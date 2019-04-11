import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './../pages/home'
import Users from './../pages/users'
import NewUser from './../pages/newUser'

const Main = () => (
  <main>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/new-user' component={NewUser} />
      </Switch>
    </Router>
  </main >
)

export default Main