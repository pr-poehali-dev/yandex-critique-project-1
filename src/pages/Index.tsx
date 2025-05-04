
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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
    <div className="min-h-screen flex items-center justify-center bg-gray-950 p-4 overflow-hidden relative">
      {/* Фоновые светящиеся элементы */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-yellow-500/30 blur-3xl animate-pulse"
          style={{
            width: `${30 + Math.random() * 100}px`,
            height: `${30 + Math.random() * 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.random() * 0.4,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 7}s`,
            filter: `blur(${10 + Math.random() * 20}px)`,
            background: `radial-gradient(circle, rgba(253,224,71,0.8) 0%, rgba(234,179,8,0.5) 70%, rgba(161,98,7,0.2) 100%)`,
          }}
        />
      ))}
      
      <Card className="w-full max-w-3xl relative bg-black/70 border-yellow-500/50 overflow-hidden">
        {/* Светящаяся рамка */}
        <div 
          className="absolute inset-0 border-4 border-yellow-400 rounded-lg pointer-events-none"
          style={{
            boxShadow: `0 0 ${15 * glowIntensity}px ${5 * glowIntensity}px rgba(234, 179, 8, ${0.6 * glowIntensity})`,
            filter: `brightness(${glowIntensity})`,
          }}
        />
        
        <div className="p-6 z-10 relative">
          <h1 className="text-4xl font-bold mb-6 text-center text-yellow-400" 
            style={{
              textShadow: `0 0 ${15 * glowIntensity}px rgba(234, 179, 8, ${0.8 * glowIntensity})`,
              filter: `brightness(${glowIntensity})`,
            }}>
            ЯНДЕКС ЭТО ГОВНО
          </h1>
          
          <div className="text-yellow-100 space-y-4 text-lg leading-relaxed">
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
          
          <div className="mt-8 flex justify-center">
            <Button 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg"
              style={{
                boxShadow: `0 0 ${10 * glowIntensity}px ${5 * glowIntensity}px rgba(234, 179, 8, ${0.6 * glowIntensity})`,
                filter: `brightness(${glowIntensity})`,
              }}>
              Больше правды о Яндексе
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
