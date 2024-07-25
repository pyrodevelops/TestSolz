import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './components/features/Redux/Store';
import Index from './components/layout/content/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/layout/content/Contact';
import Admin from './components/layout/content/Admin';



// Custom hook to handle scrolling
export const useScrollToTop = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []); // Run on mount
};

const App = () => {
    useScrollToTop(); // Use custom hook to scroll on mount
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path='/' element={<Index/>} />
                        <Route path='*' element={<h1>404 Not Found</h1>} />
                        <Route path='/contact' element={<Contact/>} />
                        <Route path='/admin' element={<Admin/>} />
                    </Routes>
                </Router>
               
            </Provider>
        </>
    );
};

export default App;
