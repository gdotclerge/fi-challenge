import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const ProfileCard = (props) => {

  const { user } = props

  return (
    <Card className="profileCard">
      <Image src={user.avatar_url} />
      <Card.Content>
        <Card.Header>{user.name}</Card.Header>
        <Card.Description>
          Email: {user.email} <br/>
          Company: {user.company} <br/>
          Public Repos: {user.public_repos} <br/>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ProfileCard;
