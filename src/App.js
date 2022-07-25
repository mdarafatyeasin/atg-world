import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titlebar from './Components/Titlebar/Titlebar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';


function App() {
  return (
    <div>
      <Titlebar></Titlebar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
