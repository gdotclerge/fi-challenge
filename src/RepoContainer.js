import React, { Component } from 'react';
import Repo from './Repo';

class RepoContainer extends Component {
  state = {
    repoDivs: []
  }

  componentDidMount = () => {
    this.handleRepoCreation()
  }

  render = () => {
    const { state } = this
    return (
      <div className="repoContainer">
        {state.repoDivs}
      </div>
    )
  }

  handleRepoCreation = () => {
    const numOfRepos = this.props.repos
    let counter = 1
    let repoDivs = []
    while (counter < (numOfRepos+1)){
      repoDivs.push(<Repo key={counter} counter={counter}/>)
      ++counter
    }
    this.setState({ repoDivs })
  }

}

export default RepoContainer
