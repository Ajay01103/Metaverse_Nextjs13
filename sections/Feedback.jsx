'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto lg:flex-row flex-col flex gap-6`}
    >

      <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold text-white sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px]">
            Amit Singh</h4>
          <p className="mt-[8px] font-normal text-white sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px]">CEO | Metaversus</p>
        </div>
        <p className="mt-[24px] font-normal text-white sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px]">
          With the development of today's latest Technology, metaverse is very useful
          for today's work, or can be use it as anything you can ever imagined. Its just like You are in a 
          different world. Its far more than VR
        </p>
      </motion.div>

      <motion.div
      variants={fadeIn('left', 'spring', 0.2, 1)}
      className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold text-white sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px]">
            Ajay Singh</h4>
          <p className="mt-[8px] font-normal text-white sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px]">Founder | Metaversus</p>
        </div>
        <p className="mt-[24px] font-normal text-white sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px]">
          With the development of today's latest Technology, metaverse is very useful
          for today's work, or can be use it as anything you can ever imagined. Its just like You are in a 
          different world. Its far more than VR
        </p>
      </motion.div>

      <motion.div
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="relative flex-1 flex justify-center items-center"
      >
        <img src="/planet-09.png" alt="planet9"
        className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[48px]"
        />

        <motion.div
        variants={zoomIn(0.4, 1)}
        className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img src="stamp.png" alt="stmp" className="ml-[10%] h-[100px] w-[100px] object-contain" />
        </motion.div>
      </motion.div>
      
  </motion.div>    
  </section>
);

export default Feedback;
