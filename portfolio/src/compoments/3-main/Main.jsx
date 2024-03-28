import React from 'react';
import './main.css'

const Main = () => {
    return (
        <main className='flex'>
            <section className='left-section flex' >
                <button className='active'>All projects</button>
                <button>HTML & CSS</button>
                <button>JavaScript</button>
                <button>Python & Django</button>
                <button>React & Node.js</button>
            </section>
            <section className="right-section flex">
                {["aa", "bb", "cc" ,"dd","ee"].map((item) => {
                    return (
                        <article key={item} className='card'>
                    <img width={266} src="./1.jpg" alt="" />
                    <div style={{ width: "266px" }} className="box">
                        <h1 className="title">Task manager</h1>
                        <p className="subtitle">reujfdvrdgrr dfhngeiurgh dksjfrfh nrufhnu fkhrefujsr enurek</p>
                        <div className="flex icons">
                            <div style={{ gap: "11px" }} className='flex'>
                                <div className="icon-chain" />


                                <div className="icon-github1" />


                            </div>
                            <a className="link flex" href="">
                                more&nbsp; 
                                <span style={{alignSelf:"end"}} className="icon-arrow-right">

                                </span>
                            </a>
                        </div>
                    </div>

                </article>
                    )
                })}
            </section>
        </main>
    );
}

export default Main;
