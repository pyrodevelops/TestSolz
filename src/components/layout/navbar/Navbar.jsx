import React, {useState, useEffect } from 'react';
import styles from '../../../styles/Navbar.module.css';
import logo from '../../../assets/logo1.png';
import { Spin as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0, { behavior: 'smooth' });
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    

    return (
        <>
            <nav className={styles.navWrapper}>
                <a href="#" className={styles.brandLogo}>
                    <img src={logo} alt="testSolz logo" />
                </a>
                <div className={styles.hamburger}>
                <Hamburger toggled={isOpen} toggle={setOpen} color={isOpen ? '#31CFFC' : '#1b1a1a'} />
                </div>
                <ul className={`${styles.navMenu} ${isOpen ? styles.showMenu : ''}`}>
                    <li onClick={() => setOpen(false)}><Link onClick={scrollToTop} to="/">Home</Link></li>
                    <li onClick={() => setOpen(false)}><a href="#services">Our Services</a></li>
                    <li onClick={() => setOpen(false)}><a href="#projects">Projects</a></li>
                    <li onClick={() => setOpen(false)}><a href="#team">Team</a></li>
                    <li onClick={() => setOpen(false)}><a href="#aboutus">About us</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;





/* 
 <ul className="">
                        <li>
                                <select>
                                    <option>Home</option>
                                    <option>Service Plans</option>
                                    <option>Careers</option>
                                    <option>Our skills & expertise</option>
                                    <option>Our Blog</option>
                                </select>

                        </li>
                        <li>
                                <select>
                                    <option>OUR QA SERVICES</option>
                                    <option>Mobile Testing Services</option>
                                    <option>Functional Testing Services</option>
                                    <option>Automated Testing Services</option>
                                    <option>User Interface Testing Services</option>
                                    <option>Web Application Testing Services</option>
                                </select>

                        </li>
                        <li>
                                <select>
                                    <option>HAPPY CLEINTS</option>
                                    <option>Testimonials</option>
                                </select>

                        </li>
                        <li>
                                <select>
                                    <option>CASE STUDIES</option>
                                    <option>Testing Materials</option>
                                    <option>Software Testing Glossary</option>
                                    <option>Software Testing Tools</option>
                                    <option>Sample Deliverables</option>
                                    <option>Our Blog</option>
                                </select>

                        </li>
                        <li>
                                <select>
                                    <option>CONTACT US</option>
                                    <option>Pilot Project</option>
                                    <option>Request a Quote</option>
                                </select>

                        </li>
                        
                    </ul>

*/