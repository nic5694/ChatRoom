import '../App.css';
import NavBar from '../components/NavBar';

function LoggedInPage() {
    return (
      <div>
        <NavBar></NavBar>

        {/* Whole Container */}
        <div class="flex flex-auto h-screen">

          {/* The Users Container */}
          <div class="bg-sky-600 w-1/2 h-full">
            
          </div>

          {/* The Chat Container */}
          <div class="bg-red-600 w-1/2 h-full">
          
          </div>
          
        </div>
         
      </div>
    );
  }
  
export default LoggedInPage;