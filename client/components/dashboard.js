import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <br />
      <Link to="/dashboard/profile/9d8de08d-4893-46a5-8dfa-2008f7749500">Go To Profile</Link>
      <br />
      <Link to="/dashboard/main">Go to Main</Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
