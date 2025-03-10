import React from "react";
import { motion } from "framer-motion";

export function Programs() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1 className="text-3xl font-bold text-center">Programmes et Ressources</h1>
      <p className="text-lg text-center mt-4">Découvrez des approches pour mieux gérer la dépression : thérapies, exercices et témoignages.</p>
    </motion.div>
  );
}

export default Programs;
