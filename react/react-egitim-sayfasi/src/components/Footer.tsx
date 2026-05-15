import React from 'react';

const Footer = () => {
  return (
    // bg-green-950: Çok koyu yeşil arka plan
    <footer className="bg-green-950 text-gray-300 p-10 mt-auto border-t-4 border-lime-600">
      <div className="container mx-auto text-center">
        {/* İsmin ve başlığın daha parlak görünmesi için lime-400 rengini kullandık */}
        <p className="text-lg font-bold text-lime-400">
          © 2026 React TSX Eğitim Portalı - Leyla Aydın
        </p>
        <p className="text-sm mt-3 text-green-200 opacity-80 italic">
          Samsun Üniversitesi Yazılım Mühendisliği Bölümü
        </p>
        <div className="mt-4 flex justify-center gap-4 text-xs uppercase tracking-widest text-green-500">
          <span>React</span>
          <span>•</span>
          <span>TypeScript</span>
          <span>•</span>
          <span>Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;