import React from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import 'bootstrap/dist/css/bootstrap.css'
import './../../assets/stylesheets/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel)

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
)

export default App