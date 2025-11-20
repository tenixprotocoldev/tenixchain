import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
}
