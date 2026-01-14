import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

export default function Index() {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} />
      <main className="flex-1">
        <Hero onNavigate={handleNavigate} />
        <Catalog onNavigate={handleNavigate} />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
