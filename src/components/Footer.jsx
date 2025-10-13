// Footer.jsx
import React, { useState } from "react";
import { logoTwo } from "../constants";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter, Users } from "lucide-react";

const CONTACT_NUMBER = "+917619910103";
const CONTACT_EMAIL = "connect@crushburg.com";

const Footer = () => {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const companyLinks = [
    { label: "Terms Of Use", path: "/termsofuse" },
    { label: "Privacy Policy", path: "/privacypolicy" },
    { label: "About Us", path: "/aboutus" },
    { label: "Contact Us", path: "/contact" },
    { label: "FAQ", path: "/faq" },
    { label: "Store Location", path: "/store" },
  ];

  const shopCategories = [
    "Burgers",
    "Fries & Sides",
    "Combos & Deals",
    "Beverages",
    "Desserts",
    "Special Offers",
  ];

  return (
    <footer className="w-full bg-white text-black font-body border-t border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-12 py-10 grid gap-10 md:grid-cols-4">
        {/* Logo & Social */}
        <div className="space-y-4">
          <img src={logoTwo} alt="logo" className="w-28 h-auto" />
          <p className="text-sm leading-relaxed">
            CrushBurg is your go-to burger franchise serving mouth-watering
            burgers, fries, and more — crafted to satisfy every craving.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <a
              href={`tel:${CONTACT_NUMBER}`}
              className="hover:text-red-dark transition"
            >
              {CONTACT_NUMBER}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-red-dark transition"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="flex gap-3 pt-2 flex-wrap">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-red-dark hover:text-white transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-red-dark hover:text-white transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-red-dark hover:text-white transition"
            >
              <Youtube size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-red-dark hover:text-white transition"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="md:block hidden">
          <h4 className="font-semibold mb-4 text-lg md:text-xl">Our Company</h4>
          <ul className="space-y-2 text-sm">
            {companyLinks.map((link, idx) => (
              <li key={idx}>
                <button onClick={() => navigate(link.path)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Shop Categories */}
        <div className="md:block hidden">
          <h4 className="font-semibold mb-4 text-lg">Shop Categories</h4>
          <ul className="space-y-2 text-sm">
            {shopCategories.map((cat, idx) => (
              <li key={idx}>
                <button onClick={() => navigate("/menu")}>{cat}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Franchise Section */}
        <div className="md:block hidden">
          <h4 className="font-semibold mb-4 text-lg">
            Franchise & Grow With Us
          </h4>
          <p className="text-sm mb-2">
            Become a CrushBurg partner and take advantage of our proven business
            model, strong ROI, and complete support system.
          </p>
          <button
            onClick={() => navigate("/franchise")}
            className="inline-flex items-center gap-2 bg-red-dark text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition mb-2"
          >
            <Users size={16} /> Explore Franchise
          </button>
          <div className="flex flex-wrap gap-2 mt-1">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-white px-4 py-2 bg-red-dark rounded-full hover:bg-black transition"
            >
              Email
            </a>
            <a
              href={`tel:${CONTACT_NUMBER}`}
              className="inline-flex items-center gap-2 text-sm text-white px-4 py-2 bg-green-500 rounded-full hover:bg-green-600 transition"
            >
              Phone
            </a>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden col-span-4 space-y-2">
          {/* Company Accordion */}
          <div className="border-b border-gray-200 py-2">
            <button
              onClick={() => toggleSection("company")}
              className="w-full text-left flex justify-between items-center font-semibold text-red-dark"
            >
              Our Company <span>{openSection === "company" ? "-" : "+"}</span>
            </button>
            {openSection === "company" && (
              <ul className="mt-2 space-y-2 text-sm">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <button onClick={() => navigate(link.path)}>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Shop Accordion */}
          <div className="border-b border-gray-200 py-2">
            <button
              onClick={() => toggleSection("shop")}
              className="w-full text-left flex justify-between items-center font-semibold text-red-dark"
            >
              Shop Categories <span>{openSection === "shop" ? "-" : "+"}</span>
            </button>
            {openSection === "shop" && (
              <ul className="mt-2 space-y-2 text-sm">
                {shopCategories.map((cat, idx) => (
                  <li key={idx}>
                    <button onClick={() => navigate("/menu")}>{cat}</button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Franchise Accordion */}
          <div className="py-2">
            <button
              onClick={() => toggleSection("franchise")}
              className="w-full text-left flex justify-between items-center font-semibold text-red-dark"
            >
              Franchise & Grow With Us{" "}
              <span>{openSection === "franchise" ? "-" : "+"}</span>
            </button>
            {openSection === "franchise" && (
              <div className="mt-2 space-y-2 text-sm">
                <p className="text-sm mb-2">
                  Become a CrushBurg partner and take advantage of our proven
                  business model, strong ROI, and complete support system.
                </p>
                <button
                  onClick={() => navigate("/franchise")}
                  className="inline-flex items-center gap-2 bg-red-dark text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition"
                >
                  <Users size={16} /> Explore Franchise
                </button>
                <div className="flex flex-wrap gap-2 mt-2">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-2 text-sm text-white px-4 py-2 bg-red-dark rounded-full hover:bg-black transition"
                  >
                    Email
                  </a>
                  <a
                    href={`tel:${CONTACT_NUMBER}`}
                    className="inline-flex items-center gap-2 text-sm text-white px-4 py-2 bg-green-500 rounded-full hover:bg-green-600 transition"
                  >
                    Phone
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
