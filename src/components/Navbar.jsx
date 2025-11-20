import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Wallet } from "lucide-react";
import logo from "/tenix-logo.png"; // ← place your Tenix logo in /public or /src/assets

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Receive", path: "/send" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Tenix Logo"
            className="w-8 h-8 rounded-full border border-white/20"
          />
          <h1 className="font-bold text-lg text-white">
            Tenix <span className="text-blue-400">x402</span>
          </h1>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm transition-all ${
                location.pathname === item.path
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Wallet / Button */}
        <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm transition-all">
          <Wallet className="w-4 h-4" /> Connect
        </button>
      </div>
    </motion.nav>
  );
}
