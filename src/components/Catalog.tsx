import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CatalogProps {
  onNavigate: (section: string) => void;
}

const products = [
  {
    id: 1,
    name: 'Стетоскоп Littmann Classic III',
    category: 'Диагностика',
    price: '12 500',
    image: 'Stethoscope',
    inStock: true,
    features: ['Премиум качество', 'Гарантия 2 года']
  },
  {
    id: 2,
    name: 'Тонометр автоматический',
    category: 'Диагностика',
    price: '4 800',
    image: 'Activity',
    inStock: true,
    features: ['Автоматический', 'LCD-дисплей']
  },
  {
    id: 3,
    name: 'Хирургический набор',
    category: 'Хирургия',
    price: '28 000',
    image: 'Scissors',
    inStock: true,
    features: ['Нержавеющая сталь', '15 инструментов']
  },
  {
    id: 4,
    name: 'Пульсоксиметр портативный',
    category: 'Мониторинг',
    price: '3 200',
    image: 'Heart',
    inStock: true,
    features: ['Портативный', 'OLED-дисплей']
  },
  {
    id: 5,
    name: 'Термометр инфракрасный',
    category: 'Диагностика',
    price: '2 400',
    image: 'Thermometer',
    inStock: false,
    features: ['Бесконтактный', 'Быстрое измерение']
  },
  {
    id: 6,
    name: 'Медицинские весы электронные',
    category: 'Оборудование',
    price: '8 900',
    image: 'Scale',
    inStock: true,
    features: ['До 200 кг', 'Высокая точность']
  }
];

export default function Catalog({ onNavigate }: CatalogProps) {
  return (
    <section id="catalog" className="py-20 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="outline" className="text-primary border-primary">
            Каталог продукции
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Медицинские инструменты и оборудование
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Широкий ассортимент сертифицированного медицинского оборудования 
            от ведущих мировых производителей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                  <Icon name={product.image as any} className="h-20 w-20 text-primary" />
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="flex flex-wrap gap-2">
                    {product.features.map((feature, i) => (
                      <span key={i} className="text-xs">• {feature}</span>
                    ))}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <span className="text-muted-foreground">₽</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button className="flex-1" disabled={!product.inStock}>
                  {product.inStock ? (
                    <>
                      <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                      Заказать
                    </>
                  ) : (
                    'Нет в наличии'
                  )}
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Info" className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" onClick={() => onNavigate('contacts')}>
            Нужна помощь в выборе?
            <Icon name="MessageCircle" className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
