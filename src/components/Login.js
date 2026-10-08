import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'murid' && password === 'fluida2026') {
      localStorage.setItem('role', 'murid');
      navigate('/student-dashboard');
    } else if (username === 'iskandar2026' && password === 'lmsfluida') {
      localStorage.setItem('role', 'admin');
      navigate('/admin-dashboard'); // Bisa dibuat nanti untuk panel guru
    } else {
      setError('Username atau password salah!');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-blue-50 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-blue-200 shadow-2xl p-8 relative overflow-hidden">
        {/* Dekorasi lengkung biru di atas */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-300 to-blue-500 rounded-b-[50px] z-0"></div>
        
        <div className="relative z-10 text-center mt-4">
          <h1 className="text-3xl font-extrabold text-white drop-shadow-md">LMS Fisika</h1>
          <p className="text-blue-100 font-medium">SMAN 1 Batudaa Pantai</p>
        </div>
        
        <form onSubmit={handleLogin} className="relative z-10 mt-12 space-y-6">
          <div>
            <label className="block text-blue-900 font-semibold mb-2">Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="w-full px-4 py-3 rounded-xl border-2 border-blue-100 focus:border-blue-400 focus:ring-blue-400 outline-none transition-all" 
              placeholder="Masukkan username..."
            />
          </div>
          <div>
            <label className="block text-blue-900 font-semibold mb-2">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full px-4 py-3 rounded-xl border-2 border-blue-100 focus:border-blue-400 focus:ring-blue-400 outline-none transition-all" 
              placeholder="Masukkan password..."
            />
          </div>
          {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-300 transform transition-transform hover:scale-105">
            Masuk ke Kelas
          </button>
        </form>
      </div>
    </div>
  );
}