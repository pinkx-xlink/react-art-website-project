import React from 'react'
import './HeroSection.css';
import '../App.css';
import { Button } from './Button';

// This is the welcome page
function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1><i>"Artists aren't created, they are born."</i></h1>
        <p> What will you create? </p>
        <div className="hero-btns">
            <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button 
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--medium'
            onClick={console.log('hey')}
            >
                WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  );
}

export default HeroSection