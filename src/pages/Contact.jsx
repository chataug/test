import React from "react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1 className="text-3xl font-bold text-center">Contactez-nous</h1>
      <p className="text-lg text-center mt-4">Besoin de parler ? Laissez-nous un message et nous vous répondrons au plus vite.</p>
      <form className="mt-6 flex flex-col items-center">
        <input className="border p-2 w-80 mb-4" type="text" placeholder="Votre nom" />
        <input className="border p-2 w-80 mb-4" type="email" placeholder="Votre email" />
        <textarea className="border p-2 w-80 mb-4" rows="4" placeholder="Votre message"></textarea>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Envoyer</button>
      </form>
    </motion.div>
  );
}

export default Contact;
