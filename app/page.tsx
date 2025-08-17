"use client";

import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/footer';
import Servicos from '@/components/servicos';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-700 via-green-600 to-green-500 text-white">
      <Navbar />
      <main className="flex flex-col md:flex-row items-center px-10 py-20 gap-10">
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Bem-vindo à E_PlantShop
          </motion.h1>

          <motion.p
            className="text-lg"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fundada em <span className="font-semibold">2025</span>, nossa missão é trazer a beleza e o frescor da natureza para sua casa, jardim ou eventos especiais.
            Cada planta e flor que oferecemos é cuidadosamente selecionada para proporcionar charme, bem-estar e sofisticação ao seu espaço.
          </motion.p>

          <motion.p
            className="text-lg"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Quer transformar seu ambiente com nossas plantas?
            <Link href="/encomendas" className="ml-2 inline-block bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded transition">
              Encomendar Agora
            </Link>
          </motion.p>
        </div>

        <div className="md:w-1/2">
          <Image
            src="/suporte-de-plantas.webp"
            alt="Suporte de plantas"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>

      <Servicos />

      <Footer />
    </div>
  );
}
