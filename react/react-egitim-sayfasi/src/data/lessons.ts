import type { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "React Intro",
    description: "React, kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesidir. Tek sayfalık uygulamalar (SPA) geliştirmek için kullanılır ve yeniden kullanılabilir UI (Kullanıcı Arayüzü) bileşenleri oluşturmamıza olanak tanır.",
    codeExample: `import { createRoot } from 'react-dom/client';

function Hello() {
  return (
    <h1>Hello World!</h1>
  );
}

const root = document.getElementById('root');
createRoot(root).render(<Hello />);`
  },
  { 
    id: 2, 
    title: "React Get Started", 
    description: "React projesi oluşturmanın en modern ve hızlı yolu Vite kullanmaktır. Bilgisayarınızda Node.js kuruluysa, terminal üzerinden birkaç basit komutla TypeScript destekli yeni bir React projesini anında başlatabilirsiniz.", 
    codeExample: `// Terminali açın ve şu komutları sırasıyla çalıştırın:

// 1. Vite ile 'my-react-app' adında bir proje oluşturun
npm create vite@latest my-react-app -- --template react-ts

// 2. Oluşturulan proje klasörünün içine girin
cd my-react-app

// 3. Gerekli paketleri ve bağımlılıkları indirin
npm install

// 4. Geliştirme sunucusunu başlatın
npm run dev` 
  },
  { 
    id: 3, 
    title: "React ES6", 
    description: "React geliştirirken modern JavaScript (ES6) özelliklerini çok sık kullanırız. Bunların en önemlileri; ok fonksiyonları (Arrow Functions), verileri parçalama (Destructuring), değişken tanımları (let/const), modüller (import/export) ve map() gibi dizi metotlarıdır.", 
    codeExample: `// ES6 Ok Fonksiyonu (Arrow Function) ve Props Parçalama (Destructuring)
const Kullanici = ({ isim, yas }) => {
  return (
    <div>
      <h2>İsim: {isim}</h2>
      <p>Yaş: {yas}</p>
    </div>
  );
}

// ES6 Modül Sistemi ile dışa aktarma
export default Kullanici;` 
  },
  // 4. DERS: React JSX
  { 
    id: 4, 
    title: "React JSX", 
    description: "JSX, JavaScript dosyası içinde HTML benzeri kodlar yazmamıza olanak tanır. JSX kullanırken dikkat etmeniz gereken en önemli kural; her şeyin tek bir ana element (Parent) içinde olması ve class yerine 'className' kullanılmasıdır.", 
    codeExample: `const Element = () => {
  return (
    <div className="konteynir">
      <h1>Merhaba JSX!</h1>
      <p>JavaScript ve HTML el ele.</p>
    </div>
  );
};` 
  },

  // 5. DERS: React Components
  { 
    id: 5, 
    title: "React Components", 
    description: "Bileşenler (Components), kullanıcı arayüzünü bağımsız ve yeniden kullanılabilir parçalara bölmemizi sağlar. Bir bileşen, bir JavaScript fonksiyonudur ve mutlaka büyük harfle başlamalıdır.", 
    codeExample: `function Selamlama() {
  return <h1>Merhaba, ben bir bileşenim!</h1>;
}

// Kullanımı:
// <Selamlama />` 
  },

  // 6. DERS: React Props
  { 
    id: 6, 
    title: "React Props", 
    description: "Props (Properties), bir bileşenden diğerine veri aktarmak için kullanılan araçlardır. Tıpkı bir fonksiyonun parametreleri gibi çalışırlar ama sadece 'okunabilir' (read-only) özelliktedirler.", 
    codeExample: `const Hosgeldin = (props) => {
  return <h1>Hoş geldin, {props.isim}!</h1>;
};

// Kullanımı:
// <Hosgeldin isim="Leyla" />` 
  },
  // 7. DERS: React Events
  { 
    id: 7, 
    title: "React Events", 
    description: "React'ta olay yönetimi (Event Handling), HTML'e çok benzer ancak bazı önemli farkları vardır. Olay isimleri camelCase (onClick, onChange gibi) yazılır ve fonksiyonlar doğrudan süslü parantez içinde çağrılır. Bu sayede kullanıcı etkileşimlerini (tıklama, form gönderme, klavye hareketleri) kolayca yakalayabiliriz.", 
    codeExample: `const EventExample = () => {
  const handleClick = (mesaj) => {
    alert("Butona tıklandı: " + mesaj);
  };

  return (
    <button 
      onClick={() => handleClick("Selam!")}
      className="px-4 py-2 bg-green-500 text-white rounded"
    >
      Bana Tıkla!
    </button>
  );
};` 
  },

  // 8. DERS: React Conditionals
  { 
    id: 8, 
    title: "React Conditionals", 
    description: "React'ta koşullu oluşturma (Conditional Rendering), uygulamanın o anki durumuna (state) göre farklı bileşenler veya HTML öğeleri göstermemizi sağlar. JavaScript'teki 'if-else' bloklarını, '&&' operatörünü veya en yaygın olan 'Ternary Operator' (koşul ? doğru : yanlış) yapısını JSX içinde sıklıkla kullanırız.", 
    codeExample: `const Dashboard = ({ isLoggedIn }) => {
  return (
    <div className="p-4">
      {isLoggedIn ? (
        <h1>Hoş Geldiniz, Profil Sayfasına Gidin.</h1>
      ) : (
        <h1>Lütfen önce giriş yapın.</h1>
      )}
      
      {/* Kısa devre operatörü kullanımı */}
      {isLoggedIn && <button>Çıkış Yap</button>}
    </div>
  );
};` 
  },

  // 9. DERS: React Lists & Keys
  { 
    id: 9, 
    title: "React Lists & Keys", 
    description: "React'ta dizilerdeki verileri ekrana basmak için JavaScript'in 'map()' metodunu kullanırız. Ancak her liste elemanının 'key' adında benzersiz (unique) bir prop'a sahip olması zorunludur. Bu anahtar, React'ın hangi öğelerin değiştiğini, eklendiğini veya silindiğini takip ederek performanslı bir şekilde güncellenmesini sağlar.", 
    codeExample: `const OgrenciListesi = () => {
  const ogrenciler = [
    { id: 101, ad: "Leyla" },
    { id: 102, ad: "Rümeysa" },
    { id: 103, ad: "Yağmur" }
  ];

  return (
    <ul>
      {ogrenciler.map((ogrenci) => (
        <li key={ogrenci.id} className="p-2 border-b">
          Öğrenci: {ogrenci.ad}
        </li>
      ))}
    </ul>
  );
};` 
  },

  // 10. DERS: React Hooks (useState & useEffect)
  { 
    id: 10, 
    title: "React Hooks (Dinamik Yapı)", 
    description: "Hooks, fonksiyonel bileşenlerin 'durum' (state) ve 'yaşam döngüsü' (lifecycle) özelliklerini kullanmasına olanak tanır. 'useState' ile verileri bileşende saklarız, 'useEffect' ile ise API istekleri veya sayfa yüklendiğinde çalışacak işlemleri yönetiriz. Modern React geliştirmenin temelini bu iki yapı oluşturur.", 
    codeExample: `import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Tıklama Sayısı: \${count}\`;
  }, [count]);

  return (
    <div className="text-center">
      <p className="text-2xl font-bold">Sayac: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="mt-4 px-6 py-2 bg-lime-600 text-white rounded-full"
      >
        Artır
      </button>
    </div>
  );
};` 
  }
];
