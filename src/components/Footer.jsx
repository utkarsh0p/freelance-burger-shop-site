import React from "react";
import { logoTwo } from "../constants";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

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
            <p className="font-medium">+91 70806 42899</p>
            <p className="font-medium">support@crushburg.in</p>
          </div>
          <div className="flex gap-3 pt-2 flex-wrap">
            <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-red-dark hover:text-white transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-red-dark hover:text-white transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-red-dark hover:text-white transition">
              <Youtube size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-red-dark hover:text-white transition">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-4">Our Company</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => navigate("")}>Terms Of Use</button></li>
            <li><button onClick={() => navigate("")}>Privacy Policy</button></li>
            <li><button onClick={() => navigate("")}>About Us</button></li>
            <li><button onClick={() => navigate("")}>Contact Us</button></li>
            <li><button onClick={() => navigate("")}>FAQ</button></li>
            <li><button onClick={() => navigate("")}>Store Location</button></li>
          </ul>
        </div>

        {/* Shop Categories */}
        <div>
          <h4 className="font-semibold mb-4">Shop Categories</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => navigate("")}>Burgers</button></li>
            <li><button onClick={() => navigate("")}>Fries & Sides</button></li>
            <li><button onClick={() => navigate("")}>Combos & Deals</button></li>
            <li><button onClick={() => navigate("")}>Beverages</button></li>
            <li><button onClick={() => navigate("")}>Desserts</button></li>
            <li><button onClick={() => navigate("")}>Special Offers</button></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-4">Sign Up to Newsletter</h4>
          <p className="text-sm mb-4">
            Get the latest updates, offers, and new menu items from CrushBurg.
          </p>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none text-sm"
            />
            <button className="bg-black text-white px-6 rounded-r-full font-medium hover:bg-red-dark transition text-sm">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-3 leading-snug">
            ***By entering the e-mail you accept the{" "}
            <span className="font-semibold">terms and conditions</span> and the{" "}
            <span className="font-semibold">privacy policy</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
