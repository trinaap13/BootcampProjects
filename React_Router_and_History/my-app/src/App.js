import './App.css';
import Parfait from './Parfait';
import Water from './Water';
import Candy from './Candy';
import { BrowserRouter, Route } from 'react-router-dom' 
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path='candy'>
          <Candy />
        </Route>
        <Route exact path='water'>
          <Water />
        </Route>
        <Route exact path='parfait'>
          <Parfait />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
