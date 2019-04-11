import React, { Component } from 'react'
import axios from 'axios'
import { Card, Form, Button } from 'react-bootstrap'
import * as _ from 'lodash'
import * as EmailValidator from 'email-validator'

import FormErrors from './../widgets/formErrors'

const UNIREDE_API_URL = 'http://localhost:4000'

export default class UserCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      accessLevel: "Usuário Interno",
      password: "",
      passwordConfirmation: "",
      nameValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false,
      formErrors: {
        name: '',
        email: '',
        password: '',
      }
    }

    this.createUser = this.createUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createUser() {
    axios.post(`${UNIREDE_API_URL}/users`, {
      name: this.state.name,
      email: this.state.email,
      access_level: this.convertAccessLevel(this.state.accessLevel),
      password: this.state.password,
    })
  }

  convertAccessLevel(formAccessLevel) {
    switch (formAccessLevel) {
      case 'Usuário Interno':
        return "intern";
      case 'Administrador':
        return "admin";
      case 'Cliente':
        return "client";
      default:
        return "internal";
    }
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'name':
        nameValid = !_.isEmpty(value);
        fieldValidationErrors.name = nameValid ? '' : ' Não pode ficar em branco';
        break;
      case 'email':
        emailValid = this.validateEmail(value) && !_.isEmpty(value);
        fieldValidationErrors.email = emailValid ? '' : ' Não possui o formato de e-mail';
        break;
      case 'password':
        passwordValid = value.length >= 6 && !_.isEmpty(value);
        fieldValidationErrors.password = passwordValid ? '' : ' Deve ter mais de 6 dígitos';
        break;
      default:
        break;
    }
    this.setState({
      ...this.state,
      formErrors: fieldValidationErrors,
      nameValid: nameValid,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateEmail(email) {
    EmailValidator.validate(email)
  }

  validateForm() {
    this.setState({
      ...this.state,
      formValid: this.state.nameValid && this.state.emailValid && this.state.passwordValid
    });
  }

  handleSubmit(event) {
    this.createUser();
  }

  handleChange(event) {
    let attribute = event.target.id
    let valueToSet = event.target.value

    this.setState(
      {
        ...this.state,
        [attribute]: valueToSet
      },
      () => { this.validateField(attribute, valueToSet) }
    );
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>Criar Usuário</Card.Title>

            <FormErrors formErrors={this.state.formErrors} />

            <Form>
              <Form.Group controlId="name">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insira o nome"
                  value={this.state.name}
                  onChange={this.handleChange} />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Insira o e-mail"
                  value={this.state.email}
                  onChange={this.handleChange} />
              </Form.Group>

              <Form.Group controlId="accessLevel">
                <Form.Label>Nível de Acesso</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.accessLevel}
                  onChange={this.handleChange}>
                  <option>Usuário Interno</option>
                  <option>Administrador</option>
                  <option>Cliente</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Insira a Senha"
                  value={this.state.password}
                  onChange={this.handleChange} />
                <Form.Text className="text-muted">
                  Escolha uma senha segura !
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="passwordConfirmation">
                <Form.Label>Confirmação de Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Insira a Senha novamente"
                  value={this.state.passwordConfirmation}
                  onChange={this.handleChange} />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={this.handleSubmit} >
                Criar
              </Button>
            </Form>

          </Card.Body>
        </Card>
      </div>
    )
  }
}