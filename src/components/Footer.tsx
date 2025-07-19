import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';
import user4 from '../assets/user4.png';

export const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4">
          <div className="text-sm text-footer-muted">
            <p className="mb-2">
              <span className="font-medium text-footer-foreground">PL</span> - Serwer indigomc.pl nie jest w żaden sposób powiązany z Mojang ani Microsoft. Dochody ze sklepu przekazywane są na rzecz właściciela serwera w celu utrzymania serwera.
            </p>
            <p>
              <span className="font-medium text-footer-foreground">EN</span> - The indigomc.pl server is in no way affiliated with Mojang or Microsoft. Income from the store are transfered to the server owner for maintenance purposes.
            </p>
          </div>
          
          <div className="pt-4 border-t border-footer-foreground/20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-footer-foreground">
                © 2025 IndigoMC.pl | Wszelkie prawa zastrzeżone
              </p>
              
              {/* Center - Join button with user avatars */}
              <div className="flex items-center space-x-4 group">
                <div className="flex items-center space-x-3 px-6 py-3 border-2 border-footer-foreground/30 rounded-full hover:border-footer-foreground/50 transition-all duration-300">
                  <span className="text-footer-foreground font-medium underline cursor-pointer hover:text-footer-muted transition-colors">
                    Dołącz do nas
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
              </div>
              
              <div className="flex items-center gap-4 text-sm text-footer-muted">
                <span>Twórca:</span>
                <span className="text-footer-foreground">jestem</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
