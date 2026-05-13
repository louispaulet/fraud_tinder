import { getScamFamily, scamFamilies } from "../data/families";
import type { Decision, ScamCase, ScamFamily } from "../types";

type ResultsPanelProps = {
  cases: ScamCase[];
  decisions: Decision[];
  onRestart: () => void;
};

type FamilyStats = {
  family: ScamFamily;
  attempts: number;
  correct: number;
  accuracy: number;
  scamsCaught: number;
  scamsMissed: number;
  falseAlarms: number;
};

export function ResultsPanel({ cases, decisions, onRestart }: ResultsPanelProps) {
  const correct = decisions.filter((decision) => decision.selected === decision.correct);
  const accuracy = Math.round((correct.length / cases.length) * 100);
  const decisionByCaseId = new Map(decisions.map((decision) => [decision.caseId, decision]));
  const familyStats = buildFamilyStats(cases, decisionByCaseId);
  const bestFamily = [...familyStats].sort(sortBestFamily)[0];
  const weakestFamily = [...familyStats].sort(sortWeakestFamily)[0];

  return (
    <section className="paper-card mx-auto max-w-6xl rounded-[2rem] border border-[#3b2f21]/20 bg-[#f6edd8] p-4 shadow-[0_25px_80px_rgba(21,19,14,0.28)] sm:p-6">
      <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-4">
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

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {bestFamily ? (
              <Callout
                eyebrow="Sharpest desk"
                family={bestFamily.family.label}
                text={`${bestFamily.correct}/${bestFamily.attempts} correct in this family.`}
                tone="good"
              />
            ) : null}
            {weakestFamily ? (
              <Callout
                eyebrow="Inspect again"
                family={weakestFamily.family.label}
                text={weakestFamilyText(weakestFamily)}
                tone="watch"
              />
            ) : null}
          </div>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="font-display text-4xl font-black text-[#17251d]">
              Family report
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {familyStats.map((stats) => (
                <article
                  className="rounded-2xl border border-[#3b2f21]/15 bg-[#fff9eb]/75 p-4"
                  key={stats.family.id}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7b6b4f]">
                        {stats.attempts} files
                      </p>
                      <h3 className="font-display text-2xl font-black leading-none text-[#17251d]">
                        {stats.family.label}
                      </h3>
                    </div>
                    <p className="font-display text-4xl font-black text-[#9c3d2d]">
                      {stats.accuracy}%
                    </p>
                  </div>
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-stone-700">
                    {stats.correct}/{stats.attempts} correct. {stats.scamsCaught} scams
                    caught, {stats.scamsMissed} missed, {stats.falseAlarms} false
                    alarms.
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-4xl font-black text-[#17251d]">
              Case ledger
            </h2>
            <div className="mt-4 max-h-[31rem] space-y-3 overflow-auto pr-2">
              {cases.map((item) => {
                const decision = decisionByCaseId.get(item.id);
                const isCorrect = decision?.selected === item.correctLabel;
                const family = getScamFamily(item.familyId);

                return (
                  <article
                    className="rounded-2xl border border-[#3b2f21]/15 bg-[#fff9eb]/75 p-4"
                    key={item.id}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7b6b4f]">
                          {family.label} / {item.patternLabel}
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
          </section>
        </div>
      </div>
    </section>
  );
}

function buildFamilyStats(
  cases: ScamCase[],
  decisionByCaseId: Map<string, Decision>,
): FamilyStats[] {
  return scamFamilies.map((family) => {
    const familyCases = cases.filter((item) => item.familyId === family.id);
    const correct = familyCases.filter((item) => {
      const decision = decisionByCaseId.get(item.id);
      return decision?.selected === item.correctLabel;
    }).length;
    const scamsCaught = familyCases.filter((item) => {
      const decision = decisionByCaseId.get(item.id);
      return item.correctLabel === "scam" && decision?.selected === "scam";
    }).length;
    const scamsMissed = familyCases.filter((item) => {
      const decision = decisionByCaseId.get(item.id);
      return item.correctLabel === "scam" && decision?.selected === "not-scam";
    }).length;
    const falseAlarms = familyCases.filter((item) => {
      const decision = decisionByCaseId.get(item.id);
      return item.correctLabel === "not-scam" && decision?.selected === "scam";
    }).length;

    return {
      family,
      attempts: familyCases.length,
      correct,
      accuracy: Math.round((correct / familyCases.length) * 100),
      scamsCaught,
      scamsMissed,
      falseAlarms,
    };
  });
}

function sortBestFamily(first: FamilyStats, second: FamilyStats) {
  if (second.accuracy !== first.accuracy) {
    return second.accuracy - first.accuracy;
  }

  return second.attempts - first.attempts;
}

function sortWeakestFamily(first: FamilyStats, second: FamilyStats) {
  if (first.accuracy !== second.accuracy) {
    return first.accuracy - second.accuracy;
  }

  return second.attempts - first.attempts;
}

function weakestFamilyText(stats: FamilyStats) {
  if (stats.scamsMissed > stats.falseAlarms) {
    return `${stats.scamsMissed} scam signals slipped through this family.`;
  }

  if (stats.falseAlarms > stats.scamsMissed) {
    return `${stats.falseAlarms} ordinary files drew a red stamp here.`;
  }

  return `${stats.correct}/${stats.attempts} correct. This family wants another look.`;
}

type CalloutProps = {
  eyebrow: string;
  family: string;
  text: string;
  tone: "good" | "watch";
};

function Callout({ eyebrow, family, text, tone }: CalloutProps) {
  return (
    <article
      className={`rounded-[1.5rem] border p-4 ${
        tone === "good"
          ? "border-[#315b3d]/25 bg-[#dce9cd] text-[#17351f]"
          : "border-[#9c3d2d]/25 bg-[#f7d7c8] text-[#5b2018]"
      }`}
    >
      <p className="text-xs font-black uppercase tracking-[0.22em] opacity-80">
        {eyebrow}
      </p>
      <h3 className="mt-2 font-display text-2xl font-black leading-none">
        {family}
      </h3>
      <p className="mt-2 text-sm font-bold leading-relaxed">{text}</p>
    </article>
  );
}
