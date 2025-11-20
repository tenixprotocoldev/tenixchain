import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Send as SendIcon, Wallet } from "lucide-react";

export default function Send() {
  const [searchParams] = useSearchParams();
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    const to = searchParams.get("to");
    const amount = searchParams.get("amount");
    const msg = searchParams.get("msg");

    if (to && amount) {
      setPayment({ to, amount, msg });
    }
  }, [searchParams]);

  if (!payment) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-black to-gray-900">
        <p className="text-gray-400">Invalid or missing payment details.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl max-w-md w-full text-center border border-white/10 shadow-xl">
        <div className="flex justify-center mb-4">
          <Wallet className="text-blue-400 w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Payment Request</h2>
        <p className="text-gray-400 text-sm mb-6">
          You are about to send crypto using the x402 protocol.
        </p>

        <div className="text-left mb-4 space-y-2">
          <p>
            <span className="text-gray-400">To:</span> <span className="font-mono">{payment.to}</span>
          </p>
          <p>
            <span className="text-gray-400">Amount:</span>{" "}
            <span className="font-semibold text-blue-400">{payment.amount}</span>
          </p>
          {payment.msg && (
            <p>
              <span className="text-gray-400">Message:</span> {payment.msg}
            </p>
          )}
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl flex items-center justify-center gap-2 w-full transition-all">
          <Send className="w-4 h-4" /> Confirm & Send
        </button>
      </div>

      <p className="text-gray-500 text-xs mt-6">
        Powered by <span className="text-blue-400">x402</span> — Secure Web3 Payments.
      </p>
    </motion.div>
  );
}
