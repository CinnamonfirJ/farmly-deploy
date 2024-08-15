"use client";
import Button from "@/components/Button";
import Stars from "@/assets/stars.png";
import Tomatoe from "@/assets/tomatoe.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      className=' h-[492px] md:h-[800px] flex items-center overflow-hidden relative'
      style={{ backgroundImage: `url(${Stars.src})`, backgroundPositionY }}
      animate={{
        backgroundPositionX: Stars.width,
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 180,
      }}
    >
      {/* Tomatoe */}
      <div
        className='absolute h-80 w-80 md:h-[420px] md:w-[420px] rounded-full  top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3'
        style={{
          backgroundImage: `url(${Tomatoe.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // shadow-[0_20px_20px_rgb(255,255,255,0.5),0_20px_80px_rgb(255,255,255,.1),0_20px_50px_rgb(140,69,255)]
        }}
      ></div>
      {/* Ring */}
      <motion.div
        style={{
          translateY: "-33.3333%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className='absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] opacity-60 border border-black rounded-full top-1/3 left-1/2 -translate-y-1/3 -translate-x-1/2 '
      >
        <div className='absolute h-2 w-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full'></div>
        <div className='absolute h-2 w-2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full'></div>
        <div className='absolute h-5 w-5 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 border border-black inline-flex justify-center items-center rounded-full'>
          <div className='h-2 w-2 bg-black rounded-full'></div>
        </div>
      </motion.div>
      {/* Ring */}
      <motion.div
        style={{
          translateY: "-33.3333%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className=' absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-black/60 border-dashed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 '
      ></motion.div>

      {/* Ring */}
      <motion.div
        style={{
          translateY: "-33.3333%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className=' absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border opacity-60 border-black top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3  '
      >
        <div className='absolute h-2 w-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full'></div>
        <div className='absolute h-2 w-2 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 bg-black rounded-full'></div>
        <div className='absolute h-5 w-5 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 border border-black inline-flex justify-center items-center rounded-full'>
          <div className='h-2 w-2 bg-black rounded-full'></div>
        </div>
      </motion.div>
      <div className='container mt-16 relative '>
        <h1 className=' text-7xl md:text-[158px] md:leading-none font-bold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,rgba(89,232,134,1),rgb(89,194,232,.5))] text-transparent bg-clip-text text-center '>
          AI FARM MONITOR
        </h1>
        <p className=' text-lg md:text-xl max-w-xl mx-auto text-black/70 mt-5 text-center'>
          Optimize and monitor crop health and maximize yields with cutting-edge
          AI technology.
        </p>
        <div className='flex justify-center mt-5'>
          <Link
            href={
              "https://demo.roboflow.com/tomato-detection-apigm/3?publishable_key=rf_7h2UBDeY2TWQiccDDWFNYjPqZSH2"
            }
          >
            <Button>Try It Now!</Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};
