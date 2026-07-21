import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import Cases from 'containers/pages/Cases';

import Services from 'containers/pages/Services';
import About from 'containers/pages/About';
import Careers from 'containers/pages/Careers';
import Blog from 'containers/pages/Blog';
import Contacto from 'containers/pages/Contacto';
import Valencia from 'containers/pages/Centro';
import Barquisimeto from 'containers/pages/Barquisimeto';

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes(){

    const location = useLocation()

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                    {/* Error Display */}
                    <Route path="*" element={<Error404 />} />

                    {/* Home Display */}
                    <Route path="/" element={<Home />} />
                    <Route path="/Casos" element={<Casos />} />
                    <Route path="/Servicios" element={<Servicios />} />
                    
                    <Route path="/Contacto" element={<Contacto />} />
                    <Route path="/Valencia" element={<Valencia />} />
                    <Route path="/Barquisimeto" element={<Barquisimeto />} />
                </Routes>
        </AnimatePresence>
    )
}
export default AnimatedRoutes