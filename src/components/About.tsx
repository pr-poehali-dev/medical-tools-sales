import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'Shield',
    title: 'Сертификация',
    description: 'Все товары имеют необходимые сертификаты качества и разрешения'
  },
  {
    icon: 'Truck',
    title: 'Быстрая доставка',
    description: 'Доставка по России в течение 2-7 дней, собственная логистика'
  },
  {
    icon: 'Award',
    title: 'Гарантия',
    description: 'Официальная гарантия производителя на всё оборудование'
  },
  {
    icon: 'Users',
    title: 'Поддержка',
    description: 'Профессиональная консультация и техподдержка 24/7'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-primary font-medium mb-2">О компании</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Надежный партнер в медицинском оборудовании
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Диалмед — ведущий поставщик медицинского оборудования и инструментов 
              с 15-летним опытом работы на российском рынке.
            </p>
            <p className="text-muted-foreground">
              Мы работаем напрямую с производителями из Европы, США и Азии, 
              что позволяет нам предлагать конкурентные цены и гарантировать 
              подлинность всей продукции.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Прямые поставки</h4>
                  <p className="text-sm text-muted-foreground">
                    Работаем без посредников с ведущими мировыми брендами
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Индивидуальный подход</h4>
                  <p className="text-sm text-muted-foreground">
                    Помогаем подобрать оптимальное решение для вашей клиники
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Сервисное обслуживание</h4>
                  <p className="text-sm text-muted-foreground">
                    Полный цикл сопровождения: от покупки до ремонта
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}