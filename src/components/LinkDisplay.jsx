import { useNavigate } from "react-router-dom";
import { Copy } from "lucide-react";


export default function LinkDisplay({ link }) {
  const navigate = useNavigate();
  if (!link) return null;

  const copyLink = () => {
    navigator.clipboard.writeText(link);
    alert("Link copied!");
  };

  const openPayment = (e) => {
    e.preventDefault();
    const url = new URL(link);
    navigate(url.pathname + url.search, { replace: true });
  };

  return (
    <div className="mt-6 bg-black/30 p-4 rounded-xl text-center">
      <p className="text-sm mb-2 text-gray-300">Your x402 Payment Link:</p>
      <div className="flex flex-col gap-3 items-center justify-center">
        <button
          onClick={openPayment}
          className="bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-2 rounded-xl"
        >
          Open Payment
        </button>
        <div className="flex items-center justify-center gap-2 text-blue-400">
          <span className="truncate max-w-xs">{link}</span>
          <Copy
            onClick={copyLink}
            className="cursor-pointer text-gray-400 hover:text-white"
          />
        </div>
      </div>
    </div>
  );
}
