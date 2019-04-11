import React, { Component } from 'react'
import axios from 'axios'

import UserList from './usersList'

const UNIREDE_API_URL = 'http://localhost:4000'

export default class UsersIndex extends Component {
  constructor(props) {
    super(props)
    this.state = { usersList: [] }

    this.getUsers()
  }

  getUsers() {
    axios.get(`${UNIREDE_API_URL}/users`)
      .then(resp => this.setState({ ...this.state, usersList: resp.data }))
  }

  render() {
    return (
      <div>
        <UserList
          userList={this.state.usersList} />
      </div>
    )
  }
}