import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './../pages/home'
import Users from './../pages/users'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/users' component={Users} />
    </Switch>
  </main>
)

export default Main