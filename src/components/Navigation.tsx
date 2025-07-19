import head from '../assets/head.png';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';
import user4 from '../assets/user4.png';
import stronaglowna from '../assets/stronaglowna.png';
import regulamin from '../assets/regulamin.png';
import voucher from '../assets/voucher.png';
import sklep from '../assets/sklep.png';
import dolaczdonas from '../assets/dolaczdonas.png';

export const Navigation = () => {
  return (
<nav className="fixed top-0 left-0 right-0 z-40 bg-black-primary/90 backdrop-blur-sm border-b-2 border-indigo-primary">
  <div className="container mx-auto px-4 py-3 relative">
    <div className="flex justify-between items-center">

      <div className="flex items-center gap-6">
        <div className="w-10 h-10">
          <img src={head} alt="Logo serwera" className="w-full h-full object-contain" />
        </div>
        <a
          href="#"
          className="text-lg md:text-xl font-bold text-white-primary transition-colors duration-300 rounded minecraft-text flex items-center gap-2 px-2 py-1"
          style={{ 
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#a166ff'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <img
            src={stronaglowna}
            alt="Strona Główna"
            className="h-8 md:h-4"
          />
        </a>

        <a
          href="#"
          className="text-lg md:text-xl font-bold text-white-primary transition-colors duration-300 rounded minecraft-text flex items-center gap-2 px-2 py-1"
          style={{ 
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#a166ff'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <img
            src={regulamin}
            alt="Regulamin"
            className="h-8 md:h-4"
          />
        </a>

        <a
          href="#voucher-section"
          className="text-lg md:text-xl font-bold text-white-primary transition-colors duration-300 rounded minecraft-text flex items-center gap-2 px-2 py-1"
          style={{ 
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#a166ff'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <img
            src={voucher}
            alt="Voucher"
            className="h-8 md:h-4"
          />
        </a>
      </div>

      <div className="flex items-center space-x-4">
<div
  onClick={() => window.open('https://discord.gg/UZdzNwxX8Y', '_blank')}
  className="flex items-center space-x-3 px-6 py-3 border-2 border-footer-foreground/30 rounded-full hover:border-footer-foreground/50 transition-all duration-300 cursor-pointer group"
>
  <span className="text-footer-foreground font-medium underline hover:text-footer-muted transition-colors">
    <img src={dolaczdonas} className="w-48 h-auto mx-auto" alt="dolacz do nas" />
  </span>
  <div className="flex items-center space-x-[-8px] relative">
    <img
      src={user1}
      alt="jestem"
      className="w-8 h-8 rounded-full object-cover border-2 border-footer transition-transform duration-300 ease-out group-hover:translate-x-[-6px] z-40"
    />
    <img
      src={user2}
      alt="whiteoutit"
      className="w-8 h-8 rounded-full object-cover border-2 border-footer transition-transform duration-300 ease-out group-hover:translate-x-[-4px] z-30"
    />
    <img
      src={user3}
      alt="Użytkownik 3"
      className="w-8 h-8 rounded-full object-cover border-2 border-footer transition-transform duration-300 ease-out group-hover:translate-x-[-2px] z-20"
    />
    <img
      src={user4}
      alt="Więcej użytkowników"
      className="w-8 h-8 rounded-full object-cover border-2 border-footer transition-transform duration-300 ease-out group-hover:translate-x-0 z-10"
    />
  </div>
</div>
<button
  style={{
    backgroundColor: '#623d89',
    border: '2px solid #333333',
    borderRadius: '8px',
    color: '#fff',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    outline: 'none',
    userSelect: 'none',
  }}
  onMouseEnter={e => {
    e.currentTarget.style.backgroundColor = '#a166ff';
  }}
  onMouseLeave={e => {
    e.currentTarget.style.backgroundColor = '#623d89';
  }}
>
  <a href="#shop-section">
  <img src={sklep} alt="sklep" style={{ width: '110px', height: '24px', pointerEvents: 'none' }} />
  </a>
</button>


      </div>
    </div>
  </div>
</nav>

  );
};
