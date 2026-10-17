import { useState } from 'react';
import { ArrowDownUp, Settings, GitMerge, ShieldCheck, CheckCircle2, Loader2, Sparkles, ChevronDown } from 'lucide-react';
import { TOKENS } from '../data/tokens';
import type { Token } from '../data/tokens';
import type { ExecutionSettings } from './SettingsModal';

interface RedesignedSwapProps {
  onOpenSettings: () => void;
  onOpenRoute: () => void;
  settings: ExecutionSettings;
}

export const RedesignedSwap: React.FC<RedesignedSwapProps> = ({
  onOpenSettings,
  onOpenRoute,
  settings,
}) => {
  const [fromToken, setFromToken] = useState<Token>(TOKENS[0]); // SOL
  const [toToken, setToToken] = useState<Token>(TOKENS[1]); // USDC
  const [fromAmount, setFromAmount] = useState<string>('2.5');
  const [isSwapping, setIsSwapping] = useState<boolean>(false);
  const [swapSuccess, setSwapSuccess] = useState<boolean>(false);

  // Computed values
  const parsedFrom = parseFloat(fromAmount) || 0;
  const toAmount = ((parsedFrom * fromToken.price) / toToken.price).toFixed(
    toToken.decimals === 6 ? 2 : 4
  );
  const fromUsd = (parsedFrom * fromToken.price).toFixed(2);
  const toUsd = (parseFloat(toAmount) * toToken.price).toFixed(2);

  const handleFlip = () => {
    setFromToken(toToken);
    setToToken(fromToken);
  };

  const handleExecuteSwap = () => {
    if (parsedFrom <= 0) return;
    setIsSwapping(true);
    setSwapSuccess(false);

    // Simulate Solana 400ms block confirmation
    setTimeout(() => {
      setIsSwapping(false);
      setSwapSuccess(true);
      setTimeout(() => setSwapSuccess(false), 4500);
    }, 900);
  };

  return (
    <div className="w-full max-w-[440px] mx-auto">
      {/* Swap Container Card */}
      <div className="bg-jup-card/90 border border-jup-border/80 rounded-3xl p-5 shadow-2xl backdrop-blur-xl relative">
        {/* Top Bar: Tabs & Quick Engine Settings */}
        <div className="flex items-center justify-between pb-3 mb-2">
          {/* Streamlined Mode Segment */}
          <div className="flex items-center gap-1 p-1 bg-jup-dark/80 rounded-xl border border-jup-border/60">
            <button className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-jup-lime text-black transition shadow-sm">
              Instant
            </button>
            <button className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-jup-muted hover:text-white transition">
              DCA
            </button>
            <button className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-jup-muted hover:text-white transition">
              Limit
            </button>
          </div>

          {/* Quick Engine Trigger */}
          <button
            onClick={onOpenSettings}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-jup-border/70 bg-jup-hover/40 hover:border-slate-500 text-xs text-slate-300 transition"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-[11px] font-medium">{settings.slippage}% Slip</span>
            <Settings className="w-3.5 h-3.5 text-jup-muted" />
          </button>
        </div>

        {/* You Pay Section */}
        <div className="p-4 rounded-2xl bg-jup-dark/70 border border-jup-border/70 focus-within:border-jup-lime/50 transition">
          <div className="flex items-center justify-between text-xs text-jup-muted mb-1.5">
            <span className="font-medium text-slate-400">You Pay</span>
            <div className="flex items-center gap-1.5">
              <span>Balance: {fromToken.balance}</span>
              <button
                onClick={() => setFromAmount(fromToken.balance.toString())}
                className="text-jup-lime text-[11px] font-semibold hover:underline"
              >
                MAX
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-transparent text-2xl font-bold font-mono text-white placeholder-slate-600 focus:outline-none"
            />

            {/* Token Selector Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-jup-hover border border-jup-border text-white font-semibold cursor-pointer hover:border-slate-500 transition select-none">
              <span className="text-xl">{fromToken.icon}</span>
              <span className="text-sm font-bold">{fromToken.symbol}</span>
              <ChevronDown className="w-4 h-4 text-jup-muted" />
            </div>
          </div>

          <div className="flex items-center justify-between mt-2 pt-2 border-t border-jup-border/40 text-[11px] text-jup-muted">
            <span>≈ ${fromUsd} USD</span>
            {fromToken.verified && (
              <span className="flex items-center gap-1 text-emerald-400/90 text-[10px]">
                <ShieldCheck className="w-3 h-3" /> Shield Verified
              </span>
            )}
          </div>
        </div>

        {/* Centered Flip Action Button */}
        <div className="relative h-4 flex items-center justify-center my-1 z-10">
          <button
            onClick={handleFlip}
            className="p-2.5 rounded-xl bg-jup-card border-2 border-jup-border hover:border-jup-lime text-slate-300 hover:text-jup-lime transition shadow-md group"
            title="Swap Pay and Receive tokens"
          >
            <ArrowDownUp className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
          </button>
        </div>

        {/* You Receive Section */}
        <div className="p-4 rounded-2xl bg-jup-dark/70 border border-jup-border/70 focus-within:border-jup-cyan/50 transition">
          <div className="flex items-center justify-between text-xs text-jup-muted mb-1.5">
            <span className="font-medium text-slate-400">You Receive (Estimated)</span>
            <span>Balance: {toToken.balance}</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="w-full text-2xl font-bold font-mono text-white select-all">
              {toAmount}
            </div>

            {/* Token Selector Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-jup-hover border border-jup-border text-white font-semibold cursor-pointer hover:border-slate-500 transition select-none">
              <span className="text-xl">{toToken.icon}</span>
              <span className="text-sm font-bold">{toToken.symbol}</span>
              <ChevronDown className="w-4 h-4 text-jup-muted" />
            </div>
          </div>

          <div className="flex items-center justify-between mt-2 pt-2 border-t border-jup-border/40 text-[11px] text-jup-muted">
            <span>≈ ${toUsd} USD</span>
            <span className="text-slate-400 font-mono">
              1 {fromToken.symbol} = {(fromToken.price / toToken.price).toFixed(2)} {toToken.symbol}
            </span>
          </div>
        </div>

        {/* Smart Route Pill (Solves Routing Bloat) */}
        <div
          onClick={onOpenRoute}
          className="my-3 p-3 rounded-xl bg-jup-hover/40 border border-jup-border/60 hover:border-jup-cyan/50 transition cursor-pointer flex items-center justify-between group"
        >
          <div className="flex items-center gap-2 text-xs">
            <div className="p-1 rounded bg-jup-cyan/10 text-jup-cyan">
              <GitMerge className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-semibold text-slate-200 group-hover:text-jup-cyan transition">
                Raydium (60%) + Meteora (40%)
              </div>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Saved +$1.84 vs single AMM
              </div>
            </div>
          </div>
          <div className="text-[11px] font-mono text-jup-muted group-hover:text-white transition">
            Details →
          </div>
        </div>

        {/* Swap Action Button */}
        <button
          disabled={isSwapping || parsedFrom <= 0}
          onClick={handleExecuteSwap}
          className={`w-full py-3.5 rounded-2xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg ${
            parsedFrom <= 0
              ? 'bg-jup-border/50 text-slate-500 cursor-not-allowed'
              : swapSuccess
              ? 'bg-emerald-500 text-black shadow-emerald-500/25'
              : isSwapping
              ? 'bg-jup-lime/80 text-black cursor-wait'
              : 'bg-jup-lime text-black hover:bg-opacity-95 shadow-jup-lime/20 active:scale-[0.99]'
          }`}
        >
          {isSwapping ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Routing via Jito Bundle...</span>
            </>
          ) : swapSuccess ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              <span>Swap Confirmed on Solana!</span>
            </>
          ) : parsedFrom <= 0 ? (
            'Enter an Amount'
          ) : (
            `Swap ${fromToken.symbol} to ${toToken.symbol}`
          )}
        </button>

        {/* Success Banner */}
        {swapSuccess && (
          <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between animate-fade-in">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Confirmed in 380ms
            </span>
            <a
              href="https://solscan.io"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] underline hover:text-white"
            >
              View on Solscan ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
