import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <footer>
    <div className="container d-flex justify-content-center">
      <span>desenvolvido por MagnunAVF </span>
      <a href="https://github.com/magnunAVF">
        <FontAwesomeIcon icon={faCodeBranch} color="white" />
      </a>
    </div>
  </footer>
)

export default Footer