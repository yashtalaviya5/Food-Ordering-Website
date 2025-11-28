import Navbar from '../components/Navbar';
import React from 'react';

function ContactUs() {
    return (
        <div className='ContactUs'>
            <Navbar />
            <div className="container mt-5 py-5 bg-light rounded shadow">
                <h2 className="text-center mb-4 text-primary">Contact Us</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <p className="lead">
                            We'd love to hear from you! If you have any questions, feedback, or concerns, please don't hesitate to reach out to us.
                        </p>
                        <p>
                            <strong>Email:</strong> <a href="mailto:yashtalaviya5@gmail.com">yashtalaviya5@gmail.com</a>
                        </p>
                        <p>
                            <strong>Phone:</strong> <a href="tel:+919999988888">+91 99999 88888</a>
                        </p>
                        <p>
                            <strong>Address:</strong>
                            <br />
                            Gondal
                            <br />
                            Gujarat, India 360311
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;