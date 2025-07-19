import { useState } from "react";
import realisev from '../assets/realisev.png';
import realisen from '../assets/realisen.png';
import realisek from '../assets/realisek.png';
import realisesubmit from '../assets/realisesubmit.png';
import voucherphoto from "../assets/voucherp.png";
import { IoMdInformationCircleOutline } from "react-icons/io";

export const VoucherSection = () => {
  const [nickname, setNickname] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nickname:", nickname, "Code:", code);
  };

  return (
    <div id="voucher-section" className="bg-background flex flex-col md:flex-row items-center justify-center gap-x-6 pt-10 pb-8 px-4">
      
      {/* Lewa strona - formularz */}
      <div className="w-full max-w-md space-y-6">
        
        {/* Header z ikoną */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <IoMdInformationCircleOutline className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground tracking-wide">
            <img src={realisev} className="w-80 h-auto mx-auto" alt="realisev" />
          </h1>
        </div>

        {/* Formularz */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Nick field */}
          <div className="space-y-2">
            <label className="block text-muted-foreground text-sm font-medium">
              <img src={realisen} className="w-44 h-auto block" alt="realisen" />
            </label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full p-3 bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring"
              required
            />
          </div>

          {/* Kod field */}
          <div className="space-y-2">
            <label className="block text-muted-foreground text-sm font-medium">
              <img src={realisek} className="w-28 h-auto block" alt="realisek" />
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full p-3 bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring"
              required
            />
          </div>

          {/* Submit button */}
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
            type="submit"
            className="w-full bg-secondary text-secondary-foreground p-3 font-medium hover:bg-secondary/80 transition-colors duration-200"
          >
            <img src={realisesubmit} className="w-52 h-auto block" alt="realisesubmit" />
          </button>

        </form>
      </div>

      {/* Prawa strona - obrazek */}
      <div className="flex items-center mt-8 md:mt-0">
        <img
          src={voucherphoto}
          alt="Voucher grafika"
          className="w-[500px] h-auto object-contain"
        />
      </div>
    </div>
  );
};
