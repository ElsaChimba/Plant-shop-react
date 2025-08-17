import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

       
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-xl font-bold">Sobre Nós</h3>
          <p>
            Somos apaixonados por plantas e flores. Nosso objetivo é trazer a beleza da natureza para sua casa, jardim ou eventos especiais.
          </p>
          <p>
            Localização: Luanda- Angola, Mutamba rua da missão
          </p>
          <p className="text-sm">Feito por Elsa Chimba</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-green-200"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-200"><FaInstagram /></a>
            <a href="#" className="hover:text-green-200"><FaLinkedin /></a>
          </div>
        </div>

        <div className="md:w-1/2 bg-green-700/50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nome"
              className="px-4 py-2 rounded bg-green-800 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 rounded bg-green-800 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="tel"
              placeholder="Número de Telefone"
              className="px-4 py-2 rounded bg-green-800 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 transition py-2 rounded font-semibold"
            >
              Inscrever-se
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}
