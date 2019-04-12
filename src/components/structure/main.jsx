import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './../pages/home'
import Users from './../pages/users'
import NewUser from './../pages/newUser'
import User from './../pages/user'
import EditUser from './../pages/editUser'

const Main = () => (
  <main>
    <div className="main-content">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/new-user' component={NewUser} />
          <Route exact path='/user/:id' component={(props) => <User {...props} />} />
          <Route exact path='/edit-user/:id' component={(props) => <EditUser {...props} />} />
        </Switch>
      </Router>
    </div>
  </main >
)

export default Main