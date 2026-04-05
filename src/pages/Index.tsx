import { useState } from "react";
import {
  Shield,
  Zap,
  ImageIcon,
  Paperclip,
  Users,
  Mic,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Hash,
  ArrowRight,
  Phone,
  Video,
  Smile,
  PlusCircle,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">
      {/* Навигация */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">💬</span>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">FreeTalk</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">Общайся со своими людьми</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b]">
              О приложении
            </Button>
            <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
              Начать бесплатно
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#202225]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] justify-start">
                О приложении
              </Button>
              <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
                Начать бесплатно
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Макет в стиле мессенджера */}
      <div className="flex min-h-screen">
        {/* Боковая панель серверов */}
        <div className="hidden lg:flex w-[72px] bg-[#202225] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-[#5865f2] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer">
            <span className="text-white text-xl">💬</span>
          </div>
          <div className="w-8 h-[2px] bg-[#36393f] rounded-full"></div>
          {["👥", "🎮", "🏠", "⭐"].map((emoji, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#5865f2] text-lg"
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Основной контент */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель каналов */}
          <div className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 bg-[#2f3136] flex flex-col`}>
            <div className="p-4 border-b border-[#202225] flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">Мои чаты</h2>
              <Button
                variant="ghost"
                className="lg:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Группы</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["общий чат", "фото и видео", "файлы", "мемы"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Hash className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Голосовые</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["Просто поговорить", "Игровая комната"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Mic className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Пользователь */}
            <div className="p-2 bg-[#292b2f] flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center relative">
                <span className="text-white text-sm font-medium">Я</span>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#292b2f] rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Мой аккаунт</div>
                <div className="text-[#b9bbbe] text-xs truncate">В сети</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Mic className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Settings className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Область чата */}
          <div className="flex-1 flex flex-col">
            {/* Заголовок чата */}
            <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Hash className="w-5 h-5 text-[#8e9297]" />
              <span className="text-white font-semibold">общий чат</span>
              <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
              <span className="text-[#8e9297] text-sm hidden sm:block">Текст, голос, фото, файлы — всё здесь</span>
              <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Video className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              </div>
            </div>

            {/* Сообщения чата */}
            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-5 overflow-y-auto">

              {/* Приветственное системное сообщение */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">💬</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">FreeTalk</span>
                    <span className="bg-[#5865f2] text-white text-xs px-1 rounded">система</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 10:00</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    <p className="mb-3">
                      <strong>Добро пожаловать в FreeTalk!</strong> Здесь ты можешь общаться с друзьями — отправляй текстовые сообщения, голосовые кружки, фото и файлы.
                    </p>
                    <div className="bg-[#2f3136] border-l-4 border-[#5865f2] p-3 sm:p-4 rounded">
                      <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что умеет FreeTalk:</h3>
                      <ul className="space-y-1 text-xs sm:text-sm text-[#b9bbbe]">
                        <li>🗒️ Текстовые сообщения в реальном времени</li>
                        <li>🎤 Голосовые кружки — просто держи и говори</li>
                        <li>🖼️ Отправка фотографий и изображений</li>
                        <li>📎 Файлы любого формата</li>
                        <li>👥 Групповые чаты и личные сообщения</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Текстовое сообщение */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">К</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Катя</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 11:24</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base mb-2">
                    Привет всем! Смотрите что нашла 😄
                  </div>
                  {/* Демо фото */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden w-full max-w-xs">
                    <div className="h-40 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="w-10 h-10 text-white/70 mx-auto mb-2" />
                        <span className="text-white/80 text-xs">photo_2024.jpg</span>
                      </div>
                    </div>
                    <div className="px-3 py-2 flex items-center justify-between">
                      <span className="text-[#b9bbbe] text-xs">photo_2024.jpg · 2.4 МБ</span>
                      <Icon name="Download" className="w-4 h-4 text-[#b9bbbe]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Голосовой кружок */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">Д</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Денис</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 11:26</span>
                  </div>
                  {/* Голосовой кружок */}
                  <div className="flex items-center gap-3 bg-[#2f3136] border border-[#202225] rounded-full px-3 py-2 w-fit max-w-xs">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 relative">
                      <Mic className="w-5 h-5 text-white" />
                      <div className="absolute inset-0 rounded-full border-2 border-[#3ba55c] animate-ping opacity-40"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex gap-0.5 items-center h-6">
                        {[3,5,8,6,4,7,5,3,6,8,4,5].map((h, i) => (
                          <div key={i} className="w-1 bg-[#3ba55c] rounded-full" style={{height: `${h * 3}px`}}></div>
                        ))}
                      </div>
                      <div className="text-[#b9bbbe] text-xs mt-1">0:12 · Голосовое сообщение</div>
                    </div>
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:bg-[#40444b] rounded-full">
                      <Icon name="Play" className="w-4 h-4 text-[#b9bbbe]" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Файл */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">М</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Максим</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 11:30</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base mb-2">
                    Скинул таблицу, как и обещал 👆
                  </div>
                  {/* Файл */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-3 flex items-center gap-3 w-full max-w-xs">
                    <div className="w-10 h-10 bg-[#5865f2] rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">расписание.xlsx</div>
                      <div className="text-[#b9bbbe] text-xs">Excel · 48 КБ</div>
                    </div>
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                      <Icon name="Download" className="w-4 h-4 text-[#b9bbbe]" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Ответ */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">А</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Антон</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 11:32</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    Спасибо! Всё получил 🙌 Давайте сегодня вечером созвонимся в голосовом?
                  </div>
                </div>
              </div>

              {/* Секция "Начало работы" */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🚀</span>
                  Начни общаться прямо сейчас
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">1</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Создай аккаунт</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Регистрация за 30 секунд — только имя и пароль</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">2</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Добавь друзей</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Пригласи по ссылке или найди по нику</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">3</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Общайся!</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Текст, голос, фото, файлы — без ограничений</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium">
                    <Icon name="UserPlus" size={16} className="mr-2" />
                    Зарегистрироваться
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#4f545c] text-[#b9bbbe] hover:bg-[#40444b] hover:border-[#6d6f78] px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium bg-transparent"
                  >
                    <Icon name="LogIn" size={16} className="mr-2" />
                    Войти
                  </Button>
                </div>
              </div>

              {/* Преимущества */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Почему FreeTalk?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {
                      icon: <Mic className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Голосовые кружки",
                      desc: "Записывай и слушай — как в Telegram, только твоё",
                    },
                    {
                      icon: <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Фото без потери качества",
                      desc: "Делись снимками в оригинальном разрешении",
                    },
                    {
                      icon: <Paperclip className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Любые файлы",
                      desc: "PDF, ZIP, XLSX — отправляй что угодно",
                    },
                    {
                      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Только для своих",
                      desc: "Закрытые чаты, только ты и твои друзья",
                    },
                    {
                      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Мгновенная доставка",
                      desc: "Сообщения приходят в реальном времени",
                    },
                    {
                      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Групповые чаты",
                      desc: "Общайся сразу со всей компанией",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#36393f] transition-colors"
                    >
                      <div className="text-[#5865f2] mt-0.5">{feature.icon}</div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-[#b9bbbe] text-xs sm:text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Поле ввода сообщения */}
            <div className="p-2 sm:p-4">
              <div className="bg-[#40444b] rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-[#b9bbbe] cursor-pointer hover:text-white flex-shrink-0" />
                <div className="flex-1 text-[#72767d] text-xs sm:text-sm">Написать в #общий чат</div>
                <div className="flex items-center gap-2">
                  <Mic className="w-5 h-5 text-[#b9bbbe] cursor-pointer hover:text-white" />
                  <ImageIcon className="w-5 h-5 text-[#b9bbbe] cursor-pointer hover:text-white" />
                  <Smile className="w-5 h-5 text-[#b9bbbe] cursor-pointer hover:text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Боковая панель участников */}
          <div className="hidden xl:block w-60 bg-[#2f3136] p-4">
            <div className="mb-4">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-3">В сети — 4</h3>
              <div className="space-y-2">
                {[
                  { name: "Катя", status: "Слушает музыку", avatar: "К", color: "from-purple-500 to-pink-500" },
                  { name: "Денис", status: "В игре", avatar: "Д", color: "from-green-500 to-teal-500" },
                  { name: "Максим", status: "В сети", avatar: "М", color: "from-orange-500 to-yellow-500" },
                  { name: "Антон", status: "Онлайн", avatar: "А", color: "from-blue-500 to-indigo-500" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative`}>
                      <span className="text-white text-sm font-medium">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#b9bbbe] text-xs truncate">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-3">Не в сети — 2</h3>
              <div className="space-y-2">
                {[
                  { name: "Оля", avatar: "О", color: "from-pink-400 to-rose-500" },
                  { name: "Серёжа", avatar: "С", color: "from-cyan-500 to-blue-500" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer opacity-50">
                    <div className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative`}>
                      <span className="text-white text-sm font-medium">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#747f8d] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#b9bbbe] text-xs truncate">Не в сети</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
