import { useState } from "react";
import { Logo } from './Logo';
import { FaDiscord } from "react-icons/fa";
import heroBackgrounds from '../assets/indigo-hero-bg.png';

export const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("indigomc.pl")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch(() => {
        // możesz obsłużyć błąd tutaj jeśli chcesz
      });
  };

  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBackgrounds})`,
        backgroundSize: 'cover',
        backgroundPosition: 'calc(50% + 65px) center',
        backgroundAttachment: 'fixed'
      }}
    >
      
      {/* Background decoration elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-indigo-primary/20 pixelated opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-white-primary/20 pixelated opacity-50"></div>
      <div className="absolute top-40 left-20 w-8 h-8 bg-indigo-dark/20 pixelated opacity-50"></div>
      
      <Logo />
      
      <h2 className="text-2xl md:text-3xl font-bold text-white-primary mb-12 minecraft-text text-center">
        Twoja ulubiona sieć serwerów!
      </h2>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <button
          className="minecraft-button bg-indigo-primary hover:bg-indigo-dark text-white-primary border-white-primary font-bold px-8 py-4 text-lg"
          onClick={handleCopy}
        >
          INDIGOMC.PL
          <div className="text-xs mt-1">{copied ? "Skopiowano!" : "SKOPIUJ ADRES IP"}</div>
        </button>
        
        <button 
          className="minecraft-button bg-white-primary hover:bg-white-muted text-black-primary border-black-primary font-bold px-8 py-4 text-lg" 
          onClick={() => window.open('https://discord.gg/UZdzNwxX8Y', '_blank')}
        >
          <FaDiscord size={32} />
        </button>
      </div>
      
      <button className="minecraft-button bg-black-primary hover:bg-black-light text-white-primary border-indigo-primary font-bold px-12 py-4 text-xl">
        👥 GRACZE ONLINE 42
      </button>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-indigo-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-indigo-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
