import React from 'react';
import CardStyle from '../../../styles/Goal.module.css';

const Goal = ({ title, icon: Icon, description }) => {
    return (
        <section className={CardStyle.section} id='services'>
            <div className={CardStyle.sideLine}></div>
            <div className={CardStyle.card}>
                <Icon size={50} className={CardStyle.icon} />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </section>
    );
};

export default Goal;
