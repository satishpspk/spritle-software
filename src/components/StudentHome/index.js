import {Component} from 'react'
import './index.css'

const dummy = localStorage.getItem('questionsList')
const questions = JSON.parse(dummy)
class StudentHome extends Component {
  state = {questionsList: questions}

  onStudentResponse = (id, studentAns) => {
    const {questionsList} = this.state
    const questionObj = questionsList.find(each => each.id === id)
    const newItem = {...questionObj, studentAns}
    const updatedQuestionsList = questionsList.map(each => {
      if (each.id === id) {
        return newItem
      }
      return each
    })
    console.log(updatedQuestionsList)
    this.setState({questionsList: [...updatedQuestionsList]})
  }

  getQuestions = () => {
    const {questionsList} = this.state
    console.log(questionsList)

    return (
      <div>
        <h1 className="heading">Activity log</h1>
        <ul>
          {questionsList.map(each => {
            const onAnswer = event => {
              this.onStudentResponse(each.id, event.target.value)
            }
            return (
              <li key={each.id}>
                <p className="question">{each.question}</p>
                <input
                  className="student-input"
                  placeholder="ENTER INPUT"
                  onChange={onAnswer}
                  type="text"
                />
                <span className="answer">{each.result}</span>
                <hr />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  onAnswerSubmit = event => {
    event.preventDefault()
    const {questionsList} = this.state
    const newList = questionsList.map(each => {
      if (each.answer === parseInt(each.studentAns)) {
        return {...each, result: 'Correct'}
      }
      return {...each, result: 'Wrong'}
    })
    this.setState({questionsList: [...newList]})
  }

  render() {
    return (
      <form className="student-form" onSubmit={this.onAnswerSubmit}>
        {this.getQuestions()}
        <button className="answer-submit" type="submit">
          Submit
        </button>
      </form>
    )
  }
}
export default StudentHome
