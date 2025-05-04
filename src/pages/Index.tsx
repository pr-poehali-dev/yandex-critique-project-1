
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [glowIntensity, setGlowIntensity] = useState(1);
  
  // Эффект пульсации для "светящегося" эффекта
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => {
        const newValue = prev + (Math.random() * 0.2 - 0.1);
        return Math.max(0.8, Math.min(1.2, newValue));
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-950 to-gray-950 p-4 overflow-hidden relative">
      {/* Фоновые светящиеся элементы имитирующие "говно" */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full animate-pulse"
          style={{
            width: `${30 + Math.random() * 100}px`,
            height: `${30 + Math.random() * 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.random() * 0.4,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 7}s`,
            filter: `blur(${10 + Math.random() * 20}px)`,
            background: `radial-gradient(circle, rgba(${200 + Math.random() * 55},${150 + Math.random() * 50},${20 + Math.random() * 40},0.8) 0%, rgba(${120 + Math.random() * 50},${80 + Math.random() * 30},${10 + Math.random() * 20},0.5) 70%, rgba(${80 + Math.random() * 30},${50 + Math.random() * 20},${0 + Math.random() * 10},0.2) 100%)`,
          }}
        />
      ))}
      
      <Card className="w-full max-w-3xl relative overflow-hidden" 
        style={{
          background: 'rgba(40, 26, 5, 0.8)',
          borderColor: 'rgba(161, 98, 7, 0.6)'
        }}>
        {/* Светящаяся рамка - имитирует свечение */}
        <div 
          className="absolute inset-0 border-4 rounded-lg pointer-events-none"
          style={{
            borderColor: 'rgba(200, 142, 30, 0.7)',
            boxShadow: `0 0 ${20 * glowIntensity}px ${8 * glowIntensity}px rgba(200, 142, 30, ${0.6 * glowIntensity})`,
            filter: `brightness(${glowIntensity})`,
          }}
        />
        
        <div className="p-6 z-10 relative">
          <div className="flex justify-center items-center mb-6 gap-3">
            <Icon name="Poop" size={48} className="text-amber-500" 
              style={{
                filter: `drop-shadow(0 0 ${8 * glowIntensity}px rgba(200, 142, 30, ${0.8 * glowIntensity}))`
              }}
            />
            <h1 className="text-5xl font-bold text-center text-amber-500" 
              style={{
                textShadow: `0 0 ${15 * glowIntensity}px rgba(200, 142, 30, ${0.8 * glowIntensity})`,
                filter: `brightness(${glowIntensity})`,
              }}>
              ЯНДЕКС ЭТО ГОВНО
            </h1>
            <Icon name="Poop" size={48} className="text-amber-500"
              style={{
                filter: `drop-shadow(0 0 ${8 * glowIntensity}px rgba(200, 142, 30, ${0.8 * glowIntensity}))`
              }}
            />
          </div>
          
          <div className="text-amber-200 space-y-4 text-lg leading-relaxed">
            <p>
              Яндекс это говно, потому что не потому, а просто говно убогое! Убогая поисковая система не дающая вам и вашему бизнесу никакого шанса!
            </p>
            
            <p>
              Если вы пользуетесь Яндексом от скуки и имеете свой бизнес, то никогда не пользуйтесь разделом Яндекс вебмастер не добавляйте никогда и ни при каких обстоятельствах эту гниду под названием Яндекс в свой бизнес!
            </p>
            
            <p>
              Не подтверждайте сайт и не подключайте Яндекс метрику к вашему сайту. Все эти манипуляции приведут к искусственному понижению ИКС вашего сайта и занижение ранжирования в поисковой выдаче!
            </p>
            
            <p>
              Гнида под названием Яндекс, со своим отрыгным проектом как Яндекс Бизнес также задвинет ваш сайт в самый низ и будет вымогать деньги на платные подписки и рекламные компании которые якобы повысят рейтинг вашего сайта и соответственно выдачу в поиске! Всё это ни что иное как хорошо спланированная манипулятивная тактика по вымоганию денег у лохов.
            </p>
            
            <p>
              Гнида под названием Яндекс карты это зеркальная фича всё того же Яндекса, альтернатива Яндекс бизнесу. Новшество от гниды под названием Яндекс карты и Яндекс бизнес в данный момент сводится к тому что если вы хотите отображаться на Яндекс картах и в Яндекс бизнесе иметь подтвержденный профиль компании, вы должны, ВНИМАНИЕ, предоставить видео на котором будет видна вывеска с названием фирмы, вход в здание где расположена ваша фирма, видна расположенная со зданием инфраструктура, внутри вы должны снять на видео оборудование и обстановку внутри компании, и всё это надо сделать одним файлом без склеек!
            </p>
            
            <p>
              Вопрос, кто заказчик этого всего, кто собирает эти стратегические сведения в которых содержится информация о материальных ценностях той или иной организации??? Попахивает криминалом, вам так не кажется?
            </p>
          </div>
          
          <div className="mt-8 flex justify-center gap-4">
            <Button 
              className="font-bold py-2 px-4 rounded-lg"
              style={{
                background: 'linear-gradient(to right, rgba(220, 170, 30, 0.9), rgba(180, 130, 20, 0.9))',
                color: '#000',
                boxShadow: `0 0 ${10 * glowIntensity}px ${5 * glowIntensity}px rgba(200, 142, 30, ${0.6 * glowIntensity})`,
                filter: `brightness(${glowIntensity})`,
              }}>
              <Icon name="Poop" className="mr-2" />
              Больше правды о Яндексе
            </Button>
            <Button 
              className="font-bold py-2 px-4 rounded-lg"
              style={{
                background: 'linear-gradient(to right, rgba(190, 140, 30, 0.9), rgba(150, 100, 20, 0.9))',
                color: '#000',
                boxShadow: `0 0 ${10 * glowIntensity}px ${5 * glowIntensity}px rgba(200, 142, 30, ${0.6 * glowIntensity})`,
                filter: `brightness(${glowIntensity})`,
              }}>
              <Icon name="Share2" className="mr-2" />
              Поделиться
            </Button>
          </div>
        </div>
        
        {/* Плавающие частицы внутри карточки */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={`float-${i}`}
            className="absolute rounded-full animate-float pointer-events-none"
            style={{
              width: `${5 + Math.random() * 15}px`,
              height: `${5 + Math.random() * 15}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.4,
              animationDelay: `${Math.random() * 5}s`,
              background: `radial-gradient(circle, rgba(${200 + Math.random() * 55},${150 + Math.random() * 50},${20 + Math.random() * 40},0.8) 0%, rgba(${120 + Math.random() * 50},${80 + Math.random() * 30},${10 + Math.random() * 20},0.5) 100%)`,
              filter: `blur(${1 + Math.random() * 2}px)`,
            }}
          />
        ))}
      </Card>
    </div>
  );
};

export default Index;
