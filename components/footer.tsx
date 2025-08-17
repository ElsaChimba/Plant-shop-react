"use client";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { db } from "@/services/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";

export default function Footer() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "newsletter"), {
        ...form,
        createdAt: Timestamp.now(),
      });
      setSuccess(true);
      setForm({ nome: "", email: "", telefone: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-green-800 text-white px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-xl font-bold">Sobre Nós</h3>
          <p>
            Somos apaixonados por plantas e flores. Nosso objetivo é trazer a
            beleza da natureza para sua casa, jardim ou eventos especiais.
          </p>
          <p>Localização: Luanda- Angola, Mutamba rua da missão</p>
          <p className="text-sm">Feito por Elsa Chimba</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.facebook.com/ely.chimba.1"
              className="hover:text-green-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/elsa_chimba/"
              className="hover:text-green-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/elsa-chimba-1a25012a0/"
              className="hover:text-green-200"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 bg-green-700/50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          {success && (
            <p className="text-green-200 mb-2">Inscrito com sucesso!</p>
          )}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={form.nome}
              onChange={handleChange}
              className="px-4 py-2 rounded bg-green-800 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-2 rounded bg-green-800 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="tel"
              name="telefone"
              placeholder="Número de Telefone"
              value={form.telefone}
              onChange={handleChange}
              className="px-4 py-2 rounded bg-green-800 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 hover:bg-green-500 transition py-2 rounded font-semibold disabled:opacity-50"
            >
              {loading ? "Enviando..." : "Inscrever-se"}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
