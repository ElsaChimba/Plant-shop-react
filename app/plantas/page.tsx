"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PlantCard from "@/components/plantCard";

export default function PlantasPage() {
  const [plantas, setPlantas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/plantas")
      .then(res => res.json())
      .then(data => {
        setPlantas(data || []);
        setLoading(false);
      })
      .catch(() => {
        setPlantas([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-green-600/80 text-white">
      <Navbar />
      <h1 className="text-3xl font-bold text-center my-10">Plantas</h1>
      {loading ? (
        <p className="text-center">Carregando...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 px-10 pb-20">
          {plantas.map(plant => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}
