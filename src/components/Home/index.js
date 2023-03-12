import {Component} from 'react'
import './index.css'

class Home extends Component {
  onMasterLogin = () => {
    const {history} = this.props
    history.push('/master login')
  }

  onStudentLogin = () => {
    const {history} = this.props
    history.push('/student login')
  }

  render() {
    return (
      <div className="main-bg">
        <div className="button-container">
          <button className="button" onClick={this.onMasterLogin} type="button">
            MASTER LOGIN
          </button>
          <button
            className="button"
            onClick={this.onStudentLogin}
            type="button"
          >
            STUDENT LOGIN
          </button>
        </div>
      </div>
    )
  }
}
export default Home
