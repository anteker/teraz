import { FaDiscord } from "react-icons/fa";
import discordp from '../assets/discordp.png';

export function DiscordSection() {
  return (
    <div className="flex bg-gray-100 p-8 rounded-lg gap-12 items-center">
      {/* Left side - Discord image */}
      <div className="flex-shrink-0 ml-[90px] flex gap-6 items-end mr-20">
        <img
          src={discordp}
          alt="Discord Minecraft character"
          className="w-72 h-auto object-contain"
        />
      </div>

      {/* Center - Discord content */}
      <div className="flex-1 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          ODWIEDŹ NASZ SERWER DISCORD
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          ABY BYĆ ZE WSZYSTKIM NA BIEŻĄCO
        </p>
        <button 
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-medium text-xl inline-flex items-center gap-3"
          onClick={() => window.open('https://discord.gg/UZdzNwxX8Y', '_blank')}
        >
          <FaDiscord size={24} />
          DOŁĄCZ
        </button>
      </div>

      {/* Right side - Discord widget */}
      <div>
        <iframe
          src="https://discord.com/widget?id=1331503702456143903&theme=dark"
          width="350"
          height="500"
          allowTransparency={true}
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  );
}
