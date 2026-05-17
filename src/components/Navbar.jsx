function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/20 bg-[#2b1b13]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <h1 className="text-xl font-bold tracking-wide">CoffeeVision AI</h1>

        <div className="hidden gap-8 text-sm md:flex">
          <a href="#problema" className="hover:text-[#d6a85f]">Problema</a>
          <a href="#solucion" className="hover:text-[#d6a85f]">Solución</a>
          <a href="#proceso" className="hover:text-[#d6a85f]">Proceso</a>
          <a href="#hardware" className="hover:text-[#d6a85f]">Hardware</a>
          <a href="#software" className="hover:text-[#d6a85f]">Software</a>
          <a href="#contacto" className="hover:text-[#d6a85f]">Contacto</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
