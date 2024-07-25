import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from '../../../data/sliderData';
import Slide from './Slide';

const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
        }
    };

    // Style for the dots
    const styledDots = {
        background: '#ffff',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        display: 'inline-block',
        margin: '10px 8px',
        filter: 'blur(0.7px)', // Adding blur effect
        transition: 'background 0.3s ease',
    };

    // Custom Dot Component
    const CustomDot = ({ onClick, ...rest }) => {
        const { onMove, index, active } = rest;
        // Modify the background color of active dot
        const activeDotStyle = {
            background: active ? '#31CFFC' : '#ffff',
            boxShadow: active ? '0 0 5px #31CFFC, 0 0 10px #31CFFC' : 'none'
        };

        return (
            <li
                onClick={onClick}
                style={{
                    ...styledDots,
                    ...activeDotStyle
                }}
            />
        );
    };

    return (
        <div className="carousel-wrapper">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3500}
                customDot={<CustomDot />}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={300}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-20-px"
            >
                {data.map((item, index) => (
                    <div key={index}>
                        <Slide
                            heading={item.title}
                            imageUrl={item.image}
                            paragraph={item.description}
                            buttonText={item.buttonText}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
