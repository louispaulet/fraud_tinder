import { AnimatePresence, motion, type PanInfo } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { cases } from "../data/cases";
import type { Decision, ScamCase, Verdict } from "../types";
import { CaseCard } from "./CaseCard";
import { DecisionControls } from "./DecisionControls";
import { ResultsPanel } from "./ResultsPanel";

const SWIPE_THRESHOLD = 120;

export function SwipeDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [decisions, setDecisions] = useState<Decision[]>([]);
  const [exitX, setExitX] = useState(0);
  const [lastFeedback, setLastFeedback] = useState<{
    case: ScamCase;
    selected: Verdict;
  } | null>(null);
  const decisionLock = useRef(false);

  const activeCase = cases[currentIndex];
  const complete = currentIndex >= cases.length;
  const score = decisions.filter((item) => item.selected === item.correct).length;
  const streak = useMemo(() => {
    let count = 0;

    for (let index = decisions.length - 1; index >= 0; index -= 1) {
      if (decisions[index].selected !== decisions[index].correct) {
        break;
      }

      count += 1;
    }

    return count;
  }, [decisions]);

  const decide = (selected: Verdict) => {
    if (!activeCase || complete || decisionLock.current) {
      return;
    }

    decisionLock.current = true;
    setExitX(selected === "scam" ? -520 : 520);
    setDecisions((previous) => [
      ...previous,
      {
        caseId: activeCase.id,
        selected,
        correct: activeCase.correctLabel,
      },
    ]);
    setLastFeedback({ case: activeCase, selected });
    setCurrentIndex((previous) => previous + 1);
    window.setTimeout(() => {
      decisionLock.current = false;
    }, 320);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        decide("scam");
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        decide("not-scam");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  if (complete) {
    return (
      <ResultsPanel
        cases={cases}
        decisions={decisions}
        onRestart={() => {
          setCurrentIndex(0);
          setDecisions([]);
          setLastFeedback(null);
          setExitX(0);
        }}
      />
    );
  }

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[1fr_22rem]">
      <section aria-live="polite" className="relative min-h-[48rem]">
        <div className="absolute inset-x-4 top-8 hidden h-[42rem] rotate-[-4deg] rounded-[2rem] border border-[#2a2118]/15 bg-[#d7c39b] shadow-xl md:block" />
        <div className="absolute inset-x-2 top-4 hidden h-[42rem] rotate-[3deg] rounded-[2rem] border border-[#2a2118]/15 bg-[#e8d7b2] shadow-xl md:block" />
        <AnimatePresence custom={exitX} mode="popLayout">
          {activeCase ? (
            <motion.div
              animate={{ opacity: 1, rotate: 0, scale: 1, x: 0, y: 0 }}
              className="relative z-10 cursor-grab touch-pan-y active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              exit={{
                opacity: 0,
                rotate: exitX < 0 ? -18 : 18,
                scale: 0.92,
                x: exitX,
                y: 30,
              }}
              initial={{ opacity: 0, rotate: -2, scale: 0.96, y: 18 }}
              key={activeCase.id}
              onDragEnd={(_, info: PanInfo) => {
                if (info.offset.x <= -SWIPE_THRESHOLD) {
                  decide("scam");
                } else if (info.offset.x >= SWIPE_THRESHOLD) {
                  decide("not-scam");
                }
              }}
              style={{ willChange: "transform" }}
              transition={{ type: "spring", bounce: 0.22, duration: 0.55 }}
              whileDrag={{
                rotate: activeCase.correctLabel === "scam" ? -4 : 4,
                scale: 1.015,
              }}
            >
              <CaseCard item={activeCase} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>

      <aside className="sticky top-6 space-y-5">
        <div className="rounded-[2rem] border border-[#f8f1df]/20 bg-[#17251d] p-5 text-[#f8f1df] shadow-2xl">
          <p className="text-xs font-black uppercase tracking-[0.26em] text-[#dba24c]">
            Inspection board
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            <Metric label="Case" value={`${currentIndex + 1}/${cases.length}`} />
            <Metric label="Score" value={String(score)} />
            <Metric label="Streak" value={String(streak)} />
          </div>
          <div className="mt-5 h-3 overflow-hidden rounded-full bg-[#0d1712]">
            <div
              className="h-full rounded-full bg-[#dba24c] transition-all"
              style={{ width: `${(currentIndex / cases.length) * 100}%` }}
            />
          </div>
          <p className="mt-4 text-sm font-semibold leading-relaxed text-[#d8caa9]">
            Drag the case file left for scam or right for not scam. Arrow keys
            and buttons work too, because paperwork should be dramatic, not hostile.
          </p>
        </div>

        <DecisionControls disabled={!activeCase} onDecide={decide} />

        <div className="rounded-[2rem] border border-[#3b2f21]/15 bg-[#f6edd8] p-5 shadow-xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#7b6b4f]">
            Last ruling
          </p>
          {lastFeedback ? (
            <div className="mt-3">
              <p className="font-display text-2xl font-black text-[#17251d]">
                {lastFeedback.case.title}
              </p>
              <p
                className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.18em] ${
                  lastFeedback.selected === lastFeedback.case.correctLabel
                    ? "bg-[#dce9cd] text-[#23442f]"
                    : "bg-[#f7d7c8] text-[#7b2f25]"
                }`}
              >
                {lastFeedback.selected === lastFeedback.case.correctLabel
                  ? "Correct"
                  : "Wrong"}
              </p>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-stone-700">
                {lastFeedback.case.explanation}
              </p>
            </div>
          ) : (
            <p className="mt-3 text-sm font-semibold text-stone-700">
              No stamp yet. The first file is waiting on your desk.
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}

type MetricProps = {
  label: string;
  value: string;
};

function Metric({ label, value }: MetricProps) {
  return (
    <div className="rounded-2xl bg-[#0d1712] p-3">
      <p className="font-display text-3xl font-black">{value}</p>
      <p className="text-[0.64rem] font-black uppercase tracking-[0.18em] text-[#dba24c]">
        {label}
      </p>
    </div>
  );
}
