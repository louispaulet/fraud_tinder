import { EvidenceVisual } from "./EvidenceVisual";
import { getScamFamily } from "../data/families";
import type { ScamCase, Verdict } from "../types";

type CaseCardProps = {
  item: ScamCase;
  feedback?: {
    selected: Verdict;
    correct: boolean;
    explanation: string;
  };
};

export function CaseCard({ item, feedback }: CaseCardProps) {
  const family = getScamFamily(item.familyId);

  return (
    <article className="paper-card relative overflow-hidden rounded-[2rem] border border-[#3b2f21]/20 bg-[#f6edd8] p-4 shadow-[0_25px_80px_rgba(21,19,14,0.28)] sm:p-6">
      <div className="absolute right-6 top-5 rotate-[4deg] rounded-lg border-4 border-[#9c3d2d] px-4 py-2 font-black uppercase tracking-[0.24em] text-[#9c3d2d] opacity-70">
        Evidence
      </div>
      <div className="relative z-10">
        <div className="mb-5 pr-24">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#7b6b4f]">
            {item.dossier}
          </p>
          <h2 className="mt-2 font-display text-4xl font-black leading-none text-[#17251d] sm:text-5xl">
            {item.title}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <p className="inline-flex rounded-full bg-[#223c2b] px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#f8f1df]">
              {item.type}
            </p>
            <p className="inline-flex rounded-full border border-[#b8652f]/35 bg-[#fff9eb] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#6e4b24]">
              {family.label}
            </p>
          </div>
        </div>

        <EvidenceVisual visual={item.visual} />

        <section className="mt-5 rounded-[1.35rem] border border-[#3b2f21]/15 bg-[#fff9eb]/75 p-4">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#7b6b4f]">
            Inspector notes
          </p>
          <ul className="space-y-2">
            {item.evidence.map((note) => (
              <li className="flex gap-2 text-sm font-semibold text-[#2f2a20]" key={note}>
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#b8652f]" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>

        {feedback ? (
          <aside
            className={`mt-5 rounded-[1.35rem] border-2 p-4 ${
              feedback.correct
                ? "border-[#315b3d] bg-[#e6f0dc] text-[#17351f]"
                : "border-[#9c3d2d] bg-[#ffe4d8] text-[#5b2018]"
            }`}
          >
            <p className="font-black uppercase tracking-[0.18em]">
              {feedback.correct ? "Correct classification" : "Missed signal"}
            </p>
            <p className="mt-2 text-sm font-semibold leading-relaxed">
              You chose {formatVerdict(feedback.selected)}. {feedback.explanation}
            </p>
          </aside>
        ) : null}
      </div>
    </article>
  );
}

function formatVerdict(verdict: Verdict) {
  return verdict === "scam" ? "Scam" : "Not scam";
}
