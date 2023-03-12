import {Component} from 'react'

class StudentLoginFrom extends Component {
  state = {
    username: '',
    password: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
    console.log(event.target.value)
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
    console.log(event.target.value)
  }

  onSubmit = event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username === 'satish' && password === '6') {
      const {history} = this.props
      history.push('/student page')
    }
  }

  render() {
    return (
      <div className="bg">
        <form onSubmit={this.onSubmit} className="form">
          <h1>Login</h1>
          <br />
          <input
            placeholder="USERNAME"
            onChange={this.onChangeUsername}
            id="username"
            type="text"
          />
          <br />

          <hr />
          <br />
          <input
            placeholder="PASSWORD"
            onChange={this.onChangePassword}
            id="password"
            type="password"
          />
          <hr />
          <br />
          <button className="btn btn-primary submit-button" type="submit">
            login
          </button>
        </form>
      </div>
    )
  }
}
export default StudentLoginFrom
