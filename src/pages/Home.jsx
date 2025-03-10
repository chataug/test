import React from "react";
import { motion } from "framer-motion";

export function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1 className="text-3xl font-bold text-center">Vivre avec la Dépression</h1>
      <p className="text-lg text-center mt-4">Un espace de soutien et de ressources pour mieux comprendre et surmonter la dépression.</p>
    </motion.div>
  );
}

export default Home;
