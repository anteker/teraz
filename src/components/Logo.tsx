import indigo from '../assets/indigomc.png';

export const Logo = () => {
  return (
    <div className="text-center mb-8">
      <div className="relative inline-block">
        <h1 className="text-6xl md:text-8xl font-bold minecraft-text mb-4">
          <img src={indigo} alt="Logo" className="mx-auto w-80 md:w-90 mb-2" />
        </h1>
        <div className="absolute -top-4 -right-4 text-indigo-primary text-xl">
          
        </div>
      </div>
    </div>
  );
};