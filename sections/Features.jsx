"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import {
  animate,
  easeInOut,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import ProductImage from "@/assets/product-image.png";
import { useState } from "react";
const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "Real-Time Monitoring",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Comprehensive Reports",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgrounPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgrounPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgrounPositionX}% ${backgrounPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (index) => {
    setSelectedTab(index);

    const animateOptions = {
      duration: 2,
      ease: "easeInOut",
    };
    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions
    );
    animate(
      backgrounPositionX,
      [backgrounPositionX.get(), tabs[index].backgroundPositionX],
      animateOptions
    );
    animate(
      backgrounPositionY,
      [backgrounPositionY.get(), tabs[index].backgroundPositionY],
      animateOptions
    );
  };

  return (
    <section className=' py-20 md:py-24'>
      <div className=' container'>
        <h2 className=' text-5xl md:text-6xl font-medium text-center tracking-tighter'>
          Elevate Your Efforts
        </h2>
        <p className=' text-black/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5 '>
          Join the revolution of AI-powered farming today.
        </p>
        <div className='mt-10 flex flex-col lg:flex-row gap-3'>
          {tabs.map((tab, tabIndex) => (
            <div
              className=' cursor-pointer'
              selected={selectedTab === tabIndex}
              onClick={() => handleSelectTab(tabIndex)}
            >
              <div
                key={tab.title}
                className=' border border-black/30 flex p-2.5 rounded-xl gap-2.5 items-center flex-1'
              >
                <div className='h-12 w-12  border border-white/30 bg-black rounded-lg inline-flex items-center justify-center'>
                  <DotLottiePlayer
                    src={tab.icon}
                    className=' h-5 w-5 '
                    autoplay
                    // loop
                  />
                </div>
                <div className=' font-medium'>{tab.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className=' border border-black/35 p-2.5 rounded-xl mt-3 '>
          <motion.div
            className=' aspect-video bg-cover border border-black/35 p-2.5 rounded-lg '
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${ProductImage.src})`,
            }}
          ></motion.div>
          {/* <Image src={ProductImage} alt='product image' /> */}
        </div>
      </div>
    </section>
  );
};
