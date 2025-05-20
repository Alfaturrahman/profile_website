"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <>
      <motion.h1
        className="text-3xl font-bold mb-8 text-[#00000]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="flex flex-col space-y-4 text-[#00000]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p>
          📧 Email:{" "}
          <a
            href="mailto:alfaturrahman@gmail.com"
            className="text-[#00000] hover:text-[#00000] hover:underline"
          >
            Alfatur147@gmail.com
          </a>
        </p>
        <p>
          📱 WhatsApp:{" "}
          <a
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00000] hover:text-[#00000] hover:underline"
          >
            +62 85264099824
          </a>
        </p>
        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/alfaturrahman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00000] hover:text-[#00000] hover:underline"
          >
            linkedin.com/in/alfaturrahman
          </a>
        </p>
        <p>
          💼 GitHub:{" "}
          <a
            href="https://github.com/Alfaturrahman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00000] hover:text-[#00000] hover:underline"
          >
            github.com/Alfaturrahman
          </a>
        </p>
      </motion.div>
    </>
  );
}
