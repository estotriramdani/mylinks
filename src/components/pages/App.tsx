import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import AddLink from './AddLink';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add">
          <AddLink />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
