import type { HeaderProps } from '../types';

const Header = ({ title }: HeaderProps) => {
  return (
    // Arka planı koyu yeşil (bg-green-900) yaptık ve alt tarafa hafif bir yeşil çizgi ekledik
    <header className="bg-green-900 text-white p-6 shadow-md border-b-4 border-lime-500">
      <div className="container mx-auto flex items-center justify-center md:justify-start">
        <h1 className="text-3xl font-black italic tracking-widest text-lime-400 drop-shadow-md">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;