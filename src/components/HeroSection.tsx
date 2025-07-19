import { useState, useEffect } from "react";
import { Logo } from './Logo';
import { LiaDiscord } from "react-icons/lia";
import { HiOutlineStatusOnline } from "react-icons/hi";

import heroBackgrounds from '../assets/indigo-hero-bg.png';
import siecserwerow from '../assets/siecserwerow.png';
import copyip from '../assets/copyip.png';
import copy from '../assets/copy.png';
import copyd from '../assets/copied.png';
import aktywni from '../assets/aktywnigracze.png';

export const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("indigomc.pl")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch(() => {
      });
  };

  const [playersOnline, setPlayersOnline] = useState(null);

  useEffect(() => {
    fetch('https://api.mcsrvstat.us/3/83.168.105.219:20038')
      .then(res => res.json())
      .then(data => {
        if (data.online) {
          setPlayersOnline(data.players.online);
        } else {
          setPlayersOnline('offline');
        }
      })
      .catch(() => setPlayersOnline('error'));
  }, []);
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
      
      <div className="absolute top-20 left-10 w-16 h-16 bg-indigo-primary/20 pixelated opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-white-primary/20 pixelated opacity-50"></div>
      <div className="absolute top-40 left-20 w-8 h-8 bg-indigo-dark/20 pixelated opacity-50"></div>
      
      <Logo />
      
<h2 className="text-2xl md:text-3xl font-bold text-white-primary mb-12 minecraft-text text-center">
  <img src={siecserwerow} className="w-[640px] h-auto mx-auto" alt="Sieć serwerów" />
</h2>

      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
<button
  style={{
    backgroundColor: '#623d89',
    border: '2px solid #333333',
    borderRadius: '8px',
    color: '#fff',
    padding: '12px 16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    outline: 'none',
    boxSizing: 'border-box',
  }}
  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#a166ff')}
  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#623d89')}
  onClick={handleCopy}
>
  <img
    src={copyip}
    alt="Sieć serwerów"
    className="w-44 h-auto"
    style={{ display: 'block' }}
  />
  <div className="text-xs" style={{ lineHeight: 'normal' }}>
    {copied ? (
      <img
        src={copyd}
        alt="skopiowane ip serwera"
        className="w-32 h-auto"
        style={{ display: 'block' }}
      />
    ) : (
      <img
        src={copy}
        alt="Skopiuj adres IP"
        className="w-36 h-auto"
        style={{ display: 'block' }}
      />
    )}
  </div>
</button>        
        <button style={{
    backgroundColor: '#623d89',
    border: '2px solid #333333',
    borderRadius: '8px',
    color: '#fff',
    padding: '12px 16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    outline: 'none',
    boxSizing: 'border-box',
  }}
  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#a166ff')}
  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#623d89')}
  
          onClick={() => window.open('https://discord.gg/UZdzNwxX8Y', '_blank')}
        >
          <LiaDiscord size={32} />
        </button>
      </div>
      
<button
  style={{
    backgroundColor: '#141414',
    border: '2px solid #333333',
    borderRadius: '8px',
    color: '#fff',
    padding: '12px 16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    outline: 'none',
    boxSizing: 'border-box',
  }}
>
  <HiOutlineStatusOnline size={24} />
  <img
    src={aktywni}
    alt="Sieć serwerów"
    className="w-40 h-auto"
    style={{ display: 'block' }}
  />
  <span style={{ fontWeight: 'bold' }}>
    {playersOnline === null
      ? 'Ładowanie...'
      : playersOnline === 'offline'
      ? 'Serwer offline'
      : playersOnline === 'error'
      ? 'Błąd'
      : playersOnline}
  </span>
</button>

      
      <div className="absolute bottom-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-indigo-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-indigo-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
