import axios from 'axios';
import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import React, {useState} from 'react';

function App() {

  const [page,setPage] = useState(0);
  const [user, setUser] = useState();

  const logOut = () => {

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;

    axios.put("http://127.0.0.1:8000/api/v1/users/" + user.id,
      {
        name: user.name,
        email: user.email,
        username: user.username,
        password: user.password,
        active: 0,
        profile_picture: null,
        updated_at: formattedDate
      }
    )
    .then(response => {
      // use response to set user
      setUser({});
      setPage(0);
    })
    .catch(error => {
      console.error(error);
    });
}

  return (
    <div>
      
      {
        page == 0? <LoginPage setRegisterPage={setPage} setUser={setUser}></LoginPage> 
        : page == 1 ? <RegistrationPage setLoginPage={setPage} setUser={setUser}></RegistrationPage> 
        : <ChatPage logOutUser={logOut} user={user} setUser={setUser}></ChatPage>
      }

    </div>
  );
}

export default App;
