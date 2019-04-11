import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import IconButton from '../widgets/iconButton'

export default class UsersList extends Component {
  renderRows() {
    const userList = this.props.userList || []

    return userList.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <IconButton
            icon="delete"
            buttonColor="danger"
            iconColor="white"
            tooltip="Deletar Usuário"
            onClick={() => this.props.handleShow(user.id)}
          />
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <Table responsive >
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </Table>
      </div>
    )
  }
}