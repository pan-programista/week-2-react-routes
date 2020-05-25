import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Profile = () => {
  const { username } = useParams()
  return (
    <div>
      <div id="title">Main</div>
      <br />
      <div id="username">{username}</div>
      <br />      
      <Link to="/dashboard/main">Go To Main</Link>
      <br />
      <Link to="/dashboard">Go to Root</Link>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
