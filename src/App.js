import './App.css';
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Resume from './Components/Resume/Resume'
import Keeb from './Components/Keeb/Keeb'
import Wushu from './Components/Wushu/Wushu'
import Footer from './Components/Footer/Footer'
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
              <Route path="/keeb" component={Keeb}></Route>
              <Route path="/jiayou" component={Wushu}></Route>
              <Route path="/ryanhuang" component={About}></Route>
            </Switch>
          </div>
          <Footer></Footer>
        </Router>
      </header>
    </div>
  );
}

export default App;
