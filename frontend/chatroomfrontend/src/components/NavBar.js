import '../App.css';

function NavBar(props) {
    return (
      <div>
         <div class="flex justify-between py-3 bg-[#171717]  drop-shadow-xl flex-wrap ">
            <div class="font-bold text-white mx-20 text-xl">
                WorldChat <span class=" font-normal">|</span> <span class="text-[12px] font-normal">ChatBox</span>
            </div>
          
            <div class="mr-16">
                <button class="duration-300 border-2 py-[3px] text-[12px] px-5 rounded-sm text-white font-semibold opacity-75 hover:opacity-100" onClick = {() => props.LogOut(0)}> Log out </button>
            </div>
        </div>
      </div>
    );
  }
  
export default NavBar;
  