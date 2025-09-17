// Franchise.jsx
import React from "react";
import SlideButton from "../components/SlideButton";
import {
  Users,
  Target,
  TrendingUp,
  MapPin,
  Award,
  PieChart,
  Rocket,
  Lightbulb,
  Globe,
  UserCheck,
  Handshake,
  FileText,
  Briefcase,
} from "lucide-react";

const WHATSAPP_NUMBER = "+919794056664";
const MANUAL_LINK =
  "https://drive.google.com/file/d/1aUAn9DMq6G1CiqbuQyeLF6q-KbaQb6g3/view?usp=sharing";

const WhatsAppButton = ({ text }) => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
      text
    )}`}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-bold shadow-md hover:bg-green-600 transition"
  >
    WhatsApp Us
  </a>
);

const InvestmentCard = ({ title, items }) => (
  <div className="bg-white border-t-4 border-red-dark p-6 shadow-md">
    <h3 className="text-xl text-red-dark font-heading font-bold mb-3">
      {title}
    </h3>
    <ul className="text-gray-700 space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex justify-between text-sm">
          <span>{it.label}</span>
          <strong className="text-gray-900">{it.value}</strong>
        </li>
      ))}
    </ul>
  </div>
);

const Franchise = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <header className="bg-red-dark text-white text-center py-16 px-6">
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-3">
          Own a CrushBurg Franchise
        </h1>
        <p className="max-w-3xl mx-auto mb-6 leading-relaxed font-sub">
          Bringing the Best from the U.S. to India — a youth-first QSR chain
          redefining fast food with Indian fusion flavors, smart pricing, and a
          community-driven brand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WhatsAppButton text="Hi CrushBurg Team, I want to apply for a franchise." />
          <a
            href={MANUAL_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-red-dark px-5 py-3 rounded-full shadow-md hover:bg-offwhite transition"
          >
            <FileText size={18} /> View Franchise Manual
          </a>
        </div>
      </header>

      {/* PILLARS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-heading text-center text-red-dark mb-10">
          Our Mission & Business Pillars
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-offwhite p-6 shadow-md text-center">
            <Target size={28} className="text-red-dark mx-auto" />
            <h4 className="mt-3 font-semibold text-red-dark">
              Mass-Premium Pricing
            </h4>
            <p className="text-sm text-gray-700">
              Gourmet taste at youth budgets (₹150–₹200).
            </p>
          </div>
          <div className="bg-offwhite p-6 shadow-md text-center">
            <Globe size={28} className="text-red-dark mx-auto" />
            <h4 className="mt-3 font-semibold text-red-dark">
              Multi-Channel Engine
            </h4>
            <p className="text-sm text-gray-700">
              D2C app + Swiggy/Zomato + cafe & cafeteria outlets.
            </p>
          </div>
          <div className="bg-offwhite p-6 shadow-md text-center">
            <MapPin size={28} className="text-red-dark mx-auto" />
            <h4 className="mt-3 font-semibold text-red-dark">
              Hyperlocal Expansion
            </h4>
            <p className="text-sm text-gray-700">
              Rollouts near colleges, IT parks & malls with central kitchens.
            </p>
          </div>
          <div className="bg-offwhite p-6 shadow-md text-center">
            <Lightbulb size={28} className="text-red-dark mx-auto" />
            <h4 className="mt-3 font-semibold text-red-dark">Menu Innovation</h4>
            <p className="text-sm text-gray-700">
              AI-driven feedback to scale only bestsellers.
            </p>
          </div>
          <div className="bg-offwhite p-6 shadow-md text-center">
            <Users size={28} className="text-red-dark mx-auto" />
            <h4 className="mt-3 font-semibold text-red-dark">
              Community-First DNA
            </h4>
            <p className="text-sm text-gray-700">
              Meme marketing, CrushCoins, campus clubs & youth activations.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-offwhite py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-heading text-center text-red-dark mb-10">
          Meet Our Leadership Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Suraj Kumar Rai", role: "Chief Executive Officer (CEO)" },
            { name: "Dhaneesh K Dixit", role: "Chief Finance Officer (CFO)" },
            { name: "Avinash Shukla", role: "Chief Operations Officer (COO)" },
            { name: "Vikash Rai", role: "Chief Marketing Officer (CMO)" },
          ].map((m, i) => (
            <div
              key={i}
              className="bg-white shadow-md p-6 text-center border-t-4 border-red-dark"
            >
              <UserCheck size={32} className="text-red-dark mx-auto mb-3" />
              <h3 className="font-heading text-lg text-red-dark">{m.name}</h3>
              <p className="text-sm text-gray-700">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INVESTMENT MODELS */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading text-center text-red-dark mb-8">
            Investment Models & ROI
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <InvestmentCard
              title="Cafe Model (300 sq.ft.)"
              items={[
                { label: "Brand Fees (5 yrs)", value: "₹5,00,000" },
                { label: "Total Investment", value: "₹25,50,000 approx" },
                { label: "Estimated ROI", value: "~71.1%" },
                { label: "Payback", value: "16.8 months" },
              ]}
            />
            <InvestmentCard
              title="Cafeteria Model (600 sq.ft.)"
              items={[
                { label: "Brand Fees (5 yrs)", value: "₹5,00,000" },
                { label: "Total Investment", value: "₹36,75,000 approx" },
                { label: "Estimated ROI", value: "~76.1%" },
                { label: "Payback", value: "15.7 months" },
              ]}
            />
            <InvestmentCard
              title="FICO Model"
              items={[
                {
                  label: "Revenue Share",
                  value: "1% of investment OR 15% of gross sales",
                },
                { label: "Operations", value: "Fully company operated" },
                { label: "Inventory", value: "First-time managed by partner" },
                {
                  label: "Franchise Role",
                  value: "Investor (no day-to-day ops)",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* MARKET */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-heading text-center text-red-dark mb-10">
          The Market Opportunity
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-offwhite p-6 shadow-md text-center">
            <TrendingUp size={30} className="text-red-dark mx-auto mb-2" />
            <h4 className="font-semibold text-red-dark">Fast Food Boom</h4>
            <p className="text-gray-700 text-sm">
              Burgers & sandwiches = 33% of India’s QSR market.
            </p>
          </div>
          <div className="bg-offwhite p-6 shadow-md text-center">
            <PieChart size={30} className="text-red-dark mx-auto mb-2" />
            <h4 className="font-semibold text-red-dark">Smart ROI</h4>
            <p className="text-gray-700 text-sm">
              Cafe ROI ~71% • Cafeteria ROI ~76% (payback 15–17 months).
            </p>
          </div>
          <div className="bg-offwhite p-6 shadow-md text-center">
            <Award size={30} className="text-red-dark mx-auto mb-2" />
            <h4 className="font-semibold text-red-dark">Trusted Model</h4>
            <p className="text-gray-700 text-sm">
              Comprehensive training, marketing & operational support.
            </p>
          </div>
        </div>
      </section>

      {/* ROAD AHEAD */}
      <section className="bg-red-dark text-white py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-heading text-center mb-10">
          The Road Ahead
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white text-red-dark p-6 shadow-md text-center">
            <MapPin size={28} className="mx-auto mb-2" />
            <h4 className="font-semibold">Operating Cities</h4>
            <p className="text-gray-700">Lucknow (5+) · Bangalore (14+)</p>
          </div>
          <div className="bg-white text-red-dark p-6 shadow-md text-center">
            <Rocket size={28} className="mx-auto mb-2" />
            <h4 className="font-semibold">Upcoming Expansion</h4>
            <p className="text-gray-700">
              Prayagraj, Varanasi, Gorakhpur, Kanpur, Noida, Ayodhya, Agra...
            </p>
          </div>
          <div className="bg-white text-red-dark p-6 shadow-md text-center">
            <Handshake size={28} className="mx-auto mb-2" />
            <h4 className="font-semibold">Partner Network</h4>
            <p className="text-gray-700">25+ partners and growing fast.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center py-16 bg-offwhite px-6">
        <h2 className="text-2xl md:text-3xl font-heading text-red-dark mb-4">
          Ready to Start Your Franchise?
        </h2>
        <p className="text-gray-700 mb-6 font-sub max-w-2xl mx-auto">
          Join the CrushBurg family and turn your entrepreneurial dreams into
          reality with our proven business model, strong ROI, and complete
          support system.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <WhatsAppButton text="Hi CrushBurg Team, I am ready to start my franchise journey!" />
          <a
            href={MANUAL_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-red-dark px-5 py-3 rounded-full shadow-md hover:bg-offwhite transition"
          >
            <FileText size={18} /> View Franchise Manual
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          For franchising queries: +91 7619910103 • connect@crushburg.com
        </p>
      </section>
    </main>
  );
};

export default Franchise;



