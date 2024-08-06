"use client";
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestial from "@/assets/logo-celestial.png";
import quantum from "@/assets/logo-quantum.png";
import pulse from "@/assets/logo-pulse.png";
import echo from "@/assets/logo-echo.png";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section className=' py-20 md:py-24'>
      <div className=' container'>
        <div className='flex flex-col gap-8 items-center'>
          <div className='  flex-1 md:flex-none text-2xl text-black/70'>
            <h2>Trusted</h2>
          </div>
          <div className='flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] '>
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className=' flex flex-none gap-14 pr-14'
            >
              {[
                acmeLogo,
                quantum,
                apexLogo,
                celestial,
                pulse,
                echo,
                acmeLogo,
                quantum,
                apexLogo,
                celestial,
                pulse,
                echo,
              ].map((logo) => (
                <img
                  src={logo.src}
                  key={LogoTicker.src}
                  className=' h-8 w-auto'
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
