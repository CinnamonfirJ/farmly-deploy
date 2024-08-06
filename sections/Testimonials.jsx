"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    text: "“Has Experience building scalable applications for companies.”",
    name: "Jesse",
    title: "Web Developer @ Farmly",
    avatarImg: avatar1,
  },
  {
    text: "“Has extensive experience working on machine learning application”",
    name: "Lukman",
    title: "AI Developer @ Farmly",
    avatarImg: avatar2,
  },
  {
    text: "“Has extensive experience working on machine learning application”",
    name: "Amir",
    title: "AI Developer @ Farmly",
    avatarImg: avatar3,
  },
  {
    text: "“Worked on research and analysis for farmly”",
    name: "David",
    title: "Research Lead @ Farmly",
    avatarImg: avatar4,
  },
  {
    text: "“Worked on research and analysis for farmly”",
    name: "Samuel",
    title: "Market Researcher @ Farmly",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className='py-20 md:py-24 overflow-hidden'>
      <div className='container'>
        <h2 className='text-5xl md:text-6xl font-medium text-center tracking-tighter'>
          Beyond Expectations
        </h2>
        <p className='text-black/70 text-lg md:text-xl max-w-sm mx-auto tracking-tight text-center mt-5'>
          Enjoy peace of mind knowing your farm is monitored 24/7 by advanced AI
          technology.
        </p>
        <div className=' relative flex mt-10 mb-10'>
          <div className=' [mask-image:linear-gradient(to_right,transparent,white_10%,white_80%,transparent)] pointer-events-none'></div>
          <motion.div
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className='flex gap-5 flex-none'
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className='relative border border-black rounded-xl p-6 md:p-10 hover:bg-accent transition duration-300 shadow-[10px_-10px_2px_rgb(0,0,0)] max-w-xs md:max-w-md flex-none'
              >
                <div className='text-lg md:text-2xl tracking-tight'>
                  {testimonial.text}
                </div>
                <div className='flex items-center gap-3 mt-5'>
                  <div className='relative after:content-[""] after:absolute after:inset-0 after:bg-[rgb(89,194,232)] after:mix-blend-soft-light'>
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className='h-11 w-11 rounded-lg grayscale'
                    />
                  </div>
                  <div>
                    <div>{testimonial.name}</div>
                    <div className='text-black/70 text-sm'>
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
