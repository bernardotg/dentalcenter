import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';

import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import Casos from 'containers/pages/Casos';
import Servicios from 'containers/pages/Servicios';
import Centro from 'containers/pages/Centro';
import Contacto from 'containers/pages/Contacto';
import Barquisimeto from 'containers/pages/Barquisimeto';



function App(){
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        {/*Error Display*/}
        <Route path="*" element={<Error404 />} />

        {/*Home Display*/}
        <Route path="/" element={<Home />} />
        <Route path="/Casos" element={<Casos />} />
        <Route path="/Servicios" element={<Servicios/>} />
        <Route path="/Barquisimeto" element={<Barquisimeto />} />
        <Route path="/Centro" element={<Centro />} />
        <Route path="/Contacto" element={<Contacto />} />
        
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;