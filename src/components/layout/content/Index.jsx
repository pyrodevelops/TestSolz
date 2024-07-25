import React from 'react';
import Navbar from '../navbar/Navbar';
import Slider from './Slider';
import OurGoals from './OurGoals';
import LatestPortfolio from './LatestPortfolio';
import Employees from './Employees';
import Achievements from './Achievements';

import { FaCircleArrowUp } from 'react-icons/fa6';
import ChatBotify from '../chatbot/ChatBotify';

const Index = () => {
    const scrollToTopButton = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    
    const StyleBtn = {
        position: 'fixed',
        bottom: '7rem',
        right: '2.3rem',
        backgroundColor: '#31CFFC',
        color: '#fff',
        fontSize: '1.5rem',
        padding: '10px',
        borderRadius: '50%',
        cursor: 'pointer'
    }
    
    return (
        <>
        <Navbar/>
        <Slider/>
        <OurGoals/>
        <LatestPortfolio/>
        <Employees/>
        <Achievements/>
        <FaCircleArrowUp style={StyleBtn} onClick={scrollToTopButton} />
        <ChatBotify/>
        </>
    );
};

export default Index;
