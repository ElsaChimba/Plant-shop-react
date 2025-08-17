"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Plant {
  id: number;
  common_name: string;
  description: string;
  image_url: string;
  usage: string[];
}

export default function PlantCard({ plant }: { plant: Plant }) {
  return (
    <motion.div
      className="bg-green-700 rounded-lg shadow-lg overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-48">
        <Image
          src={plant.image_url || "/placeholder.png"}
          alt={plant.common_name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{plant.common_name}</h3>
        <p className="text-sm mb-2">{plant.description || "Sem descrição"}</p>
        <p className="text-sm font-medium">
          Uso: {plant.usage?.join(", ") || "Não informado"}
        </p>
      </div>
    </motion.div>
  );
}
