import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mystical-dark via-purple-900 to-black overflow-hidden relative">
      <div className="absolute inset-0 animate-float">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-60 animate-sparkle"></div>
        <div
          className="absolute top-40 right-32 w-1 h-1 bg-mystical-amber rounded-full opacity-80 animate-sparkle"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/2 w-1.5 h-1.5 bg-mystical-light rounded-full opacity-70 animate-sparkle"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-20 w-1 h-1 bg-white rounded-full opacity-50 animate-sparkle"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-2 h-2 bg-mystical-amber rounded-full opacity-60 animate-sparkle"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <nav className="relative z-10 flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-white font-['Cormorant']">
          ✨ ЮЛИЯ
        </div>
        <div className="hidden md:flex space-x-8 text-white">
          <a
            href="#about"
            className="hover:text-mystical-amber transition-colors"
          >
            Об эксперте
          </a>
          <a
            href="#reviews"
            className="hover:text-mystical-amber transition-colors"
          >
            Отзывы
          </a>
          <a
            href="#bot"
            className="hover:text-mystical-amber transition-colors"
          >
            Бот желаний
          </a>
        </div>
      </nav>

      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Cormorant'] leading-tight">
              Денежный
              <br />
              <span className="text-mystical-amber">Психолог</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 font-['Rubik']">
              Трансформирую ваши отношения с деньгами через магию подсознания и
              консультации
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-mystical-amber hover:bg-amber-600 text-black font-semibold px-8 py-3 text-lg">
                <Icon name="Sparkles" className="mr-2" size={20} />
                Получить бота желаний
              </Button>
              <Button
                variant="outline"
                className="border-mystical-violet text-white hover:bg-mystical-violet px-8 py-3 text-lg"
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Консультация
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-mystical-violet to-mystical-amber rounded-3xl blur opacity-30 animate-pulse"></div>
            <img
              src="/img/65c33cf9-1f9a-4b6d-99bc-32e3f9e4fa51.jpg"
              alt="Юлия - денежный психолог"
              className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto animate-float"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative z-10 py-20 bg-black/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Cormorant']">
              Об эксперте
            </h2>
            <div className="w-24 h-1 bg-mystical-amber mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-mystical-dark/80 border-mystical-violet text-white hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="text-mystical-amber mb-4">
                  <Icon name="Brain" size={48} />
                </div>
                <CardTitle className="text-xl font-['Cormorant']">
                  Психология денег
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Работаю с глубинными убеждениями о деньгах, помогаю
                  освободиться от блоков изобилия
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-mystical-dark/80 border-mystical-violet text-white hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="text-mystical-amber mb-4">
                  <Icon name="Zap" size={48} />
                </div>
                <CardTitle className="text-xl font-['Cormorant']">
                  Энергия изобилия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Настраиваю энергетические потоки для привлечения финансового
                  благополучия
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-mystical-dark/80 border-mystical-violet text-white hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="text-mystical-amber mb-4">
                  <Icon name="Target" size={48} />
                </div>
                <CardTitle className="text-xl font-['Cormorant']">
                  Результат
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Помогла более 1000 клиентам кардинально изменить свое
                  финансовое положение
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Cormorant']">
              Отзывы клиентов
            </h2>
            <div className="w-24 h-1 bg-mystical-amber mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-mystical-dark/80 border-mystical-violet text-white hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-mystical-amber">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg font-['Cormorant']">
                  Анна М.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  "За 3 месяца работы с Юлией мой доход увеличился в 2 раза!
                  Убрала все блоки по деньгам."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-mystical-dark/80 border-mystical-violet text-white hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-mystical-amber">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg font-['Cormorant']">
                  Михаил К.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  "Бот желаний творит чудеса! Через месяц использования получил
                  повышение на работе."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-mystical-dark/80 border-mystical-violet text-white hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-mystical-amber">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg font-['Cormorant']">
                  Елена Р.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  "Впервые в жизни чувствую себя достойной денег. Юлия -
                  настоящий мастер своего дела!"
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="bot"
        className="relative z-10 py-20 bg-gradient-to-r from-mystical-violet/20 to-mystical-amber/20 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Cormorant']">
              🤖 Бот желаний
            </h2>
            <div className="w-24 h-1 bg-mystical-amber mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Уникальный AI-помощник для материализации ваших денежных целей
              через работу с подсознанием
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-mystical-amber p-3 rounded-full">
                  <Icon name="MessageSquare" size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-['Cormorant']">
                    Персональные аффирмации
                  </h3>
                  <p className="text-gray-300">
                    Бот создает уникальные аффирмации под ваши денежные цели
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-mystical-amber p-3 rounded-full">
                  <Icon name="Clock" size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-['Cormorant']">
                    Ежедневные напоминания
                  </h3>
                  <p className="text-gray-300">
                    Получайте мотивирующие сообщения для достижения целей
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-mystical-amber p-3 rounded-full">
                  <Icon name="TrendingUp" size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-['Cormorant']">
                    Отслеживание прогресса
                  </h3>
                  <p className="text-gray-300">
                    Анализ ваших достижений и корректировка стратегии
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-mystical-dark/80 p-8 rounded-3xl border border-mystical-violet">
                <h3 className="text-3xl font-bold text-white mb-4 font-['Cormorant']">
                  Получить бота
                </h3>
                <p className="text-2xl text-mystical-amber font-bold mb-6">
                  2,997 ₽
                </p>
                <p className="text-gray-300 mb-6">
                  Пожизненный доступ к боту желаний
                </p>
                <Button className="w-full bg-mystical-amber hover:bg-amber-600 text-black font-semibold py-4 text-lg">
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Купить бота желаний
                </Button>
                <p className="text-sm text-gray-400 mt-4">
                  30 дней гарантии возврата средств
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-black/80 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-white mb-4 font-['Cormorant']">
            ✨ ЮЛИЯ
          </div>
          <p className="text-gray-400 mb-6">
            Денежный психолог • Эксперт по изобилию
          </p>
          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              className="text-white hover:text-mystical-amber"
            >
              <Icon name="MessageCircle" size={24} />
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-mystical-amber"
            >
              <Icon name="Phone" size={24} />
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-mystical-amber"
            >
              <Icon name="Mail" size={24} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
