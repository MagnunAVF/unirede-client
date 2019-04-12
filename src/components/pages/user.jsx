import React from 'react'

import UserShow from '../user/userShow'

const User = (props) => (
  <div className="users-content">
    <UserShow {...props} />
  </div>
)

export default User