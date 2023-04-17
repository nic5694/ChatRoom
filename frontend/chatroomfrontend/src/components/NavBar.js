import '../App.css';

function NavBar() {
    return (
      <div>
         <div class="flex justify-between py-3 bg-black drop-shadow-xl flex-wrap ">
            <div class="font-bold text-white mx-20 text-xl">
                WorldChat
            </div>
            
            <div class="mx-20">
                <button class="duration-300 border-2 py-[5px] text-[12px] px-5 rounded-sm text-white font-semibold opacity-75 hover:opacity-100 text-sm"> Log Out </button>
            </div>
        </div>
      </div>
    );
  }
  
export default NavBar;
  