import React from 'react'
import Profile from "../../assets/IMG_3395.jpeg"
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import './home.css';


const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className='home__title'>
            <span>I'm Nikhil Nagaraja Char.
              </span>Data Scientist
          </h1>
          <p className='home__description'>
            I'm a Indian based web designer and a data scientest focused on crafting clean and user friendly experience
            I am passionate about building excellent software that improves the lives ofthose around me.
          </p>

          <Link to='/about' className='button'>
            More About Me{''}
            <span className='button_icon'>
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>
      <div className='color__block'></div>
     
    </section>
  );
}

export default Home;
