import './App.css';
import { Navbar } from './components/Navbar/Navbar';

import { Route, Routes } from 'react-router-dom'
import  DialogsConteiner  from './components/Dialogs/DialogsConteiner';
import  UsersContainer  from './components/Users/Userscontainer';
import ProfileContainer from './components/Profile/ProfileContainer';

import HeaderConteiner from './components/Header/HeaderConteiner';
import { Login } from './components/Login/Login';



function App() {
  return (
    <div className="app_wrapper">
      <HeaderConteiner />
      <Navbar />
      <div className='app_wrapper_content'>
        <Routes>
          <Route path='/dialogs' element={<DialogsConteiner />} />
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/login' element={<Login/>} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
