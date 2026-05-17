function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#120b07] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row">
        <div>
          <p className="text-lg font-black">CoffeeVision AI</p>
          <p className="text-sm text-[#c7b2a0]">
            Inteligencia artificial aplicada al café verde
          </p>
        </div>

        <p className="text-sm text-[#c7b2a0]">
          © 2026 · Proyecto tecnológico
        </p>
      </div>
    </footer>
  );
}

export default Footer;
