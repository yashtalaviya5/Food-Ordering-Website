import Navbar from '../components/Navbar';
import React from 'react';

function AboutUs() {
  return (
    <div className='AboutUs'>
        <Navbar/>
    <div className="container mt-5 py-5 bg-light rounded shadow">
      <h2 className="text-center mb-4 text-primary">About Go Food</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <p className="lead">
            Welcome to Go Food by <strong>Yash Talaviya</strong>, your go-to destination for delicious and convenient food delivery. We are passionate about bringing you the best culinary experiences from the comfort of your home.
          </p>
          <p>
            Our mission is to connect you with a wide range of local restaurants and eateries, offering diverse cuisines and flavors. We strive to provide a seamless ordering process and ensure timely delivery, so you can enjoy your favorite meals without any hassle.
          </p>
          <p>
            At Go Food, we prioritize quality and customer satisfaction. We carefully select our restaurant partners and continuously work to improve our services. Thank you for choosing Go Food!
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutUs;