import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Home from "./Components/Home"
 
import Play from './Components/quiz/Play';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
       <Route path='/' exact Component={Home}/> 
       <Route path='/play/quiz' exact Component={Play}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
