import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import DogDetails from './DogDetails';
import DogList from './DogList';
import Home from './Home';
import Nav from './Nav';
import './App.css';


App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      // src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      // src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      // src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      // src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Nav dogs={props.dogs}/>
        <Switch>
          <Route exact path="/">
            <Home dogs={props.dogs}/>
          </Route>
          {/* <Route exact path="/dogs" >
            <DogList dogs={props.dogs}/>
          </Route> */}
          <Route path="/dogs/:name">
            <DogDetails dogs={props.dogs}/>
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
