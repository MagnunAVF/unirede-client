import React from 'react'

import UserEdit from '../user/userEdit'

const EditUser = (props) => (
  <div className="users-content">
    <UserEdit {...props} />
  </div>
)

export default EditUser