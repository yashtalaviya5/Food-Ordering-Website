import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
  const [orderData, setOrderData] = useState(null);

  const fetchMyOrder = async () => {
    const email = localStorage.getItem('useremail');
    console.log(email);

    const response = await fetch("http://localhost:5000/api/myOrderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    const data = await response.json();
    setOrderData(data);
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='row'>
          {orderData?.orderData?.order_data?.slice(0).reverse().map((orderGroup, index) => (
            <div key={index}>
              {orderGroup.map((item, idx) => (
                item.Order_date ? (
                  <div key={idx} className='m-auto mt-5'>
                    {item.Order_date}
                    <hr />
                  </div>
                ) : (
                  <div key={idx} className='col-12 col-md-6 col-lg-3'>
                    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div className='container w-100 p-0' style={{ height: "38px" }}>
                          <span className='m-1'>{item.qty}</span>
                          <span className='m-1'>{item.size}</span>
                          <div className=' d-inline ms-2 h-100 w-20 fs-5'>
                            ₹{item.price}/-
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
