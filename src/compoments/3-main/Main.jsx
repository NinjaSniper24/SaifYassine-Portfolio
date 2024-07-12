import React from 'react';
import './main.css'
import { useState } from 'react';
import { myProjects } from './myProjects';
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
    const [active, setActive] = useState("all");
    const [arr, setArr] = useState(myProjects);
    const handleClick = (buttonCategory) => {
        setActive(buttonCategory);

        const newArr = myProjects.filter((item) => {
            const ZZZ = item.category.find((myItem) => {
                return myItem === buttonCategory;
            });

            return ZZZ === buttonCategory;
        });
        setArr(newArr);
    };
    return (
        <main className='flex'>
            <section className='left-section flex'>

                <button onClick={() => {
                    setActive("all");
                    setArr(myProjects);
                }} className={active === "all" ? "active" : ""}>All projects</button>

                <button onClick={() => handleClick("html")} className={active === "html" ? "active" : ""}>HTML & CSS</button>
                <button onClick={() => handleClick("js")} className={active === "js" ? "active" : ""}>JavaScript</button>
                <button onClick={() => handleClick("python")} className={active === "python" ? "active" : ""}>Python & Django</button>
                <button onClick={() => handleClick("react")} className={active === "react" ? "active" : ""}>React & Node.js</button>
            </section>
            <section className="right-section flex">
            <AnimatePresence>
                {arr.map((item) => {
                    return (
                        <motion.article
                            layout
                            initial={{ transform: "scale(0.4)" }}
                            animate={{ transform: "scale(1)" }}
                            transition={{ type: "spring", damping: 8, stiffness: 50 }}
                            key={item.imgPath}
                            className="  card"
                        >
                            <img width={266} src={item.imgPath} alt="" />
                            <div style={{ width: "266px" }} className="box">
                                <h1 className="title">{item.projectTitle}</h1>
                                <p className="subtitle">{item.description}</p>
                                <div className="flex icons">
                                    <div style={{ gap: "11px" }} className='flex'>
                                        <div className="icon-chain" >
                                            <a href={item.github}></a>
                                        </div>


                                        <div className="icon-github1" />


                                    </div>
                                    
                                </div>
                            </div>

                        </motion.article>
                    )
                })}
                </AnimatePresence>
            </section>
        </main>
    );
}

export default Main;
