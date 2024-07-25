import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import styles from '../../../styles/LatestPortfolio.module.css';
import portImg1 from "../../../assets/portfolio1.png";
import portImg2 from "../../../assets/portfolio2.png";
import portImg3 from "../../../assets/portfolio3.png";

export default function LatestPortfolio() {
  const images = [
    portImg1,
    portImg2,
    portImg3,
    portImg2
  ];

  const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1800 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1800, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 550 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 550, min: 0 },
        items: 1,
    }

};

  return (
    <div className={styles.carouselContainer1} id='projects'>
      <Carousel 
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"  
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass={styles.customDotListStyle}
        itemClass={styles.carouselItemPadding40px}    
      >
        {images.map((image, index) => (
          <div className={styles.portfolioContainer} key={index}>
            <img src={image} alt={`Portfolio ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
