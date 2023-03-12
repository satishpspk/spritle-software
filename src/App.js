import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import MasterLoginForm from './components/MasterLoginForm'
import StudentLoginForm from './components/StudentLoginForm'
import MasterHome from './components/MasterHome'
import StudentHome from './components/StudentHome'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/master login" component={MasterLoginForm} />
      <Route exact path="/student login" component={StudentLoginForm} />
      <Route exact path="/master page" component={MasterHome} />
      <Route exact path="/student page" component={StudentHome} />
    </Switch>
  </BrowserRouter>
)

export default App
