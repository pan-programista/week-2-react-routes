import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Profile = () => {
  const { username } = useParams()
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        id="title"
        className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10"
      >
        Profile
      </div>
      <div
        id="username"
        className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10"
      >
        {username}
      </div>
      <div>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
      <div>
        <Link to="/dashboard">Go to Root</Link>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
