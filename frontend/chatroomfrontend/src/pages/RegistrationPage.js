import '../App.css';
import NavBar2 from '../components/NavBar2';
import axios from 'axios';
const CryptoJS = require("crypto-js");

function RegistrationPage(props) {

  const CreateNewUser = (name,email,username,password) => {
  
    axios.post("http://127.0.0.1:8000/api/v1/users", {
      name: name,
      email: email,
      username: username,
      password: CryptoJS.MD5(password).toString(),
      active: true,
      profile_picture: null
    })
    .then(response => {
      //console.log(response.data);
      props.setUser(response.data);
      props.setLoginPage(3);
    })
    .catch(error => {
      console.error(error);
    });
    
  }

  const onSubmit = (event) => {
    event.preventDefault();
    CreateNewUser(
      event.target.name.value,
      event.target.email.value,
      event.target.username.value,
      event.target.password.value
      
      );

  }

    return (
      <div>
        <NavBar2></NavBar2>

        <div class="-space-x-3 flex justify-center">

          <div class="z-10 absolute mt-12"> 
              {generateUserSVG()}
          </div>
          
          <div class="bg-[#171717] w-96 h-[500px] drop-shadow-xl rounded-md z-0 mt-20 mb-10">

            <div class="text-white font-bold text-center text-xl mt-14 mb-5">
              Create User
            </div>

            <form onSubmit={onSubmit}>

              <div class="ml-[70px]">
                <label class="text-white">Full Name</label>
              </div>
            
              <div class="flex justify-center mb-2">
                <input class="w-60 h-8 text-sm rounded-sm px-2" type="text" placeholder="Enter full name here" id="name" required />
              </div>

              <div class="ml-[70px]">
                <label class="text-white">E-mail</label>
              </div>
            
              <div class="flex justify-center mb-2">
                <input class="w-60 h-8 text-sm rounded-sm px-2" type="email" placeholder="Enter E-mail here" id="email" required/>
              </div>

              <div class="ml-[70px]">
                <label class="text-white">Username</label>
              </div>
            
              <div class="flex justify-center mb-2">
                <input class="w-60 h-8 text-sm rounded-sm px-2" type="text" placeholder="Enter username here" id="username" required />
              </div>

              <div class="ml-[70px]">
                <label class="text-white ">Password</label>
              </div>

              <div class="flex justify-center mb-10">
                <input class="w-60 text-sm h-8 rounded-sm px-2" type="password" placeholder="Enter password here" id="password" required />
              </div>
              
              <div class="flex justify-center mt-2">
                <button class="border-white border-2 text-white w-20 text-[10px] h-7" type="submit" >Register</button> 
              </div>

              <div class="flex justify-center my-2">
                <button class="text-white text-[10px] " onClick={() => props.setLoginPage(0)}><u>Go Back To Login Page</u></button>
              </div>

            </form>

          </div>
    
        </div>
        
      </div>
    );
  }

  function generateUserSVG(){
    return (
      <svg width="70" height="70" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_21_5)">
      <circle cx="49" cy="45" r="45" fill="white"/>
      <circle cx="49" cy="45" r="44.5" stroke="black" stroke-opacity="0.25"/>
      </g>
      <circle cx="49" cy="33" r="15" fill="#C1C1C1"/>
      <path d="M27 71C27 59.9543 35.9543 51 47 51H50C61.0457 51 70 59.9543 70 71V74H27V71Z" fill="#C1C1C1"/>
      <defs>
      <filter id="filter0_d_21_5" x="0" y="0" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_5"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_5" result="shape"/>
      </filter>
      </defs>
      </svg>
    );
  }
  
export default RegistrationPage;