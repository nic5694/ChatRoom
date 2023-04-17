import '../App.css';

function NavBar() {
    return (
      <div>
         <div class="flex justify-between py-3 bg-black drop-shadow-xl flex-wrap ">
            <div class="font-bold text-white mx-20 text-xl">
                WorldChat <span class=" font-normal">|</span> <span class="text-[12px] font-normal">ChatBox</span>
            </div>
          
            <div class="mx-20">
                <button class="duration-300 border-2 py-[3px] text-[12px] px-5 rounded-sm text-white font-semibold opacity-75 hover:opacity-100"> Log out </button>
            </div>
        </div>
      </div>
    );
  }
  
export default NavBar;
  