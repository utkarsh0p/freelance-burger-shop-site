import React, { useState } from "react";
import { MapPin, Phone, Mail, User, MessageSquare } from "lucide-react";
import SlideButton from "../components/SlideButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return; // allow only numbers
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      toast.error("⚠️ Mobile number must be exactly 10 digits");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_c81x8y8",
        "template_5o6opax",
        formData,
        "-cfQhhFo2N8W-jub7"
      );

      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast.error("❌ Failed to send message. Try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 space-y-20">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="heading text-red-dark font-heading font-bold text-3xl md:text-4xl mb-4">
          Contact Us
        </h2>
        <p className="para font-sub text-gray-700 max-w-2xl mx-auto leading-relaxed text-lg">
          Have a question, feedback, or just want to say hello? Reach out
          through the form or our contact details below. We’d love to hear from
          you!
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <InfoCard
          Icon={MapPin}
          title="Address"
          text="Crown Mall, Lucknow, Uttar Pradesh, India"
        />
        <InfoCard Icon={Phone} title="Phone" text="+91 7619910103" />
        <InfoCard Icon={Mail} title="Email" text="connect@crushburg.com" />
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-2xl mx-auto">
        <h2 className="heading text-red-dark font-heading font-semibold mb-4 text-center text-2xl md:text-3xl">
          Send Us a Message
        </h2>
        <p className="para text-gray-700 mb-6 font-sub leading-relaxed text-center text-lg">
          Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <InputField
            Icon={User}
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            Icon={Mail}
            name="email"
            placeholder="Email Address *"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            Icon={Phone}
            name="phone"
            placeholder="Mobile No. *"
            maxLength={10}
            value={formData.phone}
            onChange={handleChange}
          />
          <TextAreaField
            Icon={MessageSquare}
            name="message"
            placeholder="Enter Your Message Here"
            value={formData.message}
            onChange={handleChange}
          />

          <div className="flex justify-center mt-4">
            <SlideButton
              value={loading ? "Sending..." : "Send Message"}
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

// Reusable Info Card
const InfoCard = ({ Icon, title, text }) => (
  <div className="bg-offwhite p-8 text-center shadow-md rounded-2xl hover:shadow-lg transition">
    <Icon className="mx-auto mb-4 text-red-dark" size={36} />
    <h3 className="heading text-lg font-heading font-semibold mb-2">{title}</h3>
    <p className="para text-gray-700 font-sub leading-relaxed">{text}</p>
  </div>
);

// Reusable Input Field
const InputField = ({
  Icon,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  maxLength,
}) => (
  <div className="flex items-center border-b pb-2">
    <Icon className="text-gray-500 mr-3" size={20} />
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      maxLength={maxLength}
      className="w-full focus:outline-none bg-transparent"
    />
  </div>
);

// Reusable TextArea
const TextAreaField = ({ Icon, name, placeholder, value, onChange }) => (
  <div className="flex items-start border-b pb-2">
    <Icon className="text-gray-500 mr-3 mt-2" size={20} />
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      rows="4"
      className="w-full focus:outline-none bg-transparent resize-none"
    />
  </div>
);

export default Contact;
