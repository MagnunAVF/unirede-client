import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

const UNIREDE_API_URL = 'http://localhost:4000'

export default class UserShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      userId: 0
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    const userId = params.id

    this.setState({ ...this.state, userId: userId });

    this.getUser(userId);
  }

  getUser(id) {
    axios.get(`${UNIREDE_API_URL}/users/${id}`)
      .then(resp => this.setState({ ...this.state, user: resp.data }))
  }

  goToHome() {
    window.location.href = '/'
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>Dados do Usuário <strong>{this.state.user.name}</strong></Card.Title>
            <Card.Text>
              <strong>E-mail:</strong> {this.state.user.email}
            </Card.Text>
            <Card.Text>
              <strong>Nível de acesso:</strong> {this.state.user.access_level}
            </Card.Text>
            <Card.Text>
              <strong>Criado em:</strong> {this.state.user.created_at}
            </Card.Text>
            <Card.Text>
              <strong>Criado em:</strong> {this.state.user.updated_at}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}