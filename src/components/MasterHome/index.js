import {Component} from 'react'
import './index.css'

class MasterHome extends Component {
  state = {
    input: '',
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {input} = this.state
    const question = input.split(' ')
    const leftValue = parseInt(question[0])
    const rightValue = parseInt(question[2])
    const operator = question[1]
    let answer
    switch (operator) {
      case '+':
        answer = leftValue + rightValue
        break
      case '-':
        answer = leftValue - rightValue
        break
      case '/':
        answer = leftValue / rightValue
        answer = parseInt(answer)
        break
      case '*':
        answer = leftValue * rightValue
        break
      default:
        answer = null
    }

    console.log(answer)

    const prev = localStorage.getItem('questionsList')
    let prevQuestions = JSON.parse(prev)
    if (prevQuestions === null) {
      prevQuestions = []
    }
    const z = prevQuestions.length
    const newItem = {question: input, answer, id: z + 1, studentAns: ''}

    localStorage.setItem(
      'questionsList',
      JSON.stringify([...prevQuestions, newItem]),
    )
    this.setState({input: ''})
  }

  render() {
    const questions = localStorage.getItem('questionsList')
    let questionsList = JSON.parse(questions)
    console.log(questionsList)
    const {input} = this.state
    if (questionsList === null) {
      questionsList = []
    }
    return (
      <div className="home-bg">
        <form onSubmit={this.onSubmit}>
          <h1>Master Executor</h1>
          <input
            onChange={this.onChangeInput}
            placeholder="ENTER INPUT"
            type="text"
            value={input}
          />
          <hr />
          <button className="add-button" type="submit">
            Add
          </button>
        </form>
        <div>
          <ul>
            {questionsList.map(each => (
              <li className="question" key={each.id}>
                {each.question}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MasterHome
