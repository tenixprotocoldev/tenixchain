import { useState } from "react";
import { generateLink } from "../utils/generateLink";

export default function LinkForm({ onLinkGenerate }) {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const link = generateLink(to, amount, message);
    onLinkGenerate(link);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg flex flex-col gap-3">
      <input value={to} onChange={(e) => setTo(e.target.value)} placeholder="Recipient Address" className="p-2 rounded bg-transparent border border-gray-600"/>
      <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount (SOL/ETH)" className="p-2 rounded bg-transparent border border-gray-600"/>
      <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Optional Message" className="p-2 rounded bg-transparent border border-gray-600"/>
      <button className="bg-blue-500 hover:bg-blue-600 transition text-white p-2 rounded-xl mt-3">Generate Link</button>
    </form>
  );
}
