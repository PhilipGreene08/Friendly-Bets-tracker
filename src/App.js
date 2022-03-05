import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bets from './pages/Bets';
import AddBet from './pages/AddBet';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import NavBar from './components/NavBar';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Bets />} />
          <Route path='/add-bet' element={<AddBet />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <NavBar />
      </Router>
    </Fragment>
  );
}

export default App;
