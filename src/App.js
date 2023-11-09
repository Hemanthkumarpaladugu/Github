import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
// import Counter from './components/Counter'
import StarredRepo from './components/StarredRepo'
import RepoItemDetails from './components/RepoItemDetails'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StarredRepo} />
      <Route
        path="/repos/ownerName/repositoryName"
        component={RepoItemDetails}
      />
    </Switch>
  </BrowserRouter>
)

export default App
