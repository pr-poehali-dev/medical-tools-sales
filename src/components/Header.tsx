import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('hero')}>
          <Icon name="Activity" className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Диалмед</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => onNavigate('hero')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Главная
          </button>
          <button
            onClick={() => onNavigate('catalog')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Каталог
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            О компании
          </button>
          <button
            onClick={() => onNavigate('contacts')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Контакты
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Icon name="Search" className="h-5 w-5" />
          </Button>
          <Button onClick={() => onNavigate('contacts')}>
            Консультация
          </Button>
        </div>
      </div>
    </header>
  );
}