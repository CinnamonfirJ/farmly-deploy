import Logo from "@/assets/logoipsum-225.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YoutubeSocial from "@/assets/social-youtube.svg";
import GooglePlay from "@/assets/googleplay.png";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className=' py-5 border-t border-black/60'>
      <div className=' container'>
        <div className=' flex flex-col lg:flex-row items-start  gap-8'>
          <div className=' flex gap-2  items-center'>
            <Logo className=' h-10 w-10' />
            <div className=' text-3xl font-medium'>Farmly</div>
          </div>
          <div className=' flex flex-col lg:flex-row lg:justify-center lg:flex-1 gap-16'>
            <div>
              <h3 className=' text-xl font-medium'>Contact</h3>
              <nav className=' flex flex-col gap-5 lg:gap-7'>
                <a
                  href='#'
                  className=' text-black/70 hover:text-black text-lg  transition duration-150'
                >
                  Features
                </a>
                <a
                  href='#'
                  className=' text-black/70 hover:text-black text-lg  transition duration-150'
                >
                  Developers
                </a>
                <a
                  href='#'
                  className=' text-black/70 hover:text-black text-lg  transition duration-150'
                >
                  Pricing
                </a>
                <a
                  href='#'
                  className=' text-black/70 hover:text-black text-lg  transition duration-150'
                >
                  Blog
                </a>
              </nav>
            </div>
            <div>
              <h3 className=' text-xl font-medium'>Explore</h3>
              <nav className=' flex flex-col gap-5 lg:gap-7'>
                <a
                  href='#'
                  className=' text-black/70 hover:text-black text-lg  transition duration-150'
                >
                  Features
                </a>
                <a
                  href='#'
                  className=' text-black/70 hover:text-black text-lg  transition duration-150'
                >
                  Developers
                </a>
                <a
                  href='#'
                  className=' text-black/70 hover:text-black text-lg  transition duration-150'
                >
                  Pricing
                </a>
                <a
                  href='#'
                  className=' text-black/70 hover:text-black text-lg  transition duration-150'
                >
                  Blog
                </a>
              </nav>
            </div>
            <div>
              <h3 className=' text-xl font-medium'>Support</h3>
              <nav className=' flex flex-col gap-5 lg:gap-7'>
                <a
                  href='#'
                  className=' text-black/70 hover:text-black text-lg  transition duration-150'
                >
                  Help Center
                </a>
                <a
                  href='#'
                  className=' text-black/70 hover:text-black text-lg  transition duration-150'
                >
                  Privacy Policy
                </a>
                <a
                  href='#'
                  className=' text-black/70 hover:text-black text-lg  transition duration-150'
                >
                  FAQ
                </a>
                <a
                  href='#'
                  className=' text-black/70 hover:text-black text-lg  transition duration-150'
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
          <div className=' flex lg:justify-end gap-5'>
            <XSocial />
            <InstaSocial />
            <YoutubeSocial />
          </div>
        </div>
        <div className=' flex flex-col justify-center items-center mt-10 gap-5'>
          <h3 className=' text-2xl font-medium'>Download Farmly</h3>
          <p className=' text-center text-black/70 text-xl max-w-md'>
            Enjoy peace of mind knowing your farm is monitored 24/7 by advanced
            AI technology.
          </p>
          <Image src={GooglePlay} alt='Googleplay' className=' h-10 w-auto ' />
        </div>
      </div>
    </footer>
  );
};
