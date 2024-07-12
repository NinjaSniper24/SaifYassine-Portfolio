import Lottie from "lottie-react";
import './hero.css';
import React from 'react';
import devAnimation from '../../../public/animation/Animation - 1711762558823.json'
import { useRef } from "react";
import { motion } from "framer-motion";


const Hero = () => {
    const lottieRef = useRef();
    return (

        <section className='hero flex'>
            <div className='left-section'>
                <div className="parent-avatar flex">
            
                    <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
             src='/src/avater.png' className='avatar' alt='' />
                    <div className='icon-verified'></div>
                </div>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="title"
                >Full-stack Web <br></br>Application Developer</motion.h1>
                <p className='subtitle'>I'm Saif Yassine, specializing in crafting sleek websites that prioritize exceptional user experiences</p>
                <div className="icons flex">
                    <div className="icon icon-github1"></div>
                    <div className="icon icon-linkedin"></div>
                    <div className="icon icon-upwork"></div>
                    <a href=""><div className="icon icon-x" /></a>
                </div>
            </div>
            <div className='right-section animation'>
                <Lottie
                    lottieRef={lottieRef}
                    className=""
                    onLoadedImages={() => {
                        lottieRef.current.setSpeed(0.5);
                    }}
                    animationData={devAnimation}
                />
            </div>
        </section>
    );
}

export default Hero;
