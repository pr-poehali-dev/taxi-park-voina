import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    sts: '',
    license: '',
    phone: '',
    city: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({
      fullName: '',
      sts: '',
      license: '',
      phone: '',
      city: '',
      address: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-primary/20 shadow-2xl">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 perspective-1000">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center animate-float shadow-lg">
              <span className="text-2xl">🌊</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Волна</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-white hover:text-primary transition-colors">О нас</a>
            <a href="#tariffs" className="text-white hover:text-primary transition-colors">Тарифы</a>
            <a href="#benefits" className="text-white hover:text-primary transition-colors">Преимущества</a>
            <a href="#register" className="text-white hover:text-primary transition-colors">Регистрация</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+79094020633" className="hidden sm:flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <Icon name="Phone" size={20} />
              <span className="font-semibold">+7 909 402-06-33</span>
            </a>
            <a href="/login" className="flex items-center space-x-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors">
              <Icon name="User" size={20} />
              <span className="font-semibold">Войти</span>
            </a>
          </div>
        </nav>
      </header>

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 perspective-1000">
          <div className="max-w-4xl mx-auto text-center preserve-3d">
            <div className="inline-block mb-6 px-6 py-3 bg-primary text-secondary rounded-full font-bold text-lg animate-depth-pulse shadow-2xl">
              💸 БОНУС 500₽ ЗА РЕГИСТРАЦИЮ!
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 animate-rotate-3d" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              Таксопарк <span className="text-primary drop-shadow-2xl">Волна</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Ростов-на-Дону
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              ⚡️ ПОДКЛЮЧЕНИЕ К ЯНДЕКС ДОСТАВКЕ ЗА 10 МИНУТ!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-secondary" onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="UserPlus" className="mr-2" size={24} />
                Начать зарабатывать
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10" onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Info" className="mr-2" size={24} />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12 animate-fade-in">Немного о нас</h3>
            <div className="grid md:grid-cols-3 gap-6 perspective-1000">
              <Card className="text-center card-3d preserve-3d shadow-xl animate-rotate-3d">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Сертифицированный парк</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Официальный партнер Яндекс Доставки</p>
                </CardContent>
              </Card>
              
              <Card className="text-center card-3d preserve-3d shadow-xl animate-rotate-3d" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Calendar" size={32} className="text-accent" />
                  </div>
                  <CardTitle>С 2022 года</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Стабильная работа и развитие</p>
                </CardContent>
              </Card>
              
              <Card className="text-center card-3d preserve-3d shadow-xl animate-rotate-3d" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Users" size={32} className="text-primary" />
                  </div>
                  <CardTitle>20 000+ курьеров</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Работают и доверяют нам</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 animate-fade-in">Наши тарифы</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto perspective-1000">
            <Card className="relative overflow-hidden card-3d preserve-3d shadow-2xl animate-rotate-3d">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Car" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Яндекс Такси</CardTitle>
                <CardDescription>Работа на своём автомобиле</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-primary">3%</span>
                  <span className="ml-2 text-muted-foreground">комиссия парка</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-accent mr-2 mt-0.5" />
                    <span>Моментальный вывод средств</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-accent mr-2 mt-0.5" />
                    <span>Гарантированный поток заказов</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-accent mr-2 mt-0.5" />
                    <span>Защита от корректировок</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden card-3d preserve-3d shadow-2xl animate-rotate-3d border-2 border-accent" style={{ animationDelay: '0.1s' }}>
              <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
              <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                Популярное
              </div>
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Icon name="Package" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Яндекс Еда</CardTitle>
                <CardDescription>Доставка еды курьером</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-accent">3%</span>
                  <span className="ml-2 text-muted-foreground">комиссия парка</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-accent mr-2 mt-0.5" />
                    <span>Любое гражданство</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-accent mr-2 mt-0.5" />
                    <span>Регистрация за 10 минут</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-accent mr-2 mt-0.5" />
                    <span>Реферальная система 1%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden card-3d preserve-3d shadow-2xl animate-rotate-3d" style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Яндекс Грузовой</CardTitle>
                <CardDescription>Грузоперевозки на своём авто</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-primary">3%</span>
                  <span className="ml-2 text-muted-foreground">комиссия парка</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-accent mr-2 mt-0.5" />
                    <span>Высокие заработки</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-accent mr-2 mt-0.5" />
                    <span>Работа без посредников</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-accent mr-2 mt-0.5" />
                    <span>Стабильные заказы</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8 animate-fade-in">
            <p className="text-xl font-semibold text-destructive">⚠️ Аренда авто отсутствует — только на своем автомобиле</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 animate-fade-in">Наши преимущества</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto perspective-1000">
            <Card className="card-3d preserve-3d shadow-lg animate-rotate-3d">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Percent" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Низкая комиссия</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Всего 3% комиссии парка — зарабатывайте больше на каждом заказе</p>
              </CardContent>
            </Card>

            <Card className="card-3d preserve-3d shadow-lg animate-rotate-3d" style={{ animationDelay: '0.05s' }}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Zap" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Моментальные выплаты</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Безкомиссионный вывод средств на карты партнеров в любое время</p>
              </CardContent>
            </Card>

            <Card className="card-3d preserve-3d shadow-lg animate-rotate-3d" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Быстрая регистрация</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Выход на заказ уже через 10 минут после регистрации</p>
              </CardContent>
            </Card>

            <Card className="card-3d preserve-3d shadow-lg animate-rotate-3d" style={{ animationDelay: '0.15s' }}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="ShoppingBag" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Гарантированные заказы</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Стабильный поток заказов для бесперебойной работы</p>
              </CardContent>
            </Card>

            <Card className="card-3d preserve-3d shadow-lg animate-rotate-3d" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Globe" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Любое гражданство</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Принимаем курьеров с любым гражданством</p>
              </CardContent>
            </Card>

            <Card className="card-3d preserve-3d shadow-lg animate-rotate-3d" style={{ animationDelay: '0.25s' }}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Защита от корректировок</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Защищаем водителей от несправедливых корректировок Яндекса</p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary card-3d preserve-3d shadow-xl animate-rotate-3d" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Gift" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">Реферальная система</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Получайте 1% с заработка приглашенных водителей или 1000₽ единоразово</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="register" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto perspective-1000">
            <Card className="card-3d preserve-3d shadow-2xl animate-rotate-3d">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center animate-float shadow-2xl">
                  <Icon name="FileText" size={40} className="text-secondary" />
                </div>
                <CardTitle className="text-3xl mb-2">Регистрация водителя</CardTitle>
                <CardDescription className="text-lg">
                  Заполните форму и начните зарабатывать уже сегодня!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">ФИО *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Иванов Иван Иванович"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sts">СТС (Свидетельство о регистрации ТС) *</Label>
                    <Input
                      id="sts"
                      name="sts"
                      placeholder="77 АА 123456"
                      value={formData.sts}
                      onChange={handleChange}
                      required
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="license">Водительское удостоверение *</Label>
                    <Input
                      id="license"
                      name="license"
                      placeholder="77 12 345678"
                      value={formData.license}
                      onChange={handleChange}
                      required
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Номер телефона *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+7 (909) 123-45-67"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">Город *</Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="Ростов-на-Дону"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Адрес *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      placeholder="Укажите ваш адрес проживания"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="text-lg min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-secondary">
                    <Icon name="Send" className="mr-2" size={24} />
                    Отправить заявку
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌊</span>
                </div>
                <h3 className="text-2xl font-bold">Волна</h3>
              </div>
              <p className="text-gray-400">
                Таксопарк в Ростове-на-Дону
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <a href="tel:+79094020633" className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors">
                  <Icon name="Phone" size={18} />
                  <span>+7 909 402-06-33</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Icon name="MapPin" size={18} />
                  <span>Ростов-на-Дону</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Навигация</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-primary transition-colors">О нас</a>
                <a href="#tariffs" className="block text-gray-300 hover:text-primary transition-colors">Тарифы</a>
                <a href="#benefits" className="block text-gray-300 hover:text-primary transition-colors">Преимущества</a>
                <a href="#register" className="block text-gray-300 hover:text-primary transition-colors">Регистрация</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Таксопарк Волна. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}