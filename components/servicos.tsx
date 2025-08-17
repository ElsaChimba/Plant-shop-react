"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const servicos = [
  {
    title: "Casamentos",
    description: "Decoração floral personalizada para tornar seu dia inesquecível.",
    image: "/casamento.webp",
  },
  {
    title: "Eventos",
    description: "Plantas e flores para aniversários, festas e eventos corporativos.",
    image: "/eventos.webp",
  },
  {
    title: "Decoração Residencial",
    description: "Transforme sua casa com nossos arranjos e plantas exclusivas.",
    image: "/casa.jpg",
  },
];

export default function Servicos() {
  return (
    <section className="px-10 py-20 bg-green-600/80 text-white">
      <h2 className="text-3xl font-bold mb-12 text-center">Nossos Serviços</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {servicos.map((servico, index) => (
          <motion.div
            key={index}
            className="bg-green-700 rounded-lg shadow-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="relative w-full h-48">
              <Image
                src={servico.image}
                alt={servico.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{servico.title}</h3>
              <p>{servico.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
