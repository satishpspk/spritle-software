import {Component} from 'react'
import './index.css'

class MasterLoginFrom extends Component {
  state = {
    username: '',
    password: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username === 'satish' && password === '6') {
      const {history} = this.props
      history.push('/master page')
    }
  }

  render() {
    return (
      <div className="bg">
        <form onSubmit={this.onSubmit} className="form">
          <h1>Login</h1>
          <br />
          <input
            onChange={this.onChangeUsername}
            placeholder="USERNAME"
            id="username"
            type="text"
          />
          <hr />
          <br />

          <br />
          <input
            onChange={this.onChangePassword}
            placeholder="PASSWORD"
            id="password"
            type="password"
          />
          <hr />
          <br />
          <button className="submit-button" type="submit">
            submit
          </button>
        </form>
      </div>
    )
  }
}
export default MasterLoginFrom
