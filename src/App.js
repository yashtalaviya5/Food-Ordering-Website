import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import ContactUs from './screens/ContactUs';
import AboutUs from './screens/AboutUs';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder.js'

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Bootstrap
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/creatuser" element={<Signup />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/myOrder" element={<MyOrder />} />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
