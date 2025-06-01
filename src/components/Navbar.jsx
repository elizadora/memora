import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <header className="flex justify-between items-center bg-oxford-blue text-platium drop-shadow-md py-6 px-8 lg:px-10 font-roboto-slab">
      <h1 className="font-bold text-[28px]">MEMORA</h1>
      <div className="hidden lg:flex items-center gap-7 w-1/4 font-medium">
        <button className="flex-1 rounded-xl text-base border-2 border-orange px-8 py-2 cursor-pointer hover:bg-orange hover:text-oxford-blue transition ease-in duration-300">Entrar</button>
        <button className="flex-1 rounded-xl text-base bg-orange px-8 py-2 cursor-pointer hover:opacity-90 text-oxford-blue transition ease-in duration-300">Criar Conta</button>
      </div>
      <svg className="w-10 h-10 cursor-pointer lg:hidden block" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
      </svg>
      
      <div className={`absolute lg:hidden top-20 left-0 w-full bg-oxford-blue transform transition-transform flex items-center flex-col gap-7 p-10
        ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
        <button className="w-52 rounded-xl border-2 border-orange px-10 py-2 cursor-pointer hover:bg-orange hover:text-oxford-blue transition ease-in duration-300">Entrar</button>
        <button className="w-52 rounded-xl bg-orange px-10 py-2 cursor-pointer hover:opacity-95 text-oxford-blue transition ease-in duration-300">Criar Conta</button>
      </div>

    </header>
  );
}
