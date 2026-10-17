import { X, ShieldCheck, Zap, Rocket, Activity } from 'lucide-react';

export interface ExecutionSettings {
  profile: 'balanced' | 'fast' | 'turbo';
  slippage: number;
  priorityFee: string;
  mevProtection: boolean;
}

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: ExecutionSettings;
  onUpdate: (settings: ExecutionSettings) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdate,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-jup-card border border-jup-border rounded-2xl shadow-2xl p-6 text-slate-100 relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-jup-border">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-jup-lime/10 text-jup-lime">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Execution Engine</h3>
              <p className="text-xs text-jup-muted">Unified Slippage, MEV & Priority Fees</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-jup-hover text-jup-muted hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Network Health Banner */}
        <div className="my-4 p-3 rounded-xl bg-jup-hover/50 border border-jup-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300">Solana Network</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-jup-muted font-mono">
            <span>2,920 TPS</span>
            <span>•</span>
            <span className="text-emerald-400">Low Congestion</span>
          </div>
        </div>

        {/* Preset Profiles */}
        <div className="space-y-3">
          <label className="text-xs font-medium uppercase tracking-wider text-jup-muted">
            Execution Strategy
          </label>
          <div className="grid grid-cols-3 gap-2">
            {/* Balanced */}
            <button
              onClick={() =>
                onUpdate({
                  profile: 'balanced',
                  slippage: 0.3,
                  priorityFee: 'Auto (0.00005 SOL)',
                  mevProtection: true,
                })
              }
              className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                settings.profile === 'balanced'
                  ? 'border-jup-lime bg-jup-lime/10 text-white'
                  : 'border-jup-border bg-jup-hover/30 hover:border-slate-500 text-jup-muted'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <ShieldCheck className="w-4 h-4 text-jup-lime" />
                <span className="text-[10px] uppercase font-bold text-jup-lime">0.3%</span>
              </div>
              <div className="mt-2">
                <div className="text-xs font-semibold text-white">Balanced</div>
                <div className="text-[10px] text-jup-muted mt-0.5">Auto Fee • Jito Safe</div>
              </div>
            </button>

            {/* Fast */}
            <button
              onClick={() =>
                onUpdate({
                  profile: 'fast',
                  slippage: 0.5,
                  priorityFee: '0.0005 SOL',
                  mevProtection: true,
                })
              }
              className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                settings.profile === 'fast'
                  ? 'border-jup-cyan bg-jup-cyan/10 text-white'
                  : 'border-jup-border bg-jup-hover/30 hover:border-slate-500 text-jup-muted'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <Zap className="w-4 h-4 text-jup-cyan" />
                <span className="text-[10px] uppercase font-bold text-jup-cyan">0.5%</span>
              </div>
              <div className="mt-2">
                <div className="text-xs font-semibold text-white">Fast</div>
                <div className="text-[10px] text-jup-muted mt-0.5">Priority Block</div>
              </div>
            </button>

            {/* Turbo */}
            <button
              onClick={() =>
                onUpdate({
                  profile: 'turbo',
                  slippage: 1.0,
                  priorityFee: '0.002 SOL',
                  mevProtection: true,
                })
              }
              className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                settings.profile === 'turbo'
                  ? 'border-jup-orange bg-jup-orange/10 text-white'
                  : 'border-jup-border bg-jup-hover/30 hover:border-slate-500 text-jup-muted'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <Rocket className="w-4 h-4 text-jup-orange" />
                <span className="text-[10px] uppercase font-bold text-jup-orange">1.0%</span>
              </div>
              <div className="mt-2">
                <div className="text-xs font-semibold text-white">Turbo Sniper</div>
                <div className="text-[10px] text-jup-muted mt-0.5">Top of Block</div>
              </div>
            </button>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="mt-5 pt-4 border-t border-jup-border space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-jup-muted flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" /> Max Slippage Tolerance
            </span>
            <span className="font-mono font-medium text-white">{settings.slippage}%</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-jup-muted flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" /> Compute Budget Fee
            </span>
            <span className="font-mono font-medium text-white">{settings.priorityFee}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-jup-muted flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> Jito MEV Bundle Protection
            </span>
            <button
              onClick={() =>
                onUpdate({ ...settings, mevProtection: !settings.mevProtection })
              }
              className={`px-2 py-0.5 rounded text-[10px] font-semibold transition ${
                settings.mevProtection
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-slate-700/50 text-slate-400 border border-slate-600'
              }`}
            >
              {settings.mevProtection ? 'ACTIVE' : 'DISABLED'}
            </button>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full mt-6 py-2.5 rounded-xl bg-jup-lime text-black font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-jup-lime/20"
        >
          Save & Apply Strategy
        </button>
      </div>
    </div>
  );
};
