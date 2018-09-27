import React, { Component } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

class UserNameForm extends Component {
  state = {
    input:""
  }

  render (){
    return (
    <Segment inverted>
      <Form onSubmit={(e)=> this.props.handleSubmit(this.state.input)}>
        <Form.Input placeholder="Enter GitHub Username" onChange={this.handleInputChange} name="input"/>
        <Button type='submit'>Submit</Button>
      </Form>
    </Segment>
    )
  }

  handleInputChange = (e) => {
    this.setState({
     [e.target.name]: e.target.value
    })
  }

}

export default UserNameForm
