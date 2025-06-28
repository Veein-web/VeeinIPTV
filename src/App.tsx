import React, { useState } from 'react';
import { Tv, Download, Satellite, Radio, Monitor, Smartphone, Tablet, Wifi, CheckCircle, Star, Globe, Play, Flag, FileText, Search, Film, Menu, X } from 'lucide-react';

type ChannelType = 'all' | 'bein' | 'osn' | 'egyptian' | 'mbc';

interface ChannelOption {
  id: ChannelType;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  channels: string;
  size: string;
}

function App() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ChannelType>('all');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const channelOptions: ChannelOption[] = [
    {
      id: 'all',
      name: 'جميع القنوات',
      description: 'مجموعة شاملة من جميع القنوات العربية والعالمية',
      icon: <Globe size={20} />,
      color: 'from-blue-500 to-cyan-500',
      channels: '1000+',
      size: '2.5 MB'
    },
    {
      id: 'bein',
      name: 'قنوات بي إن سبورت',
      description: 'جميع قنوات بي إن سبورت الرياضية بجودة عالية',
      icon: <Star size={20} />,
      color: 'from-green-500 to-emerald-500',
      channels: '50+',
      size: '150 KB'
    },
    {
      id: 'osn',
      name: 'قنوات OSN',
      description: 'قنوات OSN للأفلام والمسلسلات والترفيه',
      icon: <Play size={20} />,
      color: 'from-purple-500 to-pink-500',
      channels: '80+',
      size: '200 KB'
    },
    {
      id: 'mbc',
      name: 'قنوات MBC',
      description: 'جميع قنوات MBC الترفيهية والإخبارية والرياضية',
      icon: <Film size={20} />,
      color: 'from-orange-500 to-red-500',
      channels: '60+',
      size: '180 KB'
    },
    {
      id: 'egyptian',
      name: 'القنوات المصرية',
      description: 'جميع القنوات المصرية الرسمية والخاصة',
      icon: <Flag size={20} />,
      color: 'from-red-500 to-yellow-500',
      channels: '120+',
      size: '300 KB'
    }
  ];

  const handleDownload = () => {
    setIsDownloading(true);
    
    setTimeout(() => {
      setIsDownloading(false);
      
      // توجيه المستخدم للروابط المناسبة حسب الخيار المحدد
      if (selectedOption === 'all') {
        window.open('https://exe.io/4Jz6Pdd', '_blank');
        return;
      }
      
      if (selectedOption === 'egyptian') {
        window.open('https://shrinkme.ink/egiptv2', '_blank');
        return;
      }
      
      if (selectedOption === 'bein') {
        window.open('ttphs://exe.io/faxV', '_blank');
        return;
      }
      
      if (selectedOption === 'osn') {
        window.open('https://exe.io/oJEKS68', '_blank');
        return;
      }
      
      if (selectedOption === 'mbc') {
        window.open('https://shrinkme.ink/vaG81', '_blank');
        return;
      }
    }, 2000);
  };

  const selectedOptionData = channelOptions.find(option => option.id === selectedOption)!;

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden" dir="rtl">
      {/* Animated Background Icons - Hidden on mobile for better performance */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <div className="absolute top-20 right-20 animate-pulse">
          <Tv size={60} className="text-sky-400" />
        </div>
        <div className="absolute top-40 left-32 animate-bounce" style={{ animationDelay: '1s' }}>
          <Monitor size={45} className="text-blue-400" />
        </div>
        <div className="absolute bottom-40 right-40 animate-pulse" style={{ animationDelay: '2s' }}>
          <Satellite size={50} className="text-cyan-400" />
        </div>
        <div className="absolute top-60 left-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <Radio size={40} className="text-indigo-400" />
        </div>
        <div className="absolute bottom-60 left-60 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <Smartphone size={35} className="text-sky-400" />
        </div>
        <div className="absolute top-32 left-1/2 animate-bounce" style={{ animationDelay: '3s' }}>
          <Tablet size={42} className="text-blue-400" />
        </div>
        <div className="absolute bottom-32 right-20 animate-pulse" style={{ animationDelay: '2.5s' }}>
          <Wifi size={48} className="text-cyan-400" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-3 sm:p-4 lg:p-6">
        <div className="max-w-6xl w-full">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <img src="/logo.png" alt="Veein IPTV Logo" className="mx-auto w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain mb-4 sm:mb-6 drop-shadow-lg" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight px-2">
              Veein IPTV - البث المباشر المجاني
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-3 sm:mb-4 px-4">
              قوائم IPTV محدثة ومجانية لأفضل القنوات العربية والعالمية
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-slate-400 mb-4 sm:mb-6 max-w-4xl mx-auto px-4 leading-relaxed">
              موقع Veein IPTV يوفر لك إمكانية الوصول إلى آلاف القنوات التلفزيونية عالية الجودة مجاناً. 
              نحن نقدم قوائم IPTV محدثة يومياً تشمل القنوات الرياضية، الإخبارية، الترفيهية، وقنوات الأطفال. 
              استمتع بمشاهدة قنوات بي إن سبورت، OSN، MBC، والقنوات المصرية والعربية بجودة HD و 4K على جميع أجهزتك.
            </p>
          </div>

          {/* SEO Content Section - Collapsible on mobile */}
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">لماذا تختار Veein IPTV؟</h2>
              <button 
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden text-white p-2"
              >
                {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-slate-300 ${showMobileMenu ? 'block' : 'hidden md:grid'}`}>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">خدمة IPTV مجانية وموثوقة</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  نوفر خدمة بث مباشر مجانية تماماً مع قوائم محدثة يومياً لضمان أفضل تجربة مشاهدة. 
                  جميع القنوات متاحة بجودة عالية ومتوافقة مع جميع تطبيقات IPTV.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">تنوع في المحتوى</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  من القنوات الرياضية مثل بي إن سبورت إلى قنوات الأفلام والمسلسلات مثل OSN و MBC، 
                  بالإضافة إلى القنوات الإخبارية والترفيهية العربية والعالمية.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">سهولة الاستخدام</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  واجهة بسيطة وسهلة الاستخدام تمكنك من تحميل قوائم القنوات بنقرة واحدة. 
                  متوافق مع جميع الأجهزة: التلفزيون الذكي، الهاتف المحمول، والكمبيوتر.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">تحديث مستمر</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  نحرص على تحديث قوائم القنوات بشكل مستمر لضمان عمل جميع الروابط وإضافة قنوات جديدة. 
                  خوادم سريعة ومستقرة لضمان بث متواصل بدون انقطاع.
                </p>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-slate-700/50">
            {/* Channel Options */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">اختر نوع القنوات</h2>
              
              {/* Mobile: Horizontal scroll */}
              <div className="block sm:hidden">
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                  {channelOptions.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => setSelectedOption(option.id)}
                      className={`
                        relative cursor-pointer rounded-xl p-4 border-2 transition-all duration-300 min-w-[200px] flex-shrink-0
                        ${selectedOption === option.id 
                          ? 'border-sky-400 bg-sky-500/10 shadow-lg shadow-sky-500/20' 
                          : 'border-slate-600 bg-slate-700/30 hover:border-slate-500 hover:bg-slate-700/50'
                        }
                      `}
                    >
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 bg-gradient-to-r ${option.color}`}>
                        <div className="text-white">
                          {option.icon}
                        </div>
                      </div>
                      <h3 className="text-white font-bold text-base mb-2">{option.name}</h3>
                      <p className="text-slate-300 text-xs mb-2 line-clamp-2">{option.description}</p>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">{option.channels}</span>
                        <span className="text-slate-400">{option.size}</span>
                      </div>
                      {selectedOption === option.id && (
                        <div className="absolute top-3 left-3">
                          <CheckCircle size={16} className="text-sky-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden sm:grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                {channelOptions.map((option) => (
                  <div
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`
                      relative cursor-pointer rounded-xl lg:rounded-2xl p-4 lg:p-6 border-2 transition-all duration-300
                      ${selectedOption === option.id 
                        ? 'border-sky-400 bg-sky-500/10 shadow-lg shadow-sky-500/20' 
                        : 'border-slate-600 bg-slate-700/30 hover:border-slate-500 hover:bg-slate-700/50'
                      }
                    `}
                  >
                    <div className={`inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl mb-3 lg:mb-4 bg-gradient-to-r ${option.color}`}>
                      <div className="text-white">
                        {option.icon}
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-sm lg:text-lg mb-2">{option.name}</h3>
                    <p className="text-slate-300 text-xs lg:text-sm mb-2 lg:mb-3">{option.description}</p>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">{option.channels} قناة</span>
                      <span className="text-slate-400">{option.size}</span>
                    </div>
                    {selectedOption === option.id && (
                      <div className="absolute top-3 lg:top-4 left-3 lg:left-4">
                        <CheckCircle size={16} className="text-sky-400 lg:w-5 lg:h-5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <CheckCircle size={20} className="text-green-400 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base">قنوات عالية الجودة</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">جودة HD و 4K</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Satellite size={20} className="text-blue-400 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base">تحديث مستمر</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">قوائم محدثة يومياً</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Monitor size={20} className="text-purple-400 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base">متوافق مع جميع الأجهزة</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">TV Box, Mobile, PC</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Wifi size={20} className="text-cyan-400 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base">استقرار في الإشارة</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">خوادم موثوقة</p>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="text-center">
              <div className="bg-slate-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 bg-gradient-to-r ${selectedOptionData.color}`}>
                  <div className="text-white">
                    {selectedOptionData.icon}
                  </div>
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">{selectedOptionData.name}</h2>
                <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base px-2">{selectedOptionData.description}</p>
                <div className="flex justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <Tv size={14} className="text-sky-400 sm:w-4 sm:h-4" />
                    <span className="text-slate-300">{selectedOptionData.channels} قناة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download size={14} className="text-green-400 sm:w-4 sm:h-4" />
                    <span className="text-slate-300">{selectedOptionData.size}</span>
                  </div>
                </div>
                
                {selectedOption === 'all' && (
                  <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 sm:px-3 rounded-full">رياضة</span>
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 sm:px-3 rounded-full">أخبار</span>
                    <span className="bg-purple-500/20 text-purple-400 px-2 py-1 sm:px-3 rounded-full">أفلام</span>
                    <span className="bg-orange-500/20 text-orange-400 px-2 py-1 sm:px-3 rounded-full">مسلسلات</span>
                    <span className="bg-pink-500/20 text-pink-400 px-2 py-1 sm:px-3 rounded-full">أطفال</span>
                    <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 sm:px-3 rounded-full">موسيقى</span>
                  </div>
                )}
                
                {selectedOption === 'bein' && (
                  <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 sm:px-3 rounded-full">beIN Sports</span>
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 sm:px-3 rounded-full">Premium</span>
                    <span className="bg-purple-500/20 text-purple-400 px-2 py-1 sm:px-3 rounded-full">HD</span>
                  </div>
                )}
                
                {selectedOption === 'osn' && (
                  <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                    <span className="bg-purple-500/20 text-purple-400 px-2 py-1 sm:px-3 rounded-full">أفلام</span>
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 sm:px-3 rounded-full">مسلسلات</span>
                    <span className="bg-pink-500/20 text-pink-400 px-2 py-1 sm:px-3 rounded-full">أطفال</span>
                    <span className="bg-orange-500/20 text-orange-400 px-2 py-1 sm:px-3 rounded-full">كوميديا</span>
                  </div>
                )}

                {selectedOption === 'mbc' && (
                  <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                    <span className="bg-orange-500/20 text-orange-400 px-2 py-1 sm:px-3 rounded-full">MBC 1</span>
                    <span className="bg-red-500/20 text-red-400 px-2 py-1 sm:px-3 rounded-full">MBC 2</span>
                    <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 sm:px-3 rounded-full">MBC 3</span>
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 sm:px-3 rounded-full">MBC 4</span>
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 sm:px-3 rounded-full">MBC Action</span>
                    <span className="bg-purple-500/20 text-purple-400 px-2 py-1 sm:px-3 rounded-full">MBC Max</span>
                  </div>
                )}

                {selectedOption === 'egyptian' && (
                  <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                    <span className="bg-red-500/20 text-red-400 px-2 py-1 sm:px-3 rounded-full">القنوات الرسمية</span>
                    <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 sm:px-3 rounded-full">الدراما</span>
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 sm:px-3 rounded-full">الأخبار</span>
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 sm:px-3 rounded-full">الرياضة</span>
                    <span className="bg-purple-500/20 text-purple-400 px-2 py-1 sm:px-3 rounded-full">الترفيه</span>
                  </div>
                )}
              </div>

              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className={`
                  relative inline-flex items-center justify-center
                  w-full max-w-sm h-12 sm:h-14 lg:h-16 px-4 sm:px-6 lg:px-8 py-3 sm:py-4
                  bg-gradient-to-r ${selectedOptionData.color}
                  hover:shadow-xl hover:scale-105 active:scale-95
                  text-white font-bold text-sm sm:text-base lg:text-lg
                  rounded-xl sm:rounded-2xl shadow-lg
                  transform transition-all duration-200
                  disabled:opacity-70 disabled:cursor-not-allowed
                  disabled:transform-none
                  touch-manipulation
                `}
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-2 border-white border-t-transparent ml-2 sm:ml-3"></div>
                    جاري التوجيه...
                  </>
                ) : (
                  <>
                    <Download size={18} className="ml-2 sm:ml-3 sm:w-6 sm:h-6" />
                    <span className="text-center leading-tight">
                      {selectedOption === 'all' ? 'الحصول على جميع القنوات' :
                       selectedOption === 'egyptian' ? 'الحصول على القنوات المصرية' : 
                       selectedOption === 'bein' ? 'الحصول على قنوات بي إن سبورت' :
                       selectedOption === 'osn' ? 'الحصول على قنوات OSN' :
                       selectedOption === 'mbc' ? 'الحصول على قنوات MBC' :
                       `تحميل ${selectedOptionData.name}`}
                    </span>
                  </>
                )}
              </button>

              <p className="text-slate-400 text-xs sm:text-sm mt-3 sm:mt-4">
                سيتم توجيهك لصفحة تحميل القنوات
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6 sm:mt-8 bg-slate-800/30 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/30">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4 text-center">طريقة الاستخدام</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                  1
                </div>
                <p className="text-slate-300 text-sm sm:text-base">اختر نوع القنوات المطلوبة من الخيارات أعلاه</p>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                  2
                </div>
                <p className="text-slate-300 text-sm sm:text-base">قم بتحميل ملف القنوات من الزر أعلاه</p>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                  3
                </div>
                <p className="text-slate-300 text-sm sm:text-base">افتح تطبيق IPTV المفضل لديك</p>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                  4
                </div>
                <p className="text-slate-300 text-sm sm:text-base">أضف ملف القنوات واستمتع بالمشاهدة</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 sm:mt-8 text-slate-400 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
              <a 
                href="/sitemap.xml" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <Search size={14} className="sm:w-4 sm:h-4" />
                <span>خريطة الموقع</span>
              </a>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <a 
                href="/robots.txt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <FileText size={14} className="sm:w-4 sm:h-4" />
                <span>ملف الروبوت</span>
              </a>
            </div>
            <p className="text-xs sm:text-sm">© 2025 Veein IPTV - جميع الحقوق محفوظة</p>
            <p className="text-xs mt-2 px-4">
              موقع Veein IPTV - أفضل مصدر للحصول على قوائم IPTV المجانية والمحدثة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;