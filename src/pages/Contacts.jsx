// Contact.jsx
import React, { useState } from "react";
import { MapPin, Phone, Mail, User, MessageSquare } from "lucide-react";
import SlideButton from "../components/SlideButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-white">
      {/* Top Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {/* Address */}
        <div className="bg-offwhite p-8 text-center shadow-md hover:bg-yellow-50 transition">
          <MapPin className="mx-auto mb-4 text-red-dark" size={36} />
          <h3 className="font-heading text-lg mb-2">ADDRESS LINE</h3>
          <p className="text-gray-700 font-sub leading-relaxed">
            Crown Mall, Lucknow <br />
            Uttar Pradesh, India
          </p>
        </div>

        {/* Phone */}
        <div className="bg-offwhite p-8 text-center shadow-md hover:bg-yellow-50 transition">
          <Phone className="mx-auto mb-4 text-red-dark" size={36} />
          <h3 className="font-heading text-lg mb-2">PHONE NUMBER</h3>
          <p className="text-gray-700 font-sub leading-relaxed">
            +91 979405666X
          </p>
        </div>

        {/* Mail */}
        <div className="bg-offwhite p-8 text-center shadow-md hover:bg-yellow-50 transition">
          <Mail className="mx-auto mb-4 text-red-dark" size={36} />
          <h3 className="font-heading text-lg mb-2">MAIL ADDRESS</h3>
          <p className="text-gray-700 font-sub leading-relaxed">
            team.crushburg@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom Section - Form & Map */}
      <div className="grid md:grid-cols-2 gap-12 items-start md:gap-16 md:items-center md:grid-flow-col-dense">
        {/* Right Side - Form (first on mobile) */}
        <div className="order-1 md:order-2">
          <h2 className="text-3xl mb-4 font-heading italic text-red-dark">
            Fill Up the Form
          </h2>
          <p className="text-gray-700 mb-6 font-sub leading-relaxed">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div className="flex items-center border-b pb-2">
              <User className="text-gray-500 mr-3" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full focus:outline-none bg-transparent"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border-b pb-2">
              <Mail className="text-gray-500 mr-3" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full focus:outline-none bg-transparent"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border-b pb-2">
              <Phone className="text-gray-500 mr-3" size={20} />
              <input
                type="text"
                name="phone"
                placeholder="Mobile No. *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full focus:outline-none bg-transparent"
              />
            </div>

            {/* Message */}
            <div className="flex items-start border-b pb-2">
              <MessageSquare className="text-gray-500 mr-3 mt-2" size={20} />
              <textarea
                name="message"
                placeholder="Enter Your Message Here"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full focus:outline-none bg-transparent resize-none"
              />
            </div>

            <SlideButton value="Send Message" />
          </form>
        </div>

        {/* Left Side - Map (second on mobile) */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl mb-4 font-heading italic text-red-dark">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6 font-sub leading-relaxed">
            We’d love to hear from you. Drop us a message or reach out through
            our contact details below.
          </p>

          <div className="w-full h-80 shadow-md">
            <iframe
              className="w-full h-full my-7"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.474044981623!2d81.0550897!3d26.888446600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be20a92400001%3A0xa97a979f8d9426af!2sCrown%20Mall%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1757293656044!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            ></iframe>
            <SlideButton value="Visit Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
