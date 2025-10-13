import React from "react";
import { logoTwo } from "../constants";
import { useNavigate } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  FileText,
  Users,
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const CONTACT_NUMBER = "+917619910103";
  const CONTACT_EMAIL = "connect@crushburg.com";

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
          <div className="space-y-2 text-sm">
            <p className="font-medium">{CONTACT_NUMBER}</p>
            <p className="font-medium">{CONTACT_EMAIL}</p>
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
        <div>
          <h4 className="font-semibold mb-4 text-lg md:text-xl">Our Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => navigate("/termsofuse")}>
                Terms Of Use
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/privacypolicy")}>
                Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/aboutus")}>About Us</button>
            </li>
            <li>
              <button onClick={() => navigate("/contact")}>Contact Us</button>
            </li>
            <li>
              <button onClick={() => navigate("/faq")}>FAQ</button>
            </li>
            <li>
              <button onClick={() => navigate("/store")}>Store Location</button>
            </li>
          </ul>
        </div>

        {/* Shop Categories */}
        <div>
          <h4 className="font-semibold mb-4 text-lg md:text-xl">
            Shop Categories
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => navigate("/menu")}>Burgers</button>
            </li>
            <li>
              <button onClick={() => navigate("/menu")}>Fries & Sides</button>
            </li>
            <li>
              <button onClick={() => navigate("/menu")}>Combos & Deals</button>
            </li>
            <li>
              <button onClick={() => navigate("/menu")}>Beverages</button>
            </li>
            <li>
              <button onClick={() => navigate("/menu")}>Desserts</button>
            </li>
            <li>
              <button onClick={() => navigate("/menu")}>Special Offers</button>
            </li>
          </ul>
        </div>

        {/* Franchise / Business Opportunities */}
        <div>
          <h4 className="font-semibold mb-4 text-lg md:text-xl">
            Franchise & Grow With Us
          </h4>
          <p className="text-sm mb-4">
            Become a CrushBurg partner and take advantage of our proven business
            model, strong ROI, and support system.
          </p>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => navigate("/franchise")}
              className="inline-flex items-center gap-2 bg-red-dark text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition text-sm"
            >
              <Users size={16} /> Explore Franchise Opportunities
            </button>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition text-sm"
            >
              <FileText size={16} /> Email Us
            </a>
            <a
              href={`tel:${CONTACT_NUMBER}`}
              className="inline-flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition text-sm"
            >
              <Users size={16} /> Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-gray-200 mt-6 py-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} CrushBurg. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
