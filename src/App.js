import './App.css';
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience.js'
import Resume from './Components/Resume/Resume.js'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar></Navbar>
          <div>
            <Switch>
              <Route path="/Experience" component={Experience}></Route>
              <Route path="/Resume" component={Resume}></Route>
              <Route path="/ryanhuang" component={About}></Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
