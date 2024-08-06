import LogoIcon from "@/assets/logoipsum-225.svg";
import MenuIcon from "@/assets/icons8-menu.svg";
import Button from "@/components/Button";

export const Header = () => {
  return (
    <header className=' pt-4 sticky top-0 z-10 backdrop-blur-sm'>
      <div className='container py-4 border-b border-black/50 mx-auto'>
        <div className=' flex justify-between items-center'>
          <div className=' flex gap-3 justify-center items-center'>
            <div className=' border h-10 rounded-lg inline-flex justify-center items-center border-black/35'>
              <LogoIcon className=' h-8 w-8' />
            </div>
            <h1 className=' font-bold text-xl'>Farmly</h1>
          </div>
          <div className=' hidden md:block'>
            <nav className=' flex gap-8'>
              <a
                href='#'
                className=' text-black/75 hover:text-accent transition'
              >
                Services
              </a>
              <a
                href='#'
                className=' text-black/75 hover:text-accent transition'
              >
                Pricing
              </a>
              <a
                href='#'
                className=' text-black/75 hover:text-accent transition'
              >
                Projects
              </a>
              <a
                href='#'
                className=' text-black/75 hover:text-accent transition'
              >
                About
              </a>
            </nav>
          </div>
          <div className=' flex  gap-4 items-center'>
            <Button>Download</Button>
            <MenuIcon className=' md:hidden cursor-pointer' />
          </div>
        </div>
      </div>
    </header>
  );
};
