import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Error from './components/404/404';
import CardDetail from './components/CardDetail/CardDetail'
import CreatePoke from './components/CreatePoke/CreatePoke';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <h1>Henry Pokemon</h1>
      </div>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home' component={Home} />
      <Route exact path='/create' component={CreatePoke} />
      <Route exact path='/pokemon/:id' component={CardDetail} />
      <Route exact path='/404' component={Error} />
    </BrowserRouter>
    
  );
}

export default App;
