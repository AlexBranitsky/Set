import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom'
import { DialogsConteiner } from './components/Dialogs/DialogsConteiner';
import { Users } from './components/Users/Users';

function App() {

  return (
    <div className="app_wrapper">
      <Header />
      <Navbar />
      <div className='app_wrapper_content'>
        <Routes>
          <Route path='/dialogs' element={<DialogsConteiner />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
