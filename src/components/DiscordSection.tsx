import { useEffect, useState } from "react";
import { Users, MessageCircle, Crown } from "lucide-react";
import { LiaDiscord } from "react-icons/lia";
import discord from "../assets/discordp.png";

import welcome1 from '../assets/welcome1.png'
import welcome2 from '../assets/welcome2.png'
import d1 from '../assets/d1.png'
import d2 from '../assets/d2.png'
import d3 from '../assets/d3.png'
import klik from '../assets/klik.png'

const SERVER_ID = "1331503702456143903";

const DiscordOnlineCounter = () => {
  const [onlineCount, setOnlineCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://discord.com/api/guilds/1331503702456143903/widget.json`);
        const data = await res.json();
        setOnlineCount(data.presence_count);
      } catch (err) {
        console.error("Nie udało się pobrać liczby online:", err);
        setOnlineCount(null);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-semibold">
      {onlineCount !== null ? `${onlineCount} online` : "Brak danych"}
    </span>
  );
};

export const DiscordSection = () => {
  const handleJoinDiscord = () => {
    window.open("https://discord.gg/UZdzNwxX8Y", "_blank");
  };

  return (
    <section className="discord-section min-h-screen flex flex-col items-center justify-center py-20 px-4 relative">
      {/* Wyśrodkowana fioletowa linia */}
      <div className="h-1 bg-purple-600 rounded mb-12 mx-auto w-full max-w-6xl"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/25 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "-1.5s" }}></div>
      </div>

      {/* Główna zawartość */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Obrazek po lewej */}
          <div className="hidden lg:flex justify-center">
            <img
              src={discord}
              alt="Discord Banner"
              className="max-w-[500px] h-auto object-contain opacity-85 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Tekst i przyciski */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                <img src={welcome1} className="w-[500px] h-auto block" alt="odwiedz nasz" />
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent leading-tight">
                <img src={welcome2} className="w-[500px] h-auto block" alt="serwer" />
              </h2>
            </div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                  <img src={d1} className="w-[500px] h-auto block" alt="d1" />
                  <img src={d2} className="w-[500px] h-auto block mt-1" alt="d2" />
                  <img src={d3} className="w-[500px] h-auto block mt-1" alt="d3" />
                </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#a166ff')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#623d89')}
              onClick={handleJoinDiscord}
            >
              <LiaDiscord size={32} />
              <img src={klik} className="w-12 h-auto block" alt="klik" />
            </button>
            </div>

            {/* Statystyki */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8">
              <div className="flex items-center space-x-2 text-primary">
                <Users className="h-5 w-5" />
                <DiscordOnlineCounter />
              </div>
              <div className="flex items-center space-x-2 text-accent">
                <Crown className="h-5 w-5" />
                <span className="font-semibold">24/7 aktywni</span>
              </div>
            </div>
          </div>
        </div>

        {/* Widget Discord pod spodem, wyśrodkowany */}
        <div className="flex justify-center mt-16">
        </div>

        {/* Dekoracyjne kropki */}
        <div className="mt-20 flex justify-center">
          <div className="flex space-x-8 opacity-30">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
