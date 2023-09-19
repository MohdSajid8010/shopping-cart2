import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import PrivateRoute from './components/common/PrivateRoute';
import Register from './pages/Register';
import Cart from './pages/Cart.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>

    </div>
  );
}

export default App;
