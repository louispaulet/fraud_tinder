import type { Verdict } from "../types";

type DecisionControlsProps = {
  onDecide: (verdict: Verdict) => void;
  disabled?: boolean;
};

export function DecisionControls({ onDecide, disabled }: DecisionControlsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <button
        className="group rounded-2xl border-2 border-[#9c3d2d] bg-[#f7d7c8] px-5 py-4 text-left shadow-[0_12px_0_#6d2b22] transition hover:-translate-y-1 hover:shadow-[0_16px_0_#6d2b22] active:translate-y-1 active:shadow-[0_6px_0_#6d2b22] disabled:cursor-not-allowed disabled:opacity-50"
        disabled={disabled}
        onClick={() => onDecide("scam")}
        type="button"
      >
        <span className="block text-xs font-black uppercase tracking-[0.24em] text-[#7b2f25]">
          Swipe left
        </span>
        <span className="font-display text-3xl font-black text-[#4b1f19]">
          Scam
        </span>
      </button>
      <button
        className="group rounded-2xl border-2 border-[#315b3d] bg-[#dce9cd] px-5 py-4 text-left shadow-[0_12px_0_#213f2a] transition hover:-translate-y-1 hover:shadow-[0_16px_0_#213f2a] active:translate-y-1 active:shadow-[0_6px_0_#213f2a] disabled:cursor-not-allowed disabled:opacity-50"
        disabled={disabled}
        onClick={() => onDecide("not-scam")}
        type="button"
      >
        <span className="block text-xs font-black uppercase tracking-[0.24em] text-[#315b3d]">
          Swipe right
        </span>
        <span className="font-display text-3xl font-black text-[#172f20]">
          Not scam
        </span>
      </button>
    </div>
  );
}
