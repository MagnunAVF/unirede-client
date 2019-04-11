import React from 'react'
import { Card } from 'react-bootstrap'

import UsersIndex from '../user/usersIndex'

const Users = () => (
  <div className="users-content">
    <Card>
      <Card.Body>
        <Card.Title>Usuários Cadastrados</Card.Title>
        <UsersIndex />
      </Card.Body>
    </Card>
  </div>
)

export default Users