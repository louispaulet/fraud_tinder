import type { Decision, ScamCase } from "../types";

type ResultsPanelProps = {
  cases: ScamCase[];
  decisions: Decision[];
  onRestart: () => void;
};

export function ResultsPanel({ cases, decisions, onRestart }: ResultsPanelProps) {
  const correct = decisions.filter((decision) => decision.selected === decision.correct);
  const accuracy = Math.round((correct.length / cases.length) * 100);

  return (
    <section className="paper-card mx-auto max-w-4xl rounded-[2rem] border border-[#3b2f21]/20 bg-[#f6edd8] p-6 shadow-[0_25px_80px_rgba(21,19,14,0.28)]">
      <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr]">
        <div className="rounded-[1.5rem] bg-[#17251d] p-6 text-[#f8f1df]">
          <p className="text-xs font-black uppercase tracking-[0.26em] text-[#dba24c]">
            Final stamp
          </p>
          <p className="mt-4 font-display text-7xl font-black leading-none">
            {accuracy}%
          </p>
          <p className="mt-3 text-lg font-bold">
            {correct.length} of {cases.length} cases classified correctly.
          </p>
          <button
            className="mt-8 rounded-full bg-[#dba24c] px-5 py-3 text-sm font-black uppercase tracking-[0.2em] text-[#17251d] transition hover:-translate-y-0.5"
            onClick={onRestart}
            type="button"
          >
            Reopen desk
          </button>
        </div>
        <div>
          <h2 className="font-display text-4xl font-black text-[#17251d]">
            Case ledger
          </h2>
          <div className="mt-4 max-h-[31rem] space-y-3 overflow-auto pr-2">
            {cases.map((item) => {
              const decision = decisions.find((entry) => entry.caseId === item.id);
              const isCorrect = decision?.selected === item.correctLabel;

              return (
                <article
                  className="rounded-2xl border border-[#3b2f21]/15 bg-[#fff9eb]/75 p-4"
                  key={item.id}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7b6b4f]">
                        {item.type}
                      </p>
                      <h3 className="font-display text-2xl font-black text-[#17251d]">
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.18em] ${
                        isCorrect
                          ? "bg-[#dce9cd] text-[#23442f]"
                          : "bg-[#f7d7c8] text-[#7b2f25]"
                      }`}
                    >
                      {isCorrect ? "Correct" : "Wrong"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-stone-700">
                    Correct answer:{" "}
                    <strong>
                      {item.correctLabel === "scam" ? "Scam" : "Not scam"}
                    </strong>
                    . {item.explanation}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
