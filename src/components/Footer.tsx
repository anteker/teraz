export const Footer = () => {
  return (
    <footer className="bg-black-primary border-t-4 border-indigo-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="text-4xl font-bold minecraft-text text-indigo-primary mb-4">
            INDIGO MC
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-white-primary">
          <div>
            <h4 className="text-indigo-primary font-bold mb-4">Nawigacja</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-primary transition-colors">Strona główna</a></li>
              <li><a href="#" className="hover:text-indigo-primary transition-colors">Regulamin</a></li>
              <li><a href="#" className="hover:text-indigo-primary transition-colors">Sklep</a></li>
              <li><a href="#" className="hover:text-indigo-primary transition-colors">Discord</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-indigo-primary font-bold mb-4">Serwer</h4>
            <ul className="space-y-2 text-sm">
              <li>IP: indigomc.pl</li>
              <li>Wersja: 1.20.x</li>
              <li>Gracze online: 42</li>
              <li>Tryb: Survival</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-indigo-primary font-bold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-primary transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-indigo-primary transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-indigo-primary transition-colors">Forum</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-8 border-t border-indigo-primary/30">
          <p className="text-white-muted text-sm">
            © 2024 IndigoMC. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};