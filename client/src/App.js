import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <h1>Henry Pokemon</h1>
      </div>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home' component={Home} />
    </BrowserRouter>
    
  );
}

export default App;
