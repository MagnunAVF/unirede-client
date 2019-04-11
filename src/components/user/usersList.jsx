import React from 'react'
import { Table } from 'react-bootstrap'

export default props => {
  const renderRows = () => {
    const userList = props.userList || []

    return userList.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          -
        </td>
      </tr>
    ))
  }

  return (
    <Table responsive >
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </Table>
  )
}