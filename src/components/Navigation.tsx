import head from '../assets/head.png';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black-primary/90 backdrop-blur-sm border-b-2 border-indigo-primary">
      <div className="container mx-auto px-4 py-3 relative">
        {/* Linki na środku z logo pośrodku */}
        <div className="flex justify-center items-center">
          <div className="hidden md:flex gap-6 items-center -translate-x-">
            <a
              href="#"
              className="text-lg md:text-xl font-bold text-white-primary hover:text-indigo-primary transition-colors minecraft-text"
            >
              STRONA GŁÓWNA
            </a>

            {/* Logo jako obrazek */}
            <div className="w-10 h-10">
              <img src={head} alt="Logo serwera" className="w-full h-full object-contain" />
            </div>

            <a
              href="#"
              className="text-lg md:text-xl font-bold text-white-primary hover:text-indigo-primary transition-colors minecraft-text"
            >
              REGULAMIN
            </a>
          </div>
        </div>

        {/* Przycisk po prawej */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <button className="minecraft-button bg-indigo-primary hover:bg-indigo-dark text-white-primary border-white-primary">
            SKLEP
          </button>
        </div>
      </div>
    </nav>
  );
};
