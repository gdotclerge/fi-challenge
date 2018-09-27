import React, { Component } from 'react';
import Adapter from './Adapter'
import UserNameForm from './UserNameForm'
import ErrorComponent from './ErrorComponent'
import Profile from './Profile'
import { Menu, Segment } from 'semantic-ui-react'

class App extends Component {
  state = {
    user: "",
    error: false
  }

  render() {
    if (this.state.error){
      this.resetState()
      return (<ErrorComponent />)
    }

    return (
      <div>
        <Segment inverted>
          <Menu inverted secondary>
            <Menu.Item>
              <UserNameForm handleSubmit={this.handleSubmit}/>
            </Menu.Item>
            <Menu.Item>
              <h1>The Challenge</h1>
            </Menu.Item>
          </Menu>
        </Segment>
        <Profile user={this.state.user} />
      </div>
    );
  }

  handleSubmit = (userInput) => {
    Adapter.getProfile(userInput)
    .then((user) => {
      if (user.name === "Error"){
        this.setState({ error: true })
      } else {
        this.setState({ user })
      }
    })
  }

  resetState = () => {
    setTimeout(()=>{
      this.setState({ error: false })
    }, 3000)
  }
  
}

export default App;
