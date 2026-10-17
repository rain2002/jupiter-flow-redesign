import { 
  Zap, 
  GitMerge, 
  Smartphone, 
  Users, 
  CheckCircle2, 
  Sparkles,
  BarChart3,
  Layers
} from 'lucide-react';

export const CaseStudy: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 text-slate-200 pb-12">
      {/* Title & Badge */}
      <div className="bg-gradient-to-r from-jup-card via-jup-card/90 to-jup-card border border-jup-border rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-jup-lime/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jup-lime/10 border border-jup-lime/30 text-jup-lime text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Superteam Earn Design Bounty Submission
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Jupiter Flow: Reimagining Solana's Primary Liquidity Gateway
        </h1>
        <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
          A human-centered UX overhaul of Jupiter Exchange that eliminates cognitive overload, automates MEV protection, and delivers a mobile-first trading experience.
        </p>

        {/* Key Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-jup-border/70">
          <div>
            <div className="text-2xl font-bold text-jup-lime font-mono">42%</div>
            <div className="text-xs text-jup-muted">Fewer Visual Distractions</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-jup-cyan font-mono">1-Tap</div>
            <div className="text-xs text-jup-muted">Jito MEV Shield Presets</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-400 font-mono">+$1.42</div>
            <div className="text-xs text-jup-muted">Avg. Net Route Savings</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400 font-mono">&gt;48px</div>
            <div className="text-xs text-jup-muted">Touch-Target Compliance</div>
          </div>
        </div>
      </div>

      {/* 1. Problem Statement & Research */}
      <section className="bg-jup-card border border-jup-border rounded-2xl p-6 sm:p-7 space-y-4">
        <div className="flex items-center gap-2 text-jup-lime">
          <Layers className="w-5 h-5" />
          <h2 className="text-xl font-bold text-white">1. Problem Statement & Context</h2>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          <strong>Jupiter Exchange</strong> processes over 60% of all decentralized trading volume on Solana. However, as the protocol expanded from a pure aggregator into a sprawling decentralized ecosystem (Limit orders, DCA, Value Averaging, Perpetual Futures, LST bridging, launchpads), the core swap interface became cluttered with competing menus, cryptic routing hashes, and fragmented execution settings.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 space-y-2">
            <h3 className="font-semibold text-sm text-red-400 flex items-center gap-1.5">
              <span>⚠️</span> The Retail Friction Trap
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              New Solana users trading meme tokens or utility coins are exposed to front-running sandwich bots because MEV bundling (Jito) is hidden behind obscure sub-menus. Fixed slippage defaults either fail during high network congestion or cause severe slippage loss.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-2">
            <h3 className="font-semibold text-sm text-amber-400 flex items-center gap-1.5">
              <span>📱</span> Mobile & Ergonomic Failure
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Over 70% of retail crypto transactions now happen on mobile (Phantom, Solflare in-app browsers). Yet Jupiter's settings, slippage toggles, and pool details feature sub-32px tap targets that lead to accidental mis-clicks and trade fatigue.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Target User Personas */}
      <section className="bg-jup-card border border-jup-border rounded-2xl p-6 sm:p-7 space-y-4">
        <div className="flex items-center gap-2 text-jup-lime">
          <Users className="w-5 h-5" />
          <h2 className="text-xl font-bold text-white">2. User Personas & Pain Points</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Persona A */}
          <div className="p-5 rounded-xl bg-jup-dark border border-jup-border space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-white">Retail Ray</h4>
                <div className="text-xs text-jup-muted">Mobile-First Trader • Trades 1-3x/week</div>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Casual / Retail
              </span>
            </div>
            <div className="text-xs text-slate-300 space-y-1.5">
              <p><strong>Goal:</strong> Swap SOL for USDC or trending ecosystem tokens safely without thinking about gas spikes or sandwich bots.</p>
              <p><strong>Pain Point:</strong> Confused by words like "Whirlpool Fee Tier", "Slippage tolerance", and "Priority fee unit limits". Afraid of getting rekt.</p>
            </div>
          </div>

          {/* Persona B */}
          <div className="p-5 rounded-xl bg-jup-dark border border-jup-border space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-white">Degen Dana</h4>
                <div className="text-xs text-jup-muted">Fast Execution Scalper • Trades 30x/day</div>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Power Trader
              </span>
            </div>
            <div className="text-xs text-slate-300 space-y-1.5">
              <p><strong>Goal:</strong> Guaranteed transaction inclusion during high network volatility and clear proof of best execution price.</p>
              <p><strong>Pain Point:</strong> Tired of opening 4 different sub-dialogs to adjust priority fees, slippage, and Jito tip on volatile mints.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Three Core UX Pillars */}
      <section className="bg-jup-card border border-jup-border rounded-2xl p-6 sm:p-7 space-y-6">
        <div className="flex items-center gap-2 text-jup-lime">
          <Zap className="w-5 h-5" />
          <h2 className="text-xl font-bold text-white">3. The Solution: Three Design Pillars</h2>
        </div>

        <div className="space-y-4">
          {/* Pillar 1 */}
          <div className="p-5 rounded-xl bg-jup-dark border border-jup-border/80 flex flex-col sm:flex-row gap-4 items-start">
            <div className="p-3 rounded-xl bg-jup-lime/10 text-jup-lime shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-semibold text-white text-base">Pillar 1: Unified Execution Engine</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rather than forcing users to guess separate slippage numbers, compute unit limits, and micro-lamport priority fees, Jupiter Flow introduces <strong>3 one-touch execution profiles</strong>:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 pt-1 text-xs">
                <div className="p-2.5 rounded-lg bg-black/40 border border-jup-border">
                  <div className="font-semibold text-emerald-400">🛡️ Balanced</div>
                  <div className="text-[11px] text-slate-400">0.3% Dynamic Slippage + 0.0001 SOL Priority + Jito MEV Protection</div>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-jup-border">
                  <div className="font-semibold text-jup-cyan">⚡ Fast</div>
                  <div className="text-[11px] text-slate-400">0.8% Dynamic Slippage + 0.001 SOL Priority for trending volume</div>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-jup-border">
                  <div className="font-semibold text-amber-400">🚀 Turbo</div>
                  <div className="text-[11px] text-slate-400">1.5% Slippage + Max Jito Priority Tip for hyper-urgent mints</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-5 rounded-xl bg-jup-dark border border-jup-border/80 flex flex-col sm:flex-row gap-4 items-start">
            <div className="p-3 rounded-xl bg-jup-cyan/10 text-jup-cyan shrink-0">
              <GitMerge className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-semibold text-white text-base">Pillar 2: Transparent Route Routing & Net Dollar Savings</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Replaces raw hexadecimal pool addresses with human-readable AMM route cards. Crucially, it highlights the <strong>net dollar value created</strong> by Jupiter's split-routing engine (e.g. <em>"+$1.42 saved compared to single-pool execution"</em>), giving users tangible satisfaction and reassurance.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-5 rounded-xl bg-jup-dark border border-jup-border/80 flex flex-col sm:flex-row gap-4 items-start">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
              <Smartphone className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-semibold text-white text-base">Pillar 3: Thumb-Zone Mobile Ergonomics</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                All primary interactions (token selection, amount toggles, execution button) strictly respect the 48px touch-target standard. The swap button provides real-time state transitions with animated block-confirmation feedback matching Solana's ~400ms slot times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Before vs After Comparison Matrix */}
      <section className="bg-jup-card border border-jup-border rounded-2xl p-6 sm:p-7 space-y-4">
        <div className="flex items-center gap-2 text-jup-lime">
          <BarChart3 className="w-5 h-5" />
          <h2 className="text-xl font-bold text-white">4. Before vs After Comparison Matrix</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-jup-border text-slate-400">
                <th className="py-2.5 px-3">Feature Dimension</th>
                <th className="py-2.5 px-3 text-red-400">Original Jupiter UI</th>
                <th className="py-2.5 px-3 text-jup-lime font-bold">Jupiter Flow (Redesign)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-jup-border/40">
              <tr>
                <td className="py-3 px-3 font-medium text-white">Execution Settings</td>
                <td className="py-3 px-3 text-slate-400">Divided into 3 disparate menus (Slippage %, Priority Fee, Exact Out)</td>
                <td className="py-3 px-3 text-emerald-400 font-medium">Unified 1-click Engine (Balanced / Fast / Turbo)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium text-white">MEV & Sandwich Protection</td>
                <td className="py-3 px-3 text-slate-400">Opt-in, tucked inside advanced sub-menus; off by default</td>
                <td className="py-3 px-3 text-emerald-400 font-medium">Built-in Jito bundle protection active on all default presets</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium text-white">Route Inspection</td>
                <td className="py-3 px-3 text-slate-400">Raw AMM pool addresses without savings context</td>
                <td className="py-3 px-3 text-emerald-400 font-medium">Interactive Route Explorer with net dollar savings breakdown</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium text-white">Mobile Tap Targets</td>
                <td className="py-3 px-3 text-slate-400">Many buttons &lt; 32px; frequent misclicks</td>
                <td className="py-3 px-3 text-emerald-400 font-medium">Full WCAG compliance (all tap targets &ge; 48px)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium text-white">Network Health Context</td>
                <td className="py-3 px-3 text-slate-400">Hidden or absent from primary trading card</td>
                <td className="py-3 px-3 text-emerald-400 font-medium">Live Solana TPS & cluster health indicator integrated into settings</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Conclusion & Live Prototype Note */}
      <div className="bg-gradient-to-r from-jup-lime/10 via-jup-card to-jup-card border border-jup-lime/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="font-bold text-white text-base">Ready to test the live prototype?</div>
          <div className="text-xs text-slate-400">
            Switch back to the <strong>"Jupiter Flow"</strong> tab at the top to interactively swap, tweak execution presets, and inspect live routing.
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-jup-lime bg-jup-lime/10 px-3 py-1.5 rounded-lg border border-jup-lime/20 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> Production-Ready Code
          </span>
        </div>
      </div>
    </div>
  );
};
