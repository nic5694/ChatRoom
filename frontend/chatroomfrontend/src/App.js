import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';

function App() {
  return (
    <div>
      Nav 1 (When logged in)
      <NavBar></NavBar>
      <br></br>
      Nav 2 (When Loging in or Registering)
      <NavBar2></NavBar2>
      {/*<NavBar2></NavBar2>*/}
    </div>
  );
}

export default App;
