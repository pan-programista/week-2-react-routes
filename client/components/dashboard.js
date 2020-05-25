import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div
      id="title"
      className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10"
    >
      Dashboard
      <div>
        <Link to="/dashboard/profile/9d8de08d-4893-46a5-8dfa-2008f7749500">Go To Profile</Link>
      </div>
      <div>
        <Link to="/dashboard/main">Go to Main</Link>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
