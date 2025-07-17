import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-4 z-50 bg-black-primary/95 backdrop-blur-sm border-2 border-indigo-primary p-4 max-w-sm rounded-none">
      <div className="flex justify-between items-start gap-2 mb-4">
        <h3 className="text-indigo-primary font-bold text-sm">Informacje o ciasteczkach</h3>
        <button
          className="h-6 w-6 p-0 hover:bg-indigo-primary/20 bg-transparent border-none text-indigo-primary"
        >
          <X className="h-4 w-4 text-indigo-primary" />
        </button>
      </div>
      <p className="text-white-primary text-xs mb-4 leading-relaxed">
        Dbamy o Twoje dane i używamy plików cookie wyłącznie w celu zapewnienia funkcjonalności i komfortu korzystania z serwisu. Używając tej witryny akceptujesz naszą{' '}
        <a href="#" className="text-indigo-primary underline">
          politykę prywatności
        </a>
        .
      </p>
      <button
        className="minecraft-button bg-indigo-primary hover:bg-indigo-dark text-white-primary border-white-primary w-full text-xs"
        onClick={() => setIsVisible(false)}
      >
        Zgadzam się
      </button>
    </div>
  );
};