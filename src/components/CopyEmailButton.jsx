
import { useState } from "react";
import { AnimatePresence, easeIn, easeInOut, motion } from "motion/react";

const CopyEmailButton = () => {
  const email = "dev.harsimran@gmail.com";
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <motion.button
      className="relative px-2 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden shadow-sm shadow-gray-500" 
      onClick={handleCopy}
      whileHover={{y:-5, transition:{ease: easeIn, duration: 0.5}}}
      whileTap={{scale:1.05}}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.1, ease: easeInOut }}
            key="copy"
          >
            <img src="/assets/copy-done.svg" alt="copy image" className="w-5" />
            Email Address Copied
          </motion.p>
        ) : (
          <motion.p
            key="copied"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img src="/assets/copy.svg" alt="copy image" className="w-5" />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
