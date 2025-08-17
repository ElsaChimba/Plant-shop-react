"use client";
import Image from "next/image"
import Link from "next/link";



export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-10 py-6 bg-green-800/80 sticky top-0 z-50">
      <Image
        src="/logo.png"
        alt='logotipo'
        width={120}
        height={120}
      />
      <nav className="space-x-8 ">
        <Link href="/plantas" className="hover:text-green-200 transition border-b border-green-600">
          Plantas
        </Link>
        <Link href="/flores" className="hover:text-green-200 transition border-b border-green-600">
          Flores
        </Link>
      </nav>
    </header>
  );
}
