import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Dashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userPhone, setUserPhone] = useState('');

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    const phone = localStorage.getItem('userPhone');
    
    if (!isAuth) {
      navigate('/login');
      return;
    }
    
    if (phone) {
      setUserPhone(phone);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userPhone');
    toast({
      title: "Выход выполнен",
      description: "Вы успешно вышли из системы.",
    });
    navigate('/');
  };

  const stats = {
    todayEarnings: 3450,
    weekEarnings: 18200,
    monthEarnings: 67500,
    totalOrders: 156,
    todayOrders: 12,
    rating: 4.8,
    completionRate: 98
  };

  const recentOrders = [
    { id: 1, service: 'Яндекс Еда', amount: 450, time: '14:30', status: 'completed' },
    { id: 2, service: 'Яндекс Такси', amount: 820, time: '13:15', status: 'completed' },
    { id: 3, service: 'Яндекс Еда', amount: 380, time: '12:45', status: 'completed' },
    { id: 4, service: 'Яндекс Грузовой', amount: 1200, time: '11:20', status: 'completed' },
    { id: 5, service: 'Яндекс Еда', amount: 600, time: '10:50', status: 'completed' }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-secondary text-white shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center animate-float shadow-lg">
                <span className="text-2xl">🌊</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Личный кабинет</h1>
                <p className="text-sm text-gray-400">{userPhone}</p>
              </div>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={handleLogout}>
              <Icon name="LogOut" className="mr-2" size={20} />
              Выход
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Добро пожаловать!</h2>
          <p className="text-muted-foreground text-lg">Ваша статистика и заказы</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="card-3d preserve-3d shadow-lg">
            <CardHeader className="pb-3">
              <CardDescription>Сегодня заработано</CardDescription>
              <CardTitle className="text-3xl text-accent">{stats.todayEarnings.toLocaleString()}₽</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <Icon name="TrendingUp" size={16} className="mr-1 text-accent" />
                +12% к вчерашнему дню
              </div>
            </CardContent>
          </Card>

          <Card className="card-3d preserve-3d shadow-lg">
            <CardHeader className="pb-3">
              <CardDescription>За неделю</CardDescription>
              <CardTitle className="text-3xl text-primary">{stats.weekEarnings.toLocaleString()}₽</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <Icon name="Calendar" size={16} className="mr-1" />
                7 дней работы
              </div>
            </CardContent>
          </Card>

          <Card className="card-3d preserve-3d shadow-lg">
            <CardHeader className="pb-3">
              <CardDescription>За месяц</CardDescription>
              <CardTitle className="text-3xl text-accent">{stats.monthEarnings.toLocaleString()}₽</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <Icon name="TrendingUp" size={16} className="mr-1 text-accent" />
                Цель: 80,000₽
              </div>
            </CardContent>
          </Card>

          <Card className="card-3d preserve-3d shadow-lg">
            <CardHeader className="pb-3">
              <CardDescription>Заказов сегодня</CardDescription>
              <CardTitle className="text-3xl text-primary">{stats.todayOrders}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <Icon name="Package" size={16} className="mr-1" />
                Всего: {stats.totalOrders}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full md:w-auto grid-cols-3 md:inline-grid">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="orders">История заказов</TabsTrigger>
            <TabsTrigger value="profile">Профиль</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-3d preserve-3d shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Star" size={24} className="mr-2 text-primary" />
                    Ваш рейтинг
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-5xl font-bold text-primary">{stats.rating}</span>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Icon
                            key={star}
                            name="Star"
                            size={24}
                            className={star <= Math.floor(stats.rating) ? 'text-primary fill-primary' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                    </div>
                    <Progress value={stats.rating * 20} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      Отличный результат! Продолжайте в том же духе.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-3d preserve-3d shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="CheckCircle2" size={24} className="mr-2 text-accent" />
                    Процент выполнения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-5xl font-bold text-accent">{stats.completionRate}%</div>
                    <Progress value={stats.completionRate} className="h-2" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Выполнено</div>
                        <div className="font-semibold">{Math.floor(stats.totalOrders * stats.completionRate / 100)}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Отменено</div>
                        <div className="font-semibold">{stats.totalOrders - Math.floor(stats.totalOrders * stats.completionRate / 100)}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="card-3d preserve-3d shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="BarChart3" size={24} className="mr-2 text-primary" />
                  Статистика по сервисам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Яндекс Еда</span>
                      <span className="text-muted-foreground">60 заказов (38%)</span>
                    </div>
                    <Progress value={38} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Яндекс Такси</span>
                      <span className="text-muted-foreground">76 заказов (49%)</span>
                    </div>
                    <Progress value={49} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Яндекс Грузовой</span>
                      <span className="text-muted-foreground">20 заказов (13%)</span>
                    </div>
                    <Progress value={13} className="h-3" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card className="card-3d preserve-3d shadow-lg">
              <CardHeader>
                <CardTitle>Последние заказы</CardTitle>
                <CardDescription>Ваши недавние выполненные заказы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name={order.service.includes('Еда') ? 'Package' : order.service.includes('Грузовой') ? 'Truck' : 'Car'} size={24} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">{order.service}</div>
                          <div className="text-sm text-muted-foreground">{order.time}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-accent">+{order.amount}₽</div>
                        <div className="text-sm text-green-600 flex items-center">
                          <Icon name="CheckCircle2" size={16} className="mr-1" />
                          Выполнен
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-3d preserve-3d shadow-lg">
                <CardHeader>
                  <CardTitle>Личная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Телефон</div>
                    <div className="font-semibold">{userPhone}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Статус</div>
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold">
                        <Icon name="CheckCircle2" size={16} className="mr-1" />
                        Активен
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Комиссия парка</div>
                    <div className="font-semibold text-primary text-2xl">3%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Дата регистрации</div>
                    <div className="font-semibold">15 октября 2024</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-3d preserve-3d shadow-lg">
                <CardHeader>
                  <CardTitle>Баланс и выплаты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Доступно к выводу</div>
                    <div className="text-4xl font-bold text-accent mb-4">{stats.todayEarnings.toLocaleString()}₽</div>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white" size="lg">
                      <Icon name="Wallet" className="mr-2" size={20} />
                      Вывести средства
                    </Button>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-sm text-muted-foreground">Реферальный код</div>
                    <div className="flex items-center space-x-2 mt-2">
                      <code className="flex-1 px-3 py-2 bg-muted rounded font-mono">VOLNA2024</code>
                      <Button variant="outline" size="sm">
                        <Icon name="Copy" size={16} />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Получайте 1% с заработка приглашенных
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
