import { CookieNotice } from '@/components/CookieNotice';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ShopSection } from '@/components/ShopSection';
import { VoucherSection } from '@/components/VoucherSection';
import { Footer } from '@/components/Footer';
import { DiscordSection } from '@/components/DiscordSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CookieNotice />
      <Navigation />
      <HeroSection />
      <ShopSection />
      <VoucherSection />
      <DiscordSection />
      <Footer />
    </div>
  );
};

export default Index;
