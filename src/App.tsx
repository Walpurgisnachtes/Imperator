import { useState } from 'react'

import './App.css'

import { Header } from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    // bg-slate-950 是午夜風的主背景，搭配圓弧狀的漸層微光（radial-gradient）能讓整體質感再升級
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      
      {/* 背景裝飾：午夜藍霓虹微光 */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[150px] pointer-events-none" />

      <Header />
      
      <main className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* 你的頁面內容 */}
      </main>
    </div>
  );
}

export default App
