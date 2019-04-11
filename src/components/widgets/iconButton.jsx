import React, { Component } from 'react'
import If from './if'
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'

export default class UsersIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { icon: this.setIcon() }
  }

  setIcon() {
    var icon = this.props.icon

    if (icon === 'add') {
      return faPlus
    } else if (icon === 'view') {
      return faEye
    } else {
      return faTrash
    }
  }

  render() {
    return (
      <If test={!this.props.hide}>
        <OverlayTrigger
          overlay={
            <Tooltip>
              {this.props.tooltip}
            </Tooltip>
          } >
          <Button
            variant={this.props.buttonColor}
            onClick={this.props.onClick}>
            <FontAwesomeIcon
              icon={this.state.icon}
              color={this.props.iconColor} />
            <If test={this.props.text}>
              <span className="button-text">{this.props.text}</span>
            </If>
          </Button>
        </OverlayTrigger>
      </If>
    )
  }
}