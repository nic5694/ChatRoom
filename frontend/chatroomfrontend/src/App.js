import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';
import LoggedInPage from './pages/LoggedInPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import React, {useState} from 'react';

function App() {

  const [page,setPage] = useState(0);

  return (
    <div>

      <LoggedInPage></LoggedInPage>
      
      {/*page == 0? <LoginPage setRegisterPage={setPage}></LoginPage> : <RegistrationPage setLoginPage={setPage}></RegistrationPage>*/}

    </div>
  );
}

export default App;
