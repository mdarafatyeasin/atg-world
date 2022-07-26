import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titlebar from './Components/Titlebar/Titlebar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Signin from './Components/Home/Modal/Signin';
import Signup from './Components/Home/Modal/Signup';


function App() {
  return (
    <div>
      <Titlebar id='title'></Titlebar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
