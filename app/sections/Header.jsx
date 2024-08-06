import LogoIcon from "@/assets/logoipsum-225.svg";
import MenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
  return (
    <header className=' py-4'>
      <div className='conatiner'>
        <div className=' flex justify-between '>
          <div>
            <LogoIcon className=' w-8 h-8' />
          </div>
          <div className=' flex'>
            <button>Join Now</button>
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
