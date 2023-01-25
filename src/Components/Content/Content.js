import React from 'react'
import Profile from '../Profile.js/Profile'
import ProfileDetails from '../ProfileDetails.js/ProfileDetails'

const Content = () => {
  return (
    <div className='col-md-11 d-flex'>
     <Profile/>
     <ProfileDetails/>
    </div>
  )
}

export default Content