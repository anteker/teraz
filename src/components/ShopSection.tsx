import skyblock from '../assets/skyblock.png';
import survival from '../assets/survival.png';
import duels from '../assets/duels.png';
import gotoshop from '../assets/gotoshop.png';

export const ShopSection = () => {
  return (
    <section className="py-20 px-4 bg-white-primary">
      <div id="shop-section" className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 minecraft-text text-black-primary">
          <img src={gotoshop} className="w-[1000px] h-auto mx-auto" alt="dolacz do nas" />
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* IndigoMC Shop Card */}
          <div className="bg-black-primary border-4 border-white-primary rounded-none p-6 hover:transform hover:scale-105 transition-transform">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white-primary mb-4">
                <img src={duels} alt="IndigoMC" className="w-48 h-48 mx-auto object-contain" />
              </h3>
              <div className="mb-6">
                <div className="text-4xl font-bold minecraft-text text-indigo-primary drop-shadow-lg">
                  TRYB
                  <br />
                  <span className="text-white-primary">DUELS</span>
                </div>
              </div>
              <button className="minecraft-button bg-indigo-primary hover:bg-indigo-dark text-white-primary border-white-primary w-full">
                SKLEP
              </button>
            </div>
          </div>

          {/* Duels Shop Card */}
          <div className="bg-black-primary border-4 border-indigo-primary rounded-none p-6 hover:transform hover:scale-105 transition-transform">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white-primary mb-4">
                <img src={skyblock} alt="Duels" className="w-68 h-48 mx-auto object-contain" />
              </h3>
              <div className="mb-6">
                <div className="text-4xl font-bold minecraft-text text-indigo-primary drop-shadow-lg">
                  TRYB
                  <br />
                  <span className="text-white-primary">SKYBLOCK</span>
                </div>
              </div>
              <button className="minecraft-button bg-indigo-primary hover:bg-indigo-dark text-white-primary border-white-primary w-full">
                SKLEP
              </button>
            </div>
          </div>

          {/* Survival Shop Card */}
          <div className="bg-black-primary border-4 border-white-primary rounded-none p-6 hover:transform hover:scale-105 transition-transform">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white-primary mb-4">
                <img src={survival} alt="Survival" className="w-68 h-48 mx-auto object-contain" />
              </h3>
              <div className="mb-6">
                <div className="text-4xl font-bold minecraft-text text-indigo-primary drop-shadow-lg">
                  TRYB
                  <br />
                  <span className="text-white-primary">SURVIVAL</span>
                </div>
              </div>
              <button className="minecraft-button bg-indigo-primary hover:bg-indigo-dark text-white-primary border-white-primary w-full">
                SKLEP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
