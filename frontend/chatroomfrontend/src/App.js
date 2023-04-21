import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import React, {useState} from 'react';

function App() {

  const [page,setPage] = useState(0);
  const [user, setUser] = useState();

  return (
    <div>
      
      {
        page == 0? <LoginPage setRegisterPage={setPage} setUser={setUser}></LoginPage> 
        : page == 1 ? <RegistrationPage setLoginPage={setPage}></RegistrationPage> 
        : <ChatPage logOutUser={setPage} user={user}></ChatPage>
      }

    </div>
  );
}

export default App;
