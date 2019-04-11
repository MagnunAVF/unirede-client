import React, { Component } from 'react'
import axios from 'axios'
import { Card, Modal, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

import UserList from './usersList'
import IconButton from '../widgets/iconButton'

const UNIREDE_API_URL = 'http://localhost:4000'

export default class UsersIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersList: [],
      show: false,
      redirect: false,
      userIdToDelete: 0
    }

    this.deleteUser = this.deleteUser.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseWithDelete = this.handleCloseWithDelete.bind(this);
    this.goToNewUserPage = this.goToNewUserPage.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios.get(`${UNIREDE_API_URL}/users`)
      .then(resp => this.setState({ ...this.state, usersList: resp.data }))
  }

  deleteUser(id) {
    axios.delete(`${UNIREDE_API_URL}/users/${id}`)
      .then(resp => this.getUsers())
  }

  handleShow(id) {
    this.setState({ ...this.state, show: true, userIdToDelete: id });
  }

  handleClose() {
    this.setState({ ...this.state, show: false });
  }

  handleCloseWithDelete() {
    this.deleteUser(this.state.userIdToDelete);
    this.setState({ ...this.state, show: false });
    this.getUsers();
  }

  goToNewUserPage() {
    this.setState({ ...this.state, redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/new-user" />;
    }

    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title className="card-title">
              <span>Usuários Cadastrados</span>
              <div className="add-button">
                <IconButton
                  icon="add"
                  buttonColor="success"
                  iconColor="white"
                  tooltip="Criar Usuário"
                  onClick={this.goToNewUserPage}
                />
              </div>
            </Card.Title>
            <UserList
              userList={this.state.usersList}
              deleteUser={this.deleteUser}
              handleShow={this.handleShow}
              handleClose={this.handleClose}
              handleCloseWithDelete={this.handleCloseWithDelete} />
          </Card.Body>
        </Card>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Deletar Usuário</Modal.Title>
          </Modal.Header>
          <Modal.Body>Você tem certeza disso?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={this.handleCloseWithDelete}>
              Deletar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}