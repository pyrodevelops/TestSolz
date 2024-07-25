import React, {  useState } from 'react';
import AchievementStyle from '../../../styles/Achievements.module.css';
import { useSpring, animated, a } from 'react-spring';
import ScrollTrigger from 'react-scroll-trigger';
// import backgroundImg from '../../../assets/home-office.png'

import { footerData, ourAchievements, contactUsInfo } from '../../../data/footerData';

function Number({ n, animate }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: animate ? n : 0,
    delay: 250,
    config: { mass: 2, tension: 20, friction: 10 }
  });
  return <animated.div>{number.to(n => n.toFixed(0))}</animated.div>;
}





const Achievements = () => {
  const [counter, setCounter] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
      <div className={AchievementStyle.container} id='aboutus'>
        {/* <img src={backgroundImg} alt="testSolz achievements background image "/> */}
        <h1 className={AchievementStyle.heading}>
         Our <span>Amazing</span> Achievements
       </h1>
        <div className={AchievementStyle.achievementsGrid } >
          {
            ourAchievements.map((achievement, index) => (
              <div key={index} className={AchievementStyle.achievementItem} >
                <span><Number n={achievement.number} animate={counter} /></span>
                <p>{achievement.title}</p>
              </div>
            ))
          }
          </div>
        {/* Footer section */}
          <div className={AchievementStyle.section} >
          <div className={AchievementStyle.footer} >
                <h2>Stay Connected</h2>
                <div className={AchievementStyle.socialIcons}>
                {
                  footerData.map((data, index)=>(
                    <a href={data.acount_url} target='_blank' key={index} ><img src={data.icon_url} alt={data.title} key={index} /></a>
                  ))
                }
                </div>
            </div>
            {/* contact us section */}
            <div className={AchievementStyle.footer} >
            <h2>Contact Info</h2>
            {contactUsInfo.map((contact, index) => {
              const IconComponent = contact.icon;  // Store the icon as a component
              return (
                <div className={AchievementStyle.contactInfo} key={index}>
                  <IconComponent />
                  <p>{contact.title}: {contact.info}</p>
                </div>
              );
            })}
            </div>
        </div>
      </div>
      
    </ScrollTrigger>
  );
};

export default Achievements;
