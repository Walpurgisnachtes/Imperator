import './App.css'

import { Header } from './components/Header'
import { GameContentContainer } from './components/GameContentContainer';


function App() {
  return (
    <div className="h-screen flex flex-col bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[150px] pointer-events-none" />

      <Header />

      <main className="relative flex-1 z-10 my-[5vh] mx-auto">
        <GameContentContainer />
      </main>
    </div>
  );
}

export default App;
