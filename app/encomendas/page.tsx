"use client";

import { useState } from "react";
import { db } from "@/services/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function EncomendasPage() {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        telefone: "",
        morada: "",
        evento: "",
        detalhes: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addDoc(collection(db, "encomendas"), {
                ...form,
                createdAt: Timestamp.now(),
            });
            setSuccess(true);
            setForm({ nome: "", email: "", telefone: "", morada: "", evento: "", detalhes: "" });
        } catch (error) {
            console.error("Erro ao enviar encomenda:", error);
            alert("Ocorreu um erro. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" text-white">
            <Navbar />
            <div className="min-h-screen bg-green-600/80 text-white flex justify-center items-center p-10">
                <form
                    onSubmit={handleSubmit}
                    className="bg-green-700 p-8 rounded-lg shadow-lg w-full max-w-lg space-y-4"
                >
                    <h1 className="text-2xl font-bold mb-4">Faça sua Encomenda</h1>

                    {success && <p className="text-green-200 font-semibold">Encomenda enviada com sucesso!</p>}

                    <input
                        type="text"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Nome completo"
                        className="w-full p-3 rounded bg-green-600 text-white placeholder-green-200"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-3 rounded bg-green-600 text-white placeholder-green-200"
                        required
                    />

                    <input
                        type="tel"
                        name="telefone"
                        value={form.telefone}
                        onChange={handleChange}
                        placeholder="Número de telefone"
                        className="w-full p-3 rounded bg-green-600 text-white placeholder-green-200"
                        required
                    />

                    <input
                        type="text"
                        name="morada"
                        value={form.morada}
                        onChange={handleChange}
                        placeholder="Morada"
                        className="w-full p-3 rounded bg-green-600 text-white placeholder-green-200"
                        required
                    />

                    <select
                        name="evento"
                        value={form.evento}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-green-600 text-white"
                        required
                    >
                        <option value="">Tipo de evento</option>
                        <option value="Casamento">Casamento</option>
                        <option value="Aniversário">Aniversário</option>
                        <option value="Decoração Residencial">Decoração Residencial</option>
                        <option value="Outro">Outro</option>
                    </select>

                    <textarea
                        name="detalhes"
                        value={form.detalhes}
                        onChange={handleChange}
                        placeholder="Descreva o tipo, cor ou outras preferências da planta"
                        className="w-full p-3 rounded bg-green-600 text-white placeholder-green-200 h-24 resize-none"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-500 hover:bg-green-400 text-white font-semibold p-3 rounded transition disabled:opacity-50"
                    >
                        {loading ? "Enviando..." : "Enviar Encomenda"}
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}
