import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import AddLink from './AddLink';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
    </Router>
  );
}

export default App;
