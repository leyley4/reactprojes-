import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { lessons } from './data/lessons';
import { quizData } from './data/tests';

function App() {
  // GİRİŞ KONTROLÜ (Kullanıcı: leyla, Şifre: 1234)
 const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // SİSTEM STATE'LERİ
  const [activeTab, setActiveTab] = useState('dersler');
  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);
  const [selectedQuiz, setSelectedQuiz] = useState(quizData[0]);
  const [userAnswers, setUserAnswers] = useState<{[key: number]: string}>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  // GİRİŞ FONKSİYONU
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Küçük harf leyla kontrolü
    if (username.toLowerCase() === 'leyla' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      alert("Hatalı kullanıcı adı veya şifre!");
    }
  };

  const toggleComplete = (id: number) => {
    if (!completedLessons.includes(id)) {
      setCompletedLessons([...completedLessons, id]);
    } else {
      setCompletedLessons(completedLessons.filter(lessonId => lessonId !== id));
    }
  };

  // GİRİŞ YAPILMAMIŞSA FORM GÖSTER
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-950 p-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border-t-8 border-lime-500">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-green-900 italic tracking-tighter">PORTAL GİRİŞİ</h1>
            <p className="text-gray-500 text-xs mt-2 font-bold uppercase tracking-widest opacity-70">Öğrenci Yönetim Sistemi</p>
          </div>
          <div className="space-y-4">
            <input 
              type="text" placeholder="Kullanıcı Adı (leyla)" 
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-gray-800 transition-all"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input 
              type="password" placeholder="Şifre (1234)" 
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-gray-800 transition-all"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full py-4 bg-green-800 text-white rounded-xl font-black text-lg hover:bg-green-700 transition-all shadow-lg active:scale-95">
              SİSTEME GİRİŞ YAP
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f3f4f6]">
      <Header title="React TSX Eğitim Kampı" />
      
      <div className="container mx-auto flex flex-col md:flex-row flex-grow px-4 pb-10 mt-6 gap-6">
        
        {/* SOL MENÜ */}
        <aside className="w-full md:w-72 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 self-start shrink-0">
          <div className="flex border-b border-gray-100 bg-gray-50">
            <button 
              onClick={() => setActiveTab('dersler')} 
              className={`flex-1 py-4 text-[10px] font-black uppercase tracking-tighter transition-all ${activeTab === 'dersler' ? 'bg-green-800 text-white shadow-inner' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              Konu Anlatımı
            </button>
            <button 
              onClick={() => setActiveTab('testler')} 
              className={`flex-1 py-4 text-[10px] font-black uppercase tracking-tighter transition-all ${activeTab === 'testler' ? 'bg-green-800 text-white shadow-inner' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              Bilgi Testleri
            </button>
          </div>
          
          <nav className="flex flex-col max-h-[70vh] overflow-y-auto">
            {activeTab === 'dersler' ? (
              lessons.map((lesson) => (
                <button 
                  key={lesson.id} 
                  onClick={() => setSelectedLesson(lesson)} 
                  className={`text-left px-5 py-3.5 text-sm font-medium border-b border-gray-50 transition-all ${selectedLesson.id === lesson.id ? 'bg-lime-50 text-green-900 border-l-4 border-l-lime-500 pl-6' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                   {completedLessons.includes(lesson.id) ? '✅ ' : ''} {lesson.title}
                </button>
              ))
            ) : (
              quizData.map((quiz) => (
                <button 
                  key={quiz.id} 
                  onClick={() => { setSelectedQuiz(quiz); setIsSubmitted(false); setUserAnswers({}); }} 
                  className={`text-left px-5 py-4 text-sm font-bold border-b border-gray-50 transition-all ${selectedQuiz.id === quiz.id ? 'bg-lime-50 text-green-900 border-l-4 border-l-lime-500 pl-6' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  📝 {quiz.title}
                </button>
              ))
            )}
          </nav>
        </aside>

        {/* SAĞ ANA İÇERİK */}
        <main className="flex-grow space-y-6">
          
          {/* SAĞ ÜST DASHBOARD */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-600 flex flex-col justify-center">
                <span className="text-[10px] text-gray-400 font-black uppercase block">Öğrenci</span>
                <span className="text-sm font-black text-green-900 leading-none mt-1">Leyla Aydın</span>
                <span className="text-[9px] text-gray-400 block mt-1 italic">Samsun Üniversitesi Yazılım Müh.</span>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-lime-500">
                <span className="text-[10px] text-gray-400 font-black uppercase block tracking-tighter">Genel İlerleme</span>
                <span className="text-sm font-black text-green-900 block mt-1">%{((completedLessons.length / lessons.length) * 100).toFixed(0)} Tamamlandı</span>
                <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2">
                  <div className="bg-lime-500 h-full rounded-full transition-all duration-700 ease-out" style={{width: `${(completedLessons.length / lessons.length) * 100}%`}}></div>
                </div>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-800 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-gray-400 font-black uppercase block">Sistem</span>
                  <span className="text-sm font-black text-green-900">Çevrimiçi</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-800 flex justify-between items-center">
   <div>
   </div>
   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
</div>
             </div>
          </div>

          {/* İÇERİK KUTUSU */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10 transition-all duration-300">
            {activeTab === 'dersler' ? (
              <div>
                <div className="flex justify-between items-start border-b border-gray-50 pb-6 mb-6">
                  <div>
                    <span className="bg-lime-100 text-lime-700 px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-widest">Ders {selectedLesson.id}</span>
                    <h2 className="text-4xl font-black text-gray-900 mt-3 tracking-tight">{selectedLesson.title}</h2>
                  </div>
                  <button 
                    onClick={() => toggleComplete(selectedLesson.id)}
                    className={`px-5 py-2.5 rounded-xl text-[10px] font-black transition-all shadow-md ${completedLessons.includes(selectedLesson.id) ? 'bg-green-100 text-green-700 scale-95' : 'bg-green-800 text-white hover:bg-green-700 hover:shadow-lg active:scale-90'}`}
                  >
                    {completedLessons.includes(selectedLesson.id) ? 'TAMAMLANDI ✓' : 'ÖĞRENDİM OLARAK İŞARETLE'}
                  </button>
                </div>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">{selectedLesson.description}</p>
                <div className="bg-green-950 rounded-2xl p-6 relative border border-green-800 shadow-2xl overflow-hidden">
                  <div className="absolute top-3 right-4 text-[9px] text-green-500 font-mono font-bold uppercase tracking-[0.2em] opacity-50">KOD ÖRNEĞİ</div>
                  <pre className="text-lime-300 font-mono text-sm overflow-x-auto mt-4 leading-relaxed"><code>{selectedLesson.codeExample}</code></pre>
                </div>
              </div>
            ) : (
              <div>
                <div className="border-b border-gray-50 pb-4 mb-8">
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">{selectedQuiz?.title || "Test Yükleniyor..."}</h2>
                  <p className="text-sm text-gray-500 mt-2 font-medium italic opacity-75">{selectedQuiz?.description}</p>
                </div>
                
                <div className="space-y-6">
                  {selectedQuiz?.questions.map((q, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl border-2 transition-all duration-300 ${isSubmitted ? (userAnswers[idx] === q.correctAnswer ? 'border-green-400 bg-green-50/50 shadow-inner' : 'border-red-400 bg-red-50/50 shadow-inner') : 'bg-gray-50/50 border-gray-100 shadow-sm'}`}>
                      <h3 className="text-md font-black text-green-900 mb-5 flex items-center"><span className="bg-green-800 text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs mr-3 shrink-0">{idx+1}</span> {q.question}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {q.options.map((opt, i) => (
                          <button 
                            key={i} 
                            disabled={isSubmitted}
                            onClick={() => setUserAnswers({...userAnswers, [idx]: opt})} 
                            className={`text-left p-4 border-2 rounded-xl text-sm font-bold transition-all ${isSubmitted ? (opt === q.correctAnswer ? 'bg-green-100 border-green-600 text-green-900 ring-2 ring-green-600/20' : userAnswers[idx] === opt ? 'bg-red-100 border-red-600 text-red-900 opacity-80' : 'bg-white border-gray-100 opacity-40') : (userAnswers[idx] === opt ? 'bg-lime-50 border-green-600 shadow-md text-green-900 ring-2 ring-green-500/20 translate-x-1' : 'bg-white border-gray-100 hover:border-green-300 hover:bg-gray-50')}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {!isSubmitted ? (
                    <button onClick={() => setIsSubmitted(true)} className="w-full py-5 bg-green-800 text-white rounded-2xl font-black shadow-2xl hover:bg-green-700 transition-all active:scale-95 mt-8 tracking-widest">TESTİ TAMAMLA</button>
                  ) : (
                    <button onClick={() => {setIsSubmitted(false); setUserAnswers({});}} className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black shadow-2xl hover:bg-blue-700 transition-all active:scale-95 mt-8 tracking-widest">YENİDEN DENE</button>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;