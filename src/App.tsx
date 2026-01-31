import React from 'react';
import Dashboard from './pages/Dashboard';
import HisSpec from './pages/HisSpec';

const App: React.FC = () => {
  const [view, setView] = React.useState<'dashboard' | 'spec'>('dashboard');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="fixed top-3 inset-x-0 z-50 flex justify-center px-3">
        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/40 bg-slate-950/80 px-3 py-1.5 text-[11px] text-slate-200 shadow-[0_0_25px_rgba(34,211,238,0.4)] backdrop-blur">
          <button
            onClick={() => setView('dashboard')}
            className={`px-3 py-1 rounded-full transition-colors ${
              view === 'dashboard'
                ? 'bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-semibold'
                : 'text-slate-200 hover:text-cyan-300'
            }`}
          >
            3D Hospital Command Center
          </button>
          <button
            onClick={() => setView('spec')}
            className={`px-3 py-1 rounded-full transition-colors ${
              view === 'spec'
                ? 'bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-semibold'
                : 'text-slate-200 hover:text-cyan-300'
            }`}
          >
            Laravel HIS Blueprint
          </button>
        </div>
      </div>
      <div className="pt-12">
        {view === 'dashboard' ? <Dashboard /> : <HisSpec />}
      </div>
    </div>
  );
};

export default App;
