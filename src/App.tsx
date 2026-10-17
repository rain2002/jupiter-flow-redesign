import { useState } from 'react';
import { Header } from './components/Header';
import type { ViewMode } from './components/Header';
import { RedesignedSwap } from './components/RedesignedSwap';
import { OriginalSwap } from './components/OriginalSwap';
import { CaseStudy } from './components/CaseStudy';
import { SettingsModal } from './components/SettingsModal';
import type { ExecutionSettings } from './components/SettingsModal';
import { RouteModal } from './components/RouteModal';
import { Sparkles, ExternalLink } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('redesign');
  const [isMobileFrame, setIsMobileFrame] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isRouteOpen, setIsRouteOpen] = useState<boolean>(false);

  const [settings, setSettings] = useState<ExecutionSettings>({
    profile: 'balanced',
    slippage: 0.3,
    priorityFee: '0.0001',
    mevProtection: true,
  });

  return (
    <div className="min-h-screen bg-jup-dark text-slate-100 flex flex-col relative overflow-x-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed top-[-10%] left-[20%] w-[500px] h-[500px] bg-jup-lime/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[15%] w-[600px] h-[600px] bg-jup-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Top Navigation */}
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        isMobileFrame={isMobileFrame}
        setIsMobileFrame={setIsMobileFrame}
      />

      {/* Sub-header Banner */}
      <div className="w-full bg-gradient-to-r from-emerald-500/10 via-jup-lime/10 to-cyan-500/10 border-b border-jup-border/60 py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-jup-lime font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Superteam Earn 1,500 USDC Bounty
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="text-slate-300">
            Target: <strong>Jupiter Exchange (Solana)</strong>
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <a
            href="https://superteam.fun/earn/listing/redesign-your-favourite-app-on-solana"
            target="_blank"
            rel="noreferrer"
            className="text-jup-cyan hover:underline flex items-center gap-1 font-medium"
          >
            Listing Details <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 flex flex-col justify-center">
        {viewMode === 'casestudy' ? (
          <CaseStudy />
        ) : isMobileFrame ? (
          /* Mobile Frame Mockup Container */
          <div className="flex flex-col items-center justify-center py-4 animate-fade-in">
            <div className="text-xs text-jup-muted mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-jup-lime"></span>
              <span>Interactive Mobile Viewport Preview (390 x 844 px)</span>
            </div>
            
            <div className="w-[390px] h-[810px] bg-black border-4 border-[#2d3748] rounded-[48px] p-4 shadow-2xl relative overflow-y-auto scrollbar-none flex flex-col justify-between ring-1 ring-white/10">
              {/* iPhone Notch Speaker Bar */}
              <div className="w-32 h-4 bg-[#1a202c] rounded-full mx-auto mb-4 shrink-0" />

              {/* Mobile Content */}
              <div className="flex-1 flex flex-col justify-center">
                {viewMode === 'redesign' ? (
                  <RedesignedSwap
                    onOpenSettings={() => setIsSettingsOpen(true)}
                    onOpenRoute={() => setIsRouteOpen(true)}
                    settings={settings}
                  />
                ) : (
                  <div className="scale-90 origin-top">
                    <OriginalSwap />
                  </div>
                )}
              </div>

              {/* iPhone Home Indicator */}
              <div className="w-28 h-1 bg-slate-600 rounded-full mx-auto mt-4 shrink-0" />
            </div>
          </div>
        ) : (
          /* Standard Desktop Layout */
          <div className="w-full flex justify-center items-center py-4 animate-fade-in">
            {viewMode === 'redesign' ? (
              <RedesignedSwap
                onOpenSettings={() => setIsSettingsOpen(true)}
                onOpenRoute={() => setIsRouteOpen(true)}
                settings={settings}
              />
            ) : (
              <OriginalSwap />
            )}
          </div>
        )}
      </main>

      {/* Modals */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onUpdate={setSettings}
      />

      <RouteModal
        isOpen={isRouteOpen}
        onClose={() => setIsRouteOpen(false)}
        fromAmount={2.5}
        fromSymbol="SOL"
        toAmount={387.12}
        toSymbol="USDC"
      />

      {/* Footer */}
      <footer className="border-t border-jup-border/80 bg-jup-dark/90 py-6 text-xs text-jup-muted mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-200">Jupiter Flow</span>
            <span>•</span>
            <span>Built for Superteam Earn Solana Ecosystem</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => setViewMode('casestudy')}
              className="hover:text-jup-lime transition"
            >
              Read UX Teardown
            </button>
            <span>•</span>
            <button
              onClick={() => setViewMode('redesign')}
              className="hover:text-jup-lime transition"
            >
              Test Prototype
            </button>
            <span>•</span>
            <span className="text-slate-500">React 19 + Vite + Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
