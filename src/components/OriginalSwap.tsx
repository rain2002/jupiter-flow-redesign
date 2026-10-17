import { useState } from 'react';
import { AlertTriangle, Info, ArrowDown, Eye, RefreshCw } from 'lucide-react';
import { TOKENS } from '../data/tokens';

export const OriginalSwap: React.FC = () => {
  const [activeCallout, setActiveCallout] = useState<number | null>(1);
  const [showCritique, setShowCritique] = useState<boolean>(true);

  const callouts = [
    {
      id: 1,
      title: 'Cognitive Overload & Cluttered Navigation',
      description: 'Multiple dense tabs (Swap, Limit, DCA, VA, Bridge, Perpetual) compete for visual attention with ambiguous sub-menus.',
      severity: 'High Friction',
      color: 'border-amber-500 bg-amber-500/10 text-amber-400'
    },
    {
      id: 2,
      title: 'Hidden MEV & Front-Running Danger',
      description: 'Slippage is buried in a separate settings gear. Novice users trade at 1-3% slippage without Jito bundle protection, losing dollars to sandwich bots.',
      severity: 'Loss of Funds Risk',
      color: 'border-red-500 bg-red-500/10 text-red-400'
    },
    {
      id: 3,
      title: 'Cryptic DEX Routing Breakdown',
      description: 'Routing shows fragmented pool hashes (Raydium CLMM + Orca Whirlpool + Meteora DLMM) without explaining net savings or slippage risk.',
      severity: 'Poor Transparency',
      color: 'border-blue-500 bg-blue-500/10 text-blue-400'
    },
    {
      id: 4,
      title: 'Sub-32px Tap Targets & Mobile Ergonomics',
      description: 'Tiny buttons for slippage, refresh, and fee priority result in frequent mis-clicks and fat-finger errors on mobile devices.',
      severity: 'Ergonomic Flaw',
      color: 'border-purple-500 bg-purple-500/10 text-purple-400'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row gap-6 items-start">
      {/* The Cluttered Legacy UI Mockup */}
      <div className="w-full lg:w-[420px] bg-[#131b24] border border-[#232f3e] rounded-2xl p-4 shadow-xl text-xs text-slate-300 relative select-none">
        {/* Critique Overlay Toggle Banner */}
        <div className="mb-3 p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-amber-400 font-medium">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Legacy UI (Issues Highlighted)</span>
          </div>
          <button
            onClick={() => setShowCritique(!showCritique)}
            className="text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition flex items-center gap-1"
          >
            <Eye className="w-3 h-3" />
            {showCritique ? 'Hide Callouts' : 'Show Callouts'}
          </button>
        </div>

        {/* Legacy Header Tabs - Overcrowded */}
        <div className="relative border-b border-[#232f3e] pb-2 mb-3">
          {showCritique && (
            <button
              onClick={() => setActiveCallout(1)}
              className="absolute -top-2 -right-2 z-20 w-6 h-6 rounded-full bg-amber-500 text-black font-bold text-xs flex items-center justify-center animate-pulse shadow-lg ring-2 ring-amber-400"
              title="Click to inspect flaw #1"
            >
              1
            </button>
          )}
          <div className="flex items-center justify-between overflow-x-auto gap-2 text-[11px] text-slate-400 scrollbar-none">
            <span className="font-bold text-white border-b-2 border-emerald-400 pb-1">Swap</span>
            <span>Limit Order</span>
            <span>DCA</span>
            <span>VA (Beta)</span>
            <span>Bridge</span>
            <span>Perps</span>
          </div>
        </div>

        {/* Dense settings line with micro icons */}
        <div className="relative flex items-center justify-between text-[11px] text-slate-400 mb-2 px-1">
          {showCritique && (
            <button
              onClick={() => setActiveCallout(2)}
              className="absolute -top-1 right-24 z-20 w-6 h-6 rounded-full bg-red-500 text-white font-bold text-xs flex items-center justify-center animate-pulse shadow-lg ring-2 ring-red-400"
              title="Click to inspect flaw #2"
            >
              2
            </button>
          )}
          <div className="flex items-center gap-1">
            <span>Slippage:</span>
            <span className="bg-[#1c2735] px-1.5 py-0.5 rounded text-white font-mono">0.5% (Fixed)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-amber-400">MEV: Standard (No bundle)</span>
            <RefreshCw className="w-3 h-3 text-slate-500 cursor-pointer" />
          </div>
        </div>

        {/* Selling Box */}
        <div className="bg-[#1b2533] border border-[#2c3b4f] rounded-xl p-3 mb-1.5 relative">
          <div className="flex justify-between text-slate-400 text-[11px] mb-1">
            <span>You're Paying</span>
            <span>Balance: 24.5 SOL</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 bg-[#233144] px-2.5 py-1.5 rounded-lg border border-[#35485e]">
              <span className="font-bold text-white text-sm">{TOKENS[0].symbol}</span>
            </div>
            <input
              type="text"
              readOnly
              value="2.5"
              className="bg-transparent text-right font-mono text-xl font-bold text-white outline-none w-32"
            />
          </div>
          <div className="text-right text-[10px] text-slate-400 mt-1">≈ $387.50</div>
        </div>

        {/* Flip Divider with Micro-Target */}
        <div className="relative flex justify-center -my-2.5 z-10">
          {showCritique && (
            <button
              onClick={() => setActiveCallout(4)}
              className="absolute -right-2 top-0 z-20 w-6 h-6 rounded-full bg-purple-500 text-white font-bold text-xs flex items-center justify-center animate-pulse shadow-lg ring-2 ring-purple-400"
              title="Click to inspect flaw #4"
            >
              4
            </button>
          )}
          <div className="p-1.5 bg-[#233144] border border-[#35485e] rounded-full text-slate-300 shadow">
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Receiving Box */}
        <div className="bg-[#1b2533] border border-[#2c3b4f] rounded-xl p-3 mb-3">
          <div className="flex justify-between text-slate-400 text-[11px] mb-1">
            <span>You're Receiving</span>
            <span>Balance: 1,240.00 USDC</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 bg-[#233144] px-2.5 py-1.5 rounded-lg border border-[#35485e]">
              <span className="font-bold text-white text-sm">{TOKENS[1].symbol}</span>
            </div>
            <input
              type="text"
              readOnly
              value="387.12"
              className="bg-transparent text-right font-mono text-xl font-bold text-emerald-400 outline-none w-32"
            />
          </div>
          <div className="text-right text-[10px] text-slate-400 mt-1">≈ $387.12</div>
        </div>

        {/* Cryptic Route Box */}
        <div className="relative bg-[#151e2a] border border-[#243346] rounded-xl p-2.5 mb-3 text-[11px]">
          {showCritique && (
            <button
              onClick={() => setActiveCallout(3)}
              className="absolute -top-2 -left-2 z-20 w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-xs flex items-center justify-center animate-pulse shadow-lg ring-2 ring-blue-400"
              title="Click to inspect flaw #3"
            >
              3
            </button>
          )}
          <div className="flex items-center justify-between text-slate-400 mb-1.5">
            <span className="font-medium text-slate-300">Route Breakdown (3 hops)</span>
            <span className="text-[10px] text-slate-500">Auto Route</span>
          </div>
          <div className="bg-[#0f1721] p-2 rounded border border-[#1e2a39] font-mono text-[10px] space-y-1 text-slate-400">
            <div>• Raydium_CLMM (Pool: 8sT...3xQ) - 45%</div>
            <div>• Orca_Whirlpool (v2 fee: 0.04%) - 35%</div>
            <div>• Meteora_DLMM (Bin 143) - 20%</div>
          </div>
          <div className="flex justify-between text-[10px] text-slate-500 mt-1.5 pt-1 border-t border-[#1e2a39]">
            <span>Est. Price Impact: ~0.14%</span>
            <span>Tx Fee: 0.000005 SOL</span>
          </div>
        </div>

        {/* Cluttered Action Button */}
        <button className="w-full py-3 bg-[#00be64] hover:bg-[#00ad5a] text-black font-bold rounded-xl text-sm transition">
          Swap SOL to USDC
        </button>
      </div>

      {/* UX Teardown & Flaws Analysis Column */}
      <div className="flex-1 w-full space-y-4">
        <div className="bg-jup-card border border-jup-border rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
              Original UX Pain Points & Friction Map
            </h3>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 font-mono">
              4 Critical Issues Identified
            </span>
          </div>
          <p className="text-xs text-jup-muted leading-relaxed">
            While Jupiter is Solana's undisputed liquidity king, rapid feature expansion has created cognitive friction, hidden MEV exposure for retail users, and poor mobile interaction ergonomics. Click any issue below to inspect:
          </p>
        </div>

        {/* Callout Cards */}
        <div className="grid grid-cols-1 gap-3">
          {callouts.map((c) => {
            const isSelected = activeCallout === c.id;
            return (
              <div
                key={c.id}
                onClick={() => setActiveCallout(c.id)}
                className={`cursor-pointer border rounded-xl p-4 transition-all duration-200 ${
                  isSelected
                    ? `${c.color} ring-1 ring-white/20 shadow-lg scale-[1.01]`
                    : 'bg-jup-card/60 border-jup-border hover:border-slate-600 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-600 text-[11px] font-bold flex items-center justify-center text-white">
                      {c.id}
                    </span>
                    <h4 className="font-semibold text-sm text-white">{c.title}</h4>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-black/40 uppercase tracking-wider">
                    {c.severity}
                  </span>
                </div>
                <p className="text-xs text-slate-300 pl-7 leading-relaxed">
                  {c.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Summary Metric of Flaws */}
        <div className="bg-jup-card/40 border border-jup-border/60 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-jup-muted">
          <div className="flex items-center gap-2 text-slate-300">
            <Info className="w-4 h-4 text-jup-lime shrink-0" />
            <span>Switch to the <strong>"Jupiter Flow"</strong> tab above to experience how our redesign solves all 4 issues.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
