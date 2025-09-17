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
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading text-red-dark font-bold mb-6">
          Contact Us
        </h2>
        <p className="text-lg font-sub text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Have a question, feedback, or just want to say hello? We’d love to
          hear from you. Reach out through the form or our contact details
          below.
        </p>
      </div>

      {/* Top Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Address */}
        <div className="bg-offwhite p-8 text-center shadow-md rounded-2xl hover:shadow-lg transition">
          <MapPin className="mx-auto mb-4 text-red-dark" size={36} />
          <h3 className="font-heading text-lg font-semibold mb-2">Address</h3>
          <p className="text-gray-700 font-sub leading-relaxed">
            Crown Mall, Lucknow <br /> Uttar Pradesh, India
          </p>
        </div>

        {/* Phone */}
        <div className="bg-offwhite p-8 text-center shadow-md rounded-2xl hover:shadow-lg transition">
          <Phone className="mx-auto mb-4 text-red-dark" size={36} />
          <h3 className="font-heading text-lg font-semibold mb-2">Phone</h3>
          <p className="text-gray-700 font-sub leading-relaxed">
            +91 979405666X
          </p>
        </div>

        {/* Mail */}
        <div className="bg-offwhite p-8 text-center shadow-md rounded-2xl hover:shadow-lg transition">
          <Mail className="mx-auto mb-4 text-red-dark" size={36} />
          <h3 className="font-heading text-lg font-semibold mb-2">Email</h3>
          <p className="text-gray-700 font-sub leading-relaxed">
            team.crushburg@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom Section - Form & Map */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Form */}
        <div className="bg-white shadow-md rounded-2xl p-8 order-1 md:order-2">
          <h2 className="text-2xl font-heading text-red-dark font-semibold mb-4">
            Send Us a Message
          </h2>
          <p className="text-gray-700 mb-6 font-sub leading-relaxed">
            Fill out the form below and we’ll get back to you as soon as
            possible.
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

        {/* Map */}
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-heading text-red-dark font-semibold mb-4">
            Visit Us
          </h2>
          <p className="text-gray-700 mb-6 font-sub leading-relaxed">
            Drop by at our store and experience CrushBurg in person. We’re
            always happy to welcome you!
          </p>

          <div className="w-full h-80 shadow-md rounded-2xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.474044981623!2d81.0550897!3d26.888446600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be20a92400001%3A0xa97a979f8d9426af!2sCrown%20Mall%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1757293656044!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
