import React, { useState } from "react";

const faqData = [
  {
    question: "What are your opening hours?",
    answer: "We are open daily from 10:00 AM to 10:00 PM.",
  },
  {
    question: "Do you deliver?",
    answer:
      "Yes! You can order online through our website or app, or visit any of our store locations.",
  },
  {
    question: "How can I cancel or modify an order?",
    answer:
      "Orders can be canceled within 5 minutes of placement. After that, please contact the store directly.",
  },
  {
    question: "Do you offer vegetarian options?",
    answer:
      "Yes, we have a variety of vegetarian burgers, sides, and beverages.",
  },
  {
    question: "How can I apply for a franchise?",
    answer:
      "Visit our “Franchise” page and fill out the application form. Our team will get back to you.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="heading text-red-dark font-heading font-bold text-4xl mb-4">
          Frequently Asked Questions
        </h1>
        <p className="para font-sub text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg">
          Find answers to the most common questions about CrushBurg, our menu,
          ordering, and services.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center font-heading text-red-dark hover:bg-red-50 transition"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-white para text-gray-700 font-sub leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
