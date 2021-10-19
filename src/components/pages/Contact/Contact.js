import React from 'react';

const Contact = () => {
    return (
        <div>
                    <h1 className="text-6xl font-sm lg:pl-20 mt-12">Get In Touch</h1>
                <div className="lg:flex items-center">
                    <div>
                    <div className="lg:flex mt-20">
                        <input className="border py-3 px-2 lg:w-2/7 mr-12 bg-gray-50 outline-none sm: w-80" type="name" name="name" id="name" placeholder="First Name" /> <br /> <br />
                        
                        <input className="border py-3 px-2 lg:w-2/7 bg-gray-50 outline-none sm: w-80" type="name" name="name" id="name" placeholder="Last Name" />
                    </div><br />
                    <div className="lg:flex">
                    <input className="border py-3 px-2 lg:w-2/7 mr-12 bg-gray-50 outline-none sm: w-80" type="email" name="email" id="eamil" placeholder="E-mail" /> <br /> <br />
                    <input className="border py-3 px-2 lg:w-2/7 bg-gray-50 outline-none sm: w-80" type="number" name="number" id="number" placeholder="Phone" />
                    </div>
                    <textarea className="border mt-12 outline-none bg-gray-50 lg:w-10/12" rows="10"  name="comment" form="usrform" placeholder="Message"></textarea><br />
                    <button className="border  bg-gray-600 px-10 py-2 mb-20 text-white">Send</button>
                </div>
                <div>
                    <div className="lg:ml-20">
                        <h1 className="text-4xl">Address</h1>
                        <span className="text-xl ">8734 S. Ashland Ave,</span><br />
                        <span className="text-xl ">San Diego, CA 60608-2013, US</span>
                        <h1 className="text-4xl mt-20">Phones</h1>
                        <span className="text-xl ">1-800-1234-567</span><br />
                        <span className="text-xl ">1-800-8764-098</span>
                        <h1 className="text-4xl mt-20">E-mails</h1>
                        <span className="text-xl ">E-mailsinfo@demolink.org</span><br />
                        <span className="text-xl ">mail@demolink.org</span>
                    </div>
                </div>
                </div>

        </div>
    );
};

export default Contact;