import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Icon name="Shield" className="h-4 w-4" />
              Сертифицированное оборудование
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Медицинское оборудование для профессионалов
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Полный спектр медицинских инструментов и оборудования для клиник, 
              больниц и частных кабинетов. Гарантия качества и профессиональная поддержка.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => onNavigate('catalog')}>
                Смотреть каталог
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('contacts')}>
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Получить консультацию
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Товаров в каталоге</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Лет на рынке</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
              <div className="w-full h-full rounded-xl bg-white shadow-2xl flex items-center justify-center">
                <Icon name="Stethoscope" className="h-32 w-32 text-primary opacity-20" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-scale-in">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="TrendingUp" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">98%</div>
                  <div className="text-xs text-muted-foreground">Рейтинг качества</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
