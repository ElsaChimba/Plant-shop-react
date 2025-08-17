"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Plant {
  id: number;
  common_name: string;
  scientific_name: string;
  image_url?: string;
  cycle?: string;
  watering?: string;
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
      {plant.image_url && (
        <div className="relative w-full h-48">
          <Image
            src={plant.image_url}
            alt={plant.common_name || plant.scientific_name || "Planta"}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">
          {plant.common_name || plant.scientific_name}
        </h3>
        <p className="text-sm mb-2">
          {plant.scientific_name}
        </p>
        {plant.cycle && <p className="text-sm">Ciclo: {plant.cycle}</p>}
        {plant.watering && <p className="text-sm">Regar: {plant.watering}</p>}
      </div>
    </motion.div>
  );
}
