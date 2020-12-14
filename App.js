import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Nav from './Components/Nav';
import Name from './Components/Name';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Error from './Components/Error';
import User from './Components/User';


function App() {
  return (
      <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact  path="/contact" component={Contact} />
        <Route exact path="/nav" component={Nav}/>
        <Route exact path="/contact/name" component={Name}/>
        <Route exact path ="/header" component={Header}/>
        <Route exact path ="/Footer" component={Footer}/>
        <Route exact path ="/About" component={About}/>
        <Route exact path ="/Portfolio" component={Portfolio}/>
        <Route exect path ="/user/:fname/:lname" component={User}/>
        <Route Route component={Error}/>
       </Switch>
      </div>
  );
}

export default App;
