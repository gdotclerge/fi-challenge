import React from 'react';
import ProfileCard from './ProfileCard'
import RepoContainer from './RepoContainer'

const Profile = (props) => {

  const { user } = props

  if (!!user){
    return (
      <div className="profile">
        <ProfileCard user={user} />
        <RepoContainer repos={user.public_repos} />
      </div>
    )
  } else {
      return (<div></div>)
  }
}

export default Profile;
