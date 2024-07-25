import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../../styles/Employees.module.css'
// import ahmad from '../../../assets/employees/ahmad.svg';

const Employees = () => {
    const employees = useSelector(state => state.employee);
    return (
        <>
        <hr className={styles.horiLine} ></hr>
            <h1 className={styles.employeesHeader} id='team'>OUR AMAZING TEAM</h1>
        <div className={styles.employeesContainer}>
            {
                employees.map((employee, index) => (
                    <div key={index} className={styles.employeeCard}>
                        <img src={employee.image} alt={employee.name} />
                        <h1>{employee.name}</h1>
                        <strong>{employee.title}</strong>
                    </div>
                ))
            }
        {/* <div className={styles.admin}>
            <div className={styles.adminData} >
            <img src={ahmad} alt="admin picture" />
            <h1>Ahmad Alam</h1>
            <strong>Admin</strong>
            </div>
            <div className='description'>
                <p>
                "At TESTSOLZ, we redefine excellence through pioneering <br></br> technology,
                 empowering innovation and paving the way for <br></br> limitless possibilities
                  in software quality assurance."
                      </p>
            </div>
        </div> */}
        </div>
            </>
    );
};

export default Employees;
