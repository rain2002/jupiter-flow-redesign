import { Sparkles, Smartphone, Monitor, Zap } from 'lucide-react';

export type ViewMode = 'redesign' | 'original' | 'casestudy';

interface HeaderProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  isMobileFrame: boolean;
  setIsMobileFrame: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  setViewMode,
  isMobileFrame,
  setIsMobileFrame,
}) => {
  return (
    <header className="w-full border-b border-jup-border/80 bg-jup-dark/80 backdrop-blur-xl sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-jup-lime via-emerald-400 to-jup-cyan flex items-center justify-center shadow-lg shadow-jup-lime/20">
            <Zap className="w-5 h-5 text-black fill-black" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-white text-base tracking-tight">JUPITER</span>
              <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-jup-lime/10 text-jup-lime border border-jup-lime/30 tracking-wider">
                FLOW
              </span>
            </div>
            <p className="text-[10px] text-jup-muted -mt-0.5 hidden sm:block">Solana DEX Redesign</p>
          </div>
        </div>

        {/* View Mode Switcher Pills */}
        <nav className="flex items-center gap-1 p-1 bg-jup-card/90 rounded-xl border border-jup-border/80 text-xs font-medium">
          <button
            onClick={() => setViewMode('redesign')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              viewMode === 'redesign'
                ? 'bg-jup-lime text-black font-semibold shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-jup-hover'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Jupiter Flow</span>
            <span className="sm:hidden">Redesign</span>
          </button>

          <button
            onClick={() => setViewMode('original')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              viewMode === 'original'
                ? 'bg-amber-500 text-black font-semibold shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-jup-hover'
            }`}
          >
            <span>⚠️</span>
            <span className="hidden sm:inline">Legacy Flaws</span>
            <span className="sm:hidden">Original</span>
          </button>

          <button
            onClick={() => setViewMode('casestudy')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              viewMode === 'casestudy'
                ? 'bg-jup-cyan text-black font-semibold shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-jup-hover'
            }`}
          >
            <span>📑</span>
            <span>Case Study</span>
          </button>
        </nav>

        {/* Right Action Controls: Frame toggle + Wallet */}
        <div className="flex items-center gap-2">
          {/* Mobile vs Desktop Frame Toggle (only when in redesign or original) */}
          {viewMode !== 'casestudy' && (
            <button
              onClick={() => setIsMobileFrame(!isMobileFrame)}
              className={`p-2 rounded-xl border transition flex items-center gap-1 text-xs ${
                isMobileFrame
                  ? 'bg-jup-lime/10 border-jup-lime/40 text-jup-lime'
                  : 'bg-jup-card border-jup-border text-slate-300 hover:text-white hover:bg-jup-hover'
              }`}
              title={isMobileFrame ? 'Switch to Desktop Layout' : 'Preview in Mobile Device Frame'}
            >
              {isMobileFrame ? (
                <>
                  <Monitor className="w-4 h-4" />
                  <span className="hidden md:inline">Desktop</span>
                </>
              ) : (
                <>
                  <Smartphone className="w-4 h-4" />
                  <span className="hidden md:inline">Mobile Frame</span>
                </>
              )}
            </button>
          )}

          {/* Dummy Connected Wallet Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-jup-card border border-jup-border text-xs text-slate-200">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-slate-300">7xK9...3QpL</span>
            <span className="text-[11px] text-jup-lime font-mono font-medium pl-1 border-l border-jup-border">
              24.5 SOL
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
