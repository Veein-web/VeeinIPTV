import React, { useState } from 'react';
import { Tv, Download, Satellite, Radio, Monitor, Smartphone, Tablet, Wifi, CheckCircle, Star, Globe, Play, Flag, FileText, Search, Film } from 'lucide-react';

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

  const channelOptions: ChannelOption[] = [
    {
      id: 'all',
      name: 'جميع القنوات',
      description: 'مجموعة شاملة من جميع القنوات العربية والعالمية',
      icon: <Globe size={24} />,
      color: 'from-blue-500 to-cyan-500',
      channels: '1000+',
      size: '2.5 MB'
    },
    {
      id: 'bein',
      name: 'قنوات بي إن سبورت',
      description: 'جميع قنوات بي إن سبورت الرياضية بجودة عالية',
      icon: <Star size={24} />,
      color: 'from-green-500 to-emerald-500',
      channels: '50+',
      size: '150 KB'
    },
    {
      id: 'osn',
      name: 'قنوات OSN',
      description: 'قنوات OSN للأفلام والمسلسلات والترفيه',
      icon: <Play size={24} />,
      color: 'from-purple-500 to-pink-500',
      channels: '80+',
      size: '200 KB'
    },
    {
      id: 'mbc',
      name: 'قنوات MBC',
      description: 'جميع قنوات MBC الترفيهية والإخبارية والرياضية',
      icon: <Film size={24} />,
      color: 'from-orange-500 to-red-500',
      channels: '60+',
      size: '180 KB'
    },
    {
      id: 'egyptian',
      name: 'القنوات المصرية',
      description: 'جميع القنوات المصرية الرسمية والخاصة',
      icon: <Flag size={24} />,
      color: 'from-red-500 to-yellow-500',
      channels: '120+',
      size: '300 KB'
    }
  ];

  const generateM3UContent = (type: ChannelType): string => {
    // جميع الخيارات الآن تتوجه لروابط خارجية
    return 'REDIRECT_TO_LINK';
  };

  const getFileName = (type: ChannelType): string => {
    switch (type) {
      case 'bein':
        return 'bein-sports-channels.m3u';
      case 'osn':
        return 'osn-channels.m3u';
      case 'mbc':
        return 'mbc-channels.m3u';
      case 'egyptian':
        return 'egyptian-channels.m3u';
      default:
        return 'all-iptv-channels.m3u';
    }
  };

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
        window.open('https://exe.io/1LjIx', '_blank');
        return;
      }
      
      if (selectedOption === 'osn') {
        window.open('https://exe.io/hAJZiSQ', '_blank');
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
      {/* Animated Background Icons */}
      <div className="absolute inset-0 opacity-5">
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
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-5xl w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full mb-6 shadow-lg shadow-sky-500/25">
              <span className="text-white font-bold text-lg">Veein</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Veein IPTV - البث المباشر المجاني
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              قوائم IPTV محدثة ومجانية لأفضل القنوات العربية والعالمية
            </p>
            <p className="text-lg text-slate-400 mb-6 max-w-3xl mx-auto">
              موقع Veein IPTV يوفر لك إمكانية الوصول إلى آلاف القنوات التلفزيونية عالية الجودة مجاناً. 
              نحن نقدم قوائم IPTV محدثة يومياً تشمل القنوات الرياضية، الإخبارية، الترفيهية، وقنوات الأطفال. 
              استمتع بمشاهدة قنوات بي إن سبورت، OSN، MBC، والقنوات المصرية والعربية بجودة HD و 4K على جميع أجهزتك.
            </p>
          </div>

          {/* SEO Content Section */}
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-slate-700/30">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">لماذا تختار Veein IPTV؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">خدمة IPTV مجانية وموثوقة</h3>
                <p className="text-sm">
                  نوفر خدمة بث مباشر مجانية تماماً مع قوائم محدثة يومياً لضمان أفضل تجربة مشاهدة. 
                  جميع القنوات متاحة بجودة عالية ومتوافقة مع جميع تطبيقات IPTV.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">تنوع في المحتوى</h3>
                <p className="text-sm">
                  من القنوات الرياضية مثل بي إن سبورت إلى قنوات الأفلام والمسلسلات مثل OSN و MBC، 
                  بالإضافة إلى القنوات الإخبارية والترفيهية العربية والعالمية.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">سهولة الاستخدام</h3>
                <p className="text-sm">
                  واجهة بسيطة وسهلة الاستخدام تمكنك من تحميل قوائم القنوات بنقرة واحدة. 
                  متوافق مع جميع الأجهزة: التلفزيون الذكي، الهاتف المحمول، والكمبيوتر.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">تحديث مستمر</h3>
                <p className="text-sm">
                  نحرص على تحديث قوائم القنوات بشكل مستمر لضمان عمل جميع الروابط وإضافة قنوات جديدة. 
                  خوادم سريعة ومستقرة لضمان بث متواصل بدون انقطاع.
                </p>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-700/50">
            {/* Channel Options */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">اختر نوع القنوات</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {channelOptions.map((option) => (
                  <div
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`
                      relative cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300
                      ${selectedOption === option.id 
                        ? 'border-sky-400 bg-sky-500/10 shadow-lg shadow-sky-500/20' 
                        : 'border-slate-600 bg-slate-700/30 hover:border-slate-500 hover:bg-slate-700/50'
                      }
                    `}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-r ${option.color}`}>
                      <div className="text-white">
                        {option.icon}
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{option.name}</h3>
                    <p className="text-slate-300 text-sm mb-3">{option.description}</p>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">{option.channels} قناة</span>
                      <span className="text-slate-400">{option.size}</span>
                    </div>
                    {selectedOption === option.id && (
                      <div className="absolute top-4 left-4">
                        <CheckCircle size={20} className="text-sky-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <CheckCircle size={24} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">قنوات عالية الجودة</h3>
                  <p className="text-slate-400 text-sm">جودة HD و 4K</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Satellite size={24} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">تحديث مستمر</h3>
                  <p className="text-slate-400 text-sm">قوائم محدثة يومياً</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Monitor size={24} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">متوافق مع جميع الأجهزة</h3>
                  <p className="text-slate-400 text-sm">TV Box, Mobile, PC</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <Wifi size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">استقرار في الإشارة</h3>
                  <p className="text-slate-400 text-sm">خوادم موثوقة</p>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="text-center">
              <div className="bg-slate-700/30 rounded-2xl p-6 mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 bg-gradient-to-r ${selectedOptionData.color}`}>
                  <div className="text-white">
                    {selectedOptionData.icon}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{selectedOptionData.name}</h2>
                <p className="text-slate-300 mb-4">{selectedOptionData.description}</p>
                <div className="flex justify-center items-center gap-6 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Tv size={16} className="text-sky-400" />
                    <span className="text-slate-300">{selectedOptionData.channels} قناة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download size={16} className="text-green-400" />
                    <span className="text-slate-300">{selectedOptionData.size}</span>
                  </div>
                </div>
                
                {selectedOption === 'all' && (
                  <div className="flex flex-wrap justify-center gap-2 text-sm">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">رياضة</span>
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">أخبار</span>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">أفلام</span>
                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">مسلسلات</span>
                    <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full">أطفال</span>
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">موسيقى</span>
                  </div>
                )}
                
                {selectedOption === 'bein' && (
                  <div className="flex flex-wrap justify-center gap-2 text-sm">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">beIN Sports</span>
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">Premium</span>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">HD</span>
                  </div>
                )}
                
                {selectedOption === 'osn' && (
                  <div className="flex flex-wrap justify-center gap-2 text-sm">
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">أفلام</span>
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">مسلسلات</span>
                    <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full">أطفال</span>
                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">كوميديا</span>
                  </div>
                )}

                {selectedOption === 'mbc' && (
                  <div className="flex flex-wrap justify-center gap-2 text-sm">
                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">MBC 1</span>
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full">MBC 2</span>
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">MBC 3</span>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">MBC 4</span>
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">MBC Action</span>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">MBC Max</span>
                  </div>
                )}

                {selectedOption === 'egyptian' && (
                  <div className="flex flex-wrap justify-center gap-2 text-sm">
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full">القنوات الرسمية</span>
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">الدراما</span>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">الأخبار</span>
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">الرياضة</span>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">الترفيه</span>
                  </div>
                )}
              </div>

              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className={`
                  relative inline-flex items-center justify-center
                  w-full max-w-xs h-16 px-8 py-4
                  bg-gradient-to-r ${selectedOptionData.color}
                  hover:shadow-xl hover:scale-105 active:scale-95
                  text-white font-bold text-lg
                  rounded-2xl shadow-lg
                  transform transition-all duration-200
                  disabled:opacity-70 disabled:cursor-not-allowed
                  disabled:transform-none
                `}
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent ml-3"></div>
                    جاري التوجيه...
                  </>
                ) : (
                  <>
                    <Download size={24} className="ml-3" />
                    {selectedOption === 'all' ? 'الحصول على جميع القنوات' :
                     selectedOption === 'egyptian' ? 'الحصول على القنوات المصرية' : 
                     selectedOption === 'bein' ? 'الحصول على قنوات بي إن سبورت' :
                     selectedOption === 'osn' ? 'الحصول على قنوات OSN' :
                     selectedOption === 'mbc' ? 'الحصول على قنوات MBC' :
                     `تحميل ${selectedOptionData.name}`}
                  </>
                )}
              </button>

              <p className="text-slate-400 text-sm mt-4">
                سيتم توجيهك لصفحة تحميل القنوات
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/30">
            <h3 className="text-xl font-bold text-white mb-4 text-center">طريقة الاستخدام</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <p className="text-slate-300">اختر نوع القنوات المطلوبة من الخيارات أعلاه</p>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <p className="text-slate-300">قم بتحميل ملف القنوات من الزر أعلاه</p>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <p className="text-slate-300">افتح تطبيق IPTV المفضل لديك</p>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <p className="text-slate-300">أضف ملف القنوات واستمتع بالمشاهدة</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-slate-400 text-sm">
            <div className="flex justify-center items-center gap-4 mb-4">
              <a 
                href="/sitemap.xml" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <Search size={16} />
                <span>خريطة الموقع</span>
              </a>
              <span className="text-slate-600">|</span>
              <a 
                href="/robots.txt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <FileText size={16} />
                <span>ملف الروبوت</span>
              </a>
            </div>
            <p>© 2025 Veein IPTV - جميع الحقوق محفوظة</p>
            <p className="text-xs mt-2">
              موقع Veein IPTV - أفضل مصدر للحصول على قوائم IPTV المجانية والمحدثة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;