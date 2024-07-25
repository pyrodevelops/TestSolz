import React from 'react';
import homePage from "../../../assets/homePage.svg";
import SlideStyle from '../../../styles/Slide.module.css';
import { Link } from 'react-router-dom';

const Slide = ({ imageUrl, heading, paragraph, buttonText }) => {
    return (
        <>
        <div className={SlideStyle.slideContainer}>
            <img className={SlideStyle.backgroundImage} src={homePage} alt="Testsolz home page background image" />
            <div className={SlideStyle.contentContainer}>
                <img className={SlideStyle.slideImage} src={imageUrl || "https://via.placeholder.com/200"} alt="testsolz home picture" />
                <div className={SlideStyle.textContainer}>
                    <h2 className={SlideStyle.heading}>{heading}</h2>
                    <p className={SlideStyle.paragraph}>{paragraph}</p>
                    <Link to="/contact" className={SlideStyle.slideButton}>{buttonText}</Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Slide;
