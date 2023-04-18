import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';
import LoggedInPage from './pages/LoggedInPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import React, {useState} from 'react';

function App() {

  const [page,setPage] = useState(3);

  return (
    <div>
      
      {
        page == 0? <LoginPage setRegisterPage={setPage}></LoginPage> 
        : page == 1 ? <RegistrationPage setLoginPage={setPage}></RegistrationPage> 
        : <LoggedInPage logOutUser={setPage}></LoggedInPage>
      }

    </div>
  );
}

export default App;
