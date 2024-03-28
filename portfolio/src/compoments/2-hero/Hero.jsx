
import './hero.css'


const Hero = () => {
    return (
        <section className='hero flex'>
            <div className='left-section'>
                <div className="parent-avatar flex">
                    <img src='/src/avater.png' className='avatar' alt='' />
                    <div className='icon-verified'></div>
                </div>
                <h1 className='title'>Full-stack Web <br></br>Application Developer</h1>
                <p className='subtitle'>I'm Saif Yassine, specializing in crafting sleek websites that prioritize exceptional user experiences</p>
                <div className="icons flex">
                    <div className="icon icon-github1"></div>
                    <div className="icon icon-linkedin"></div>
                    <div className="icon icon-upwork"></div>
                    <a href=""><div className="icon icon-x"/></a>
                </div>
            </div>
            <div className='right-section animation'>
                animationfjdsvnrebgevehfvhjdfbvhd
            </div>
        </section>
    );
}

export default Hero;
