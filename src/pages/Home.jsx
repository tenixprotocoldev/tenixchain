import { useState } from "react";
import LinkForm from "../components/LinkForm";
import LinkDisplay from "../components/LinkDisplay";
import { motion } from "framer-motion";

export default function Home() {
  const [link, setLink] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full text-center"
      >
        <h1 className="text-4xl font-extrabold mb-4 tracking-wide">
          x402 Payment Link Generator
        </h1>
        <p className="text-gray-400 mb-8 text-sm">
          Create and share crypto payment links instantly — powered by the Tenix x402 protocol.
        </p>

        <LinkForm onLinkGenerate={setLink} />
        <LinkDisplay link={link} />

        <div className="mt-10 text-xs text-gray-500">
          Made with ❤️ using <span className="text-blue-400">x402</span> Protocol
        </div>
      </motion.div>
    </div>
  );
}
