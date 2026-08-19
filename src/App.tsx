import { Header } from "./components/layout/Header";
import { BlocksSection } from "./components/sections/BlocksSection";
import { CasesSection } from "./components/sections/CasesSection";
import { ContactsSection } from "./components/sections/ContactsSection";
import { HeroSection } from "./components/sections/HeroSection";
import { MechanicsSection } from "./components/sections/MechanicsSection";
import { PricingSection } from "./components/sections/PricingSection";
import { StepsSection } from "./components/sections/StepsSection";
import { TeamSection } from "./components/sections/TeamSection";
import { StructuredData } from "./seo/StructuredData";

export default function App() {
  return (
    <>
      <StructuredData />
      <a href="#main-content" className="skip-link">
        Перейти к содержимому
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <TeamSection />
        <CasesSection />
        <BlocksSection />
        <MechanicsSection />
        <PricingSection />
        <StepsSection />
        <ContactsSection />
      </main>
    </>
  );
}
