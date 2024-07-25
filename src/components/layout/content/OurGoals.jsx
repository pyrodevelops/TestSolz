import React from 'react';
import Goal from './Goal';
import styles from '../../../styles/OurGoals.module.css';
import { goalsData } from '../../../data/goalsData';

const OurGoals = () => {
    return (
        
        <section className={styles.ourAimsContainer}>

            <div className={styles.goalsGrid}>
                {goalsData.map((goal, index) => (
                    <Goal key={index} title={goal.title} icon={goal.icon} description={goal.description} />
                ))}
            </div>
        </section>
    );
};

export default OurGoals;
