import React, { useState } from 'react';

export default function StudentDashboard() {
  const [activeMenu, setActiveMenu] = useState('materi');

  const menuItems = [
    { id: 'daftar-hadir', label: 'Daftar Hadir', icon: '📝' },
    { id: 'materi', label: 'Materi Fluida', icon: '📚' },
    { id: 'game', label: 'Game Interaktif AR', icon: '🎮' },
    { id: 'jurnal', label: 'Jurnal Diri', icon: '📓' },
    { id: 'kosakata', label: 'Kosakata Baru', icon: '💡' }
  ];

  return (
    <div className="flex h-screen bg-blue-50 text-blue-900 font-sans">
      {/* Sidebar Menu Kiri */}
      <div className="w-72 bg-white shadow-xl shadow-blue-100 flex flex-col justify-between z-10">
        <div>
          <div className="p-8 bg-gradient-to-br from-blue-400 to-blue-600 text-white text-center rounded-br-[50px] shadow-md">
            <h2 className="text-3xl font-extrabold drop-shadow-sm">Halo, Murid!</h2>
            <p className="text-blue-100 text-sm mt-2 font-medium">Mari belajar Fluida hari ini</p>
          </div>
          <nav className="mt-8 px-4 space-y-3">
            {menuItems.map(menu => (
              <button 
                key={menu.id} 
                onClick={() => setActiveMenu(menu.id)}
                className={`w-full flex items-center px-6 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeMenu === menu.id 
                  ? 'bg-blue-100 text-blue-700 shadow-sm translate-x-2' 
                  : 'hover:bg-blue-50 text-blue-800 hover:translate-x-1'
                }`}>
                <span className="text-2xl mr-4">{menu.icon}</span>
                {menu.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Konten Utama Kanan */}
      <div className="flex-1 p-10 overflow-y-auto">
        {activeMenu === 'materi' && (
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl font-extrabold text-blue-800 drop-shadow-sm">Modul Pembelajaran Fluida</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Kartu Fluida Statis */}
              <div className="bg-white p-8 rounded-[30px] shadow-xl shadow-blue-100/50 border-t-8 border-blue-400 hover:-translate-y-1 transition-transform">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Fluida Statis</h3>
                <ul className="list-disc pl-5 space-y-3 text-blue-700 font-medium">
                  <li>Besaran Fisika (Massa Jenis, Berat Jenis, Tekanan Hidrostatik)</li>
                  <li>Hukum Pascal & Hukum Archimedes</li>
                  <li>Gejala Fluida: Tegangan Permukaan, Kapilaritas, Viskositas & Hukum Stokes</li>
                </ul>
              </div>
              {/* Kartu Fluida Dinamis */}
              <div className="bg-white p-8 rounded-[30px] shadow-xl shadow-blue-100/50 border-t-8 border-blue-500 hover:-translate-y-1 transition-transform">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Fluida Dinamis</h3>
                <ul className="list-disc pl-5 space-y-3 text-blue-700 font-medium">
                  <li>Persamaan Kontinuitas (Kekekalan Massa)</li>
                  <li>Asas Bernoulli (Kekekalan Energi)</li>
                  <li>Penerapan: Sayap Pesawat, Pipa Venturi, Tabung Pitot, Tangki Bocor</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Pemanggilan Game AR */}
        {activeMenu === 'game' && (
          <div className="h-full w-full rounded-[30px] overflow-hidden shadow-2xl shadow-blue-200 border-8 border-white bg-black relative">
            <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-xl z-10 font-bold text-blue-800 shadow-sm">
              Arahkan kamera ke Marker Hiro
            </div>
            <iframe src="/ar-game.html" title="AR Game Fluida" className="w-full h-full border-none" allow="camera; microphone" />
          </div>
        )}
        
        {/* Placeholder untuk menu lainnya */}
        {['daftar-hadir', 'jurnal', 'kosakata'].includes(activeMenu) && (
          <div className="flex items-center justify-center h-full text-blue-300 font-bold text-2xl">
            Area {activeMenu.replace('-', ' ')} sedang dalam pengembangan...
          </div>
        )}
      </div>
    </div>
  );
}