import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Login() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userPhone', formData.phone);
    
    toast({
      title: "Вход выполнен!",
      description: "Добро пожаловать в личный кабинет.",
    });
    
    navigate('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary to-secondary/90 flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="w-full max-w-md relative z-10 perspective-1000">
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-float shadow-2xl">
              <span className="text-3xl">🌊</span>
            </div>
            <h1 className="text-3xl font-bold text-white">Волна</h1>
          </a>
        </div>

        <Card className="card-3d preserve-3d shadow-2xl animate-rotate-3d">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Вход в систему</CardTitle>
            <CardDescription className="text-base">
              Войдите в личный кабинет водителя
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Номер телефона</Label>
                <div className="relative">
                  <Icon name="Phone" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (909) 123-45-67"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="pl-10 text-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <div className="relative">
                  <Icon name="Lock" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Введите пароль"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="pl-10 text-lg"
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-secondary shadow-lg">
                <Icon name="LogIn" className="mr-2" size={24} />
                Войти
              </Button>

              <div className="text-center space-y-2">
                <a href="#" className="text-sm text-primary hover:underline">
                  Забыли пароль?
                </a>
                <p className="text-sm text-muted-foreground">
                  Нет аккаунта?{' '}
                  <a href="/#register" className="text-primary hover:underline font-semibold">
                    Зарегистрироваться
                  </a>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <a href="/" className="text-white hover:text-primary transition-colors inline-flex items-center space-x-2">
            <Icon name="ArrowLeft" size={20} />
            <span>Вернуться на главную</span>
          </a>
        </div>
      </div>
    </div>
  );
}
