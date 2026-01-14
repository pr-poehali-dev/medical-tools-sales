import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/30 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Icon name="Activity" className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Диалмед</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональное медицинское оборудование для клиник и медицинских учреждений
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">О нас</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Наша команда</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Вакансии</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Контакты</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Диагностика</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Хирургия</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Мониторинг</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Все товары</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Гарантия</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Доставка</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Возврат</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Диалмед. Все права защищены.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}