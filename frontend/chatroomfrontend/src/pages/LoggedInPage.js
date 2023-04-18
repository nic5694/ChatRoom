import '../App.css';
import NavBar from '../components/NavBar';

function LoggedInPage(props) {
    return (
      <div>

        

        {/* Whole Container */}
        <div class="flex h-screen">

          {/* The Users Container */}
          <div class="bg-white w-1/2 border-[0.5px] border-t-0 border-l-0 border-gray-300"> <NavBar LogOut={props.logOutUser}></NavBar>
          
            
            {/* Current User Logged In Containers*/}
            <div class="flex justify-center py-8">

              <div>
                {generateUserSVG()}
              </div>

              <div class="py-11 px-5 text-lg text-[#171717]">
                Youssef Chahboune
              </div>

              <div class="py-11">|</div>

              <div class="w-3 h-3 bg-[#58E166] rounded-xl my-[52px] ml-3"></div>

              <div class="py-[46px] pl-2">Online</div>

            </div>
            
            {/* User Banner */}
            <div class="text-center bg-[#171717] text-white py-3 text-sm font-bold drop-shadow-lg border-t-[1px]">
              Users
            </div>

            {/* List Of User Container */}
            <div class="mx-5 my-5 h-[50%] overflow-auto">

              {generateUser("username","user@example.com",true)}
              {generateUser("username","user@example.com",true)}
              {generateUser("username","user@example.com",false)}
              {generateUser("username","user@example.com",true)}
              {generateUser("username","user@example.com",false)}
              {generateUser("username","user@example.com",false)}
              {generateUser("username","user@example.com",false)}
              {generateUser("username","user@example.com",false)}
              {generateUser("username","user@example.com",false)}

            </div>  
          </div>

          {/* The Chat Container */}
          <div class="bg-white w-1/2 flex flex-col">

             {/* Chat Banner */}
            <div class="text-center bg-[#171717] text-white py-[17.5px] text-sm font-bold drop-shadow-lg">
              Chat Room
            </div>
            
            {/* Actual Chat */}
            <div class="p-10 overflow-auto" id="chatContainer">


              {genrateGreenBubble("Hello everyone !", "youssef123")}
              {genrateGreenBubble("Hope you guys are doing well ?! :) !", "youssef123")}
              {genrateGrayBubble("Hi Youssef ! How are you today??","Nicholas123")}
              {genrateGreenBubble("Good and you Nicholas ?!", "youssef123")}
              {genrateGrayBubble("I'm doing well :)","Nicholas123")}
              {genrateGrayBubble("So...What are you doing ??","Nicholas123")}
              {genrateGreenBubble("Not much :/", "youssef123")}
              {genrateGrayBubble("Not much either but i have been working on some pretty intresting stuff you know we should meet some time in the near futur to talk about it you might be intrested in some of my projects !!", "Nicholas123")}
              {genrateGrayBubble("Anyways gotta Go Buddy !", "Nicholas123")}
              {genrateGreenBubble("Alright see ya ! :)", "youssef123")}
             

            </div>
            
            {/* Send Message Bar */}
            <div class="bg-white py-5 border-[1px] border-t-gray-300 border-b-0 flex justify-around" >
              <input class="bg-white border-[1px] border-gray-500 rounded-sm w-[75%] pl-2" placeholder='Enter Message Here' type="text" id="message" />
              <button type="submit" class="bg-[#171717] text-white w-24 h-10 rounded-md text-sm font-semibold">Send</button>
            </div>
          
          </div>

        </div>
         
      </div>
    );
  }

  function genrateGreenBubble(message,user){
    return (
      <div>
        <div class="flex justify-end py-1 ">
          <div class="text-white bg-[#58E166] px-5 py-4 rounded-4xl max-w-[50%] text-xs ">
            {message}
          </div>
        </div>
        <div class="mr-2 text-right text-[10px] opacity-30">
          {user}
        </div>
      </div>
      
    );
  }

  function genrateGrayBubble(message,user){
    return (
      <div>
        <div class="flex py-1 ">
          <div class="text-gray-800 bg-[lightgray] px-5 py-4 rounded-4xl max-w-[50%] text-xs ">
            {message}
          </div>
        </div>
        <div class="ml-2 text-[10px] opacity-30">
          {user}
        </div>
      </div>
    );
  }

  function generateUserSVG(){
    return (
      <svg width="120" height="120" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
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

  function generateUserSVG2(){
    return (
      <svg width="40" height="50" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
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

  function generateUser(username,email,isOnline){

    return (
      <div class="bg-white border-2 drop-shadow-md rounded-md flex py-1 px-6 my-3 justify-between " style={isOnline? {opacity : "100%"} : {opacity : "40%"} }>

      <div class="flex gap-3">
        <div >{generateUserSVG2()}</div>

        <div class="text-[12px] mt-1">
          <div>{username}</div>
          <div>{email}</div>
        </div>
      </div>

      {
        isOnline? 
        <div class="flex mt-4">
          <div class="w-2 h-2 mt-[4px] mx-2 bg-[#58E166] rounded-xl"></div>
          <div class="text-[12px]">Online</div>
        </div>
        

        : 
        
        <div class="flex mt-4">
          <div class="w-2 h-2 mt-[4px] mx-2 bg-[lightgray] rounded-xl"></div>
          <div class="text-[12px]">Offline</div>
        </div>
          
      }
        
    </div>
    );
  }
  
export default LoggedInPage;