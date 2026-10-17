import { X, GitMerge, TrendingUp, Layers } from 'lucide-react';

interface RouteModalProps {
  isOpen: boolean;
  onClose: () => void;
  fromAmount: number;
  fromSymbol: string;
  toAmount: number;
  toSymbol: string;
}

export const RouteModal: React.FC<RouteModalProps> = ({
  isOpen,
  onClose,
  fromAmount,
  fromSymbol,
  toAmount,
  toSymbol,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-jup-card border border-jup-border rounded-2xl shadow-2xl p-6 text-slate-100 relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-jup-border">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-jup-cyan/10 text-jup-cyan">
              <GitMerge className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Smart Route Routing</h3>
              <p className="text-xs text-jup-muted">Optimized across 14 Solana AMMs</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-jup-hover text-jup-muted hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Savings Highlight */}
        <div className="my-4 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <div>
              <div className="text-xs font-semibold text-emerald-300">Net Routing Savings</div>
              <div className="text-[11px] text-emerald-400/80">+$1.84 better than Raydium direct</div>
            </div>
          </div>
          <div className="text-xs font-bold font-mono px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300">
            +0.12% Alpha
          </div>
        </div>

        {/* Multi-Hop Split Visualizer */}
        <div className="space-y-4">
          <label className="text-xs font-medium uppercase tracking-wider text-jup-muted flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" /> Liquidity Allocation
          </label>

          {/* Hop 1 */}
          <div className="p-3.5 rounded-xl bg-jup-hover/30 border border-jup-border space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-jup-lime"></span>
                <span>Raydium Concentrated Liquidity (CLMM)</span>
              </div>
              <span className="font-mono text-jup-lime font-bold">60%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-jup-lime h-full rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex justify-between text-[11px] text-jup-muted font-mono pt-1">
              <span>{(fromAmount * 0.6).toFixed(3)} {fromSymbol}</span>
              <span>{(toAmount * 0.6).toFixed(2)} {toSymbol}</span>
            </div>
          </div>

          {/* Hop 2 */}
          <div className="p-3.5 rounded-xl bg-jup-hover/30 border border-jup-border space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-jup-cyan"></span>
                <span>Meteora Dynamic Liquidity Market Maker</span>
              </div>
              <span className="font-mono text-jup-cyan font-bold">40%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-jup-cyan h-full rounded-full" style={{ width: '40%' }}></div>
            </div>
            <div className="flex justify-between text-[11px] text-jup-muted font-mono pt-1">
              <span>{(fromAmount * 0.4).toFixed(3)} {fromSymbol}</span>
              <span>{(toAmount * 0.4).toFixed(2)} {toSymbol}</span>
            </div>
          </div>
        </div>

        {/* Execution Metrics */}
        <div className="mt-5 pt-4 border-t border-jup-border grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-lg bg-jup-hover/20">
            <div className="text-[10px] text-jup-muted">Price Impact</div>
            <div className="font-mono font-bold text-emerald-400 mt-0.5">&lt; 0.01%</div>
          </div>
          <div className="p-2.5 rounded-lg bg-jup-hover/20">
            <div className="text-[10px] text-jup-muted">Network Fee</div>
            <div className="font-mono font-bold text-slate-200 mt-0.5">~0.00005 SOL</div>
          </div>
          <div className="p-2.5 rounded-lg bg-jup-hover/20">
            <div className="text-[10px] text-jup-muted">Settlement</div>
            <div className="font-mono font-bold text-slate-200 mt-0.5">~380ms</div>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="w-full mt-6 py-2.5 rounded-xl bg-jup-hover border border-jup-border hover:border-slate-500 font-medium text-sm transition"
        >
          Close Route Inspector
        </button>
      </div>
    </div>
  );
};
