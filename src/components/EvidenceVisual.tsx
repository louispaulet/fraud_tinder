import type { CaseVisual } from "../types";

type EvidenceVisualProps = {
  visual: CaseVisual;
};

export function EvidenceVisual({ visual }: EvidenceVisualProps) {
  if (visual.kind === "listing") {
    return (
      <div className="overflow-hidden rounded-[1.75rem] border border-stone-300 bg-[#f8f1df] shadow-inner">
        <div className="grid min-h-48 grid-cols-[1.05fr_0.95fr] max-sm:grid-cols-1">
          <div className="relative flex items-center justify-center bg-[linear-gradient(135deg,#d8e7d8,#f7d7a1_55%,#b98a62)] p-6">
            <div className="absolute left-4 top-4 rotate-[-7deg] rounded-full bg-[#15251d] px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#f8f1df]">
              {visual.badge}
            </div>
            <div className="grid h-36 w-44 place-items-center rounded-[2rem] border-4 border-[#f8f1df]/75 bg-[#28352d] p-4 text-center text-sm font-black uppercase tracking-[0.24em] text-[#f7d7a1] shadow-2xl">
              {visual.imageLabel}
            </div>
          </div>
          <div className="space-y-4 p-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#9c3d2d]">
                Marketplace card
              </p>
              <p className="mt-2 font-display text-4xl font-black text-[#18241d]">
                {visual.price}
              </p>
            </div>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="font-black uppercase tracking-[0.16em] text-stone-500">
                  Seller
                </dt>
                <dd className="font-semibold text-stone-900">{visual.seller}</dd>
              </div>
              <div>
                <dt className="font-black uppercase tracking-[0.16em] text-stone-500">
                  Score
                </dt>
                <dd className="font-semibold text-stone-900">
                  {visual.sellerScore}
                </dd>
              </div>
              <div>
                <dt className="font-black uppercase tracking-[0.16em] text-stone-500">
                  Shipping
                </dt>
                <dd className="font-semibold text-stone-900">{visual.shipping}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    );
  }

  if (visual.kind === "article") {
    const urgent = visual.temperature === "urgent";

    return (
      <article
        className={`rounded-[1.75rem] border p-5 shadow-inner ${
          urgent
            ? "border-[#b83d2d] bg-[#fff0df]"
            : "border-[#b6c6a5] bg-[#eff3df]"
        }`}
      >
        <div className="mb-5 flex items-center justify-between gap-3 border-b border-stone-300 pb-3">
          <p className="font-black uppercase tracking-[0.22em] text-stone-700">
            {visual.source}
          </p>
          <span
            className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.18em] ${
              urgent
                ? "bg-[#b83d2d] text-[#fff8e8]"
                : "bg-[#23442f] text-[#eff3df]"
            }`}
          >
            {urgent ? "Urgent tone" : "Calm tone"}
          </span>
        </div>
        <div className="grid gap-5 md:grid-cols-[0.82fr_1.18fr]">
          <div className="relative min-h-36 overflow-hidden rounded-[1.5rem] bg-[#17251d]">
            <div className="absolute inset-4 rounded-full border-[18px] border-[#dba24c]" />
            <div className="absolute bottom-5 left-5 right-5 h-10 rounded-full bg-[#f8f1df]" />
          </div>
          <div>
            <h3 className="font-display text-3xl font-black leading-none text-[#17251d]">
              {visual.headline}
            </h3>
            <p className="mt-4 text-base font-semibold leading-relaxed text-stone-700">
              {visual.subhead}
            </p>
          </div>
        </div>
      </article>
    );
  }

  if (visual.kind === "message") {
    return (
      <div className="rounded-[1.75rem] border border-stone-300 bg-[#ede6d4] p-5 shadow-inner">
        <div className="mx-auto max-w-sm rounded-[2rem] border-8 border-[#1e2b25] bg-[#f9f3e6] p-4 shadow-2xl">
          <div className="mb-4 flex items-center justify-between border-b border-stone-200 pb-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-stone-500">
                {visual.channel}
              </p>
              <p className="font-black text-[#16221b]">{visual.sender}</p>
            </div>
            <span className="h-3 w-3 rounded-full bg-[#b83d2d]" />
          </div>
          <div className="rounded-[1.35rem] bg-[#dbe7d2] p-4 text-sm font-semibold leading-relaxed text-[#16221b]">
            {visual.message}
          </div>
          <p className="mt-4 rotate-[-2deg] text-center font-display text-2xl font-black uppercase text-[#b83d2d]">
            {visual.codeWord}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[1.75rem] border border-stone-300 bg-[#faf4e5] p-5 shadow-inner">
      <div className="mx-auto max-w-md rotate-[-1deg] rounded-xl border border-stone-300 bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-start justify-between gap-4 border-b-2 border-dashed border-stone-300 pb-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-stone-500">
              Receipt
            </p>
            <h3 className="font-display text-3xl font-black text-[#17251d]">
              {visual.vendor}
            </h3>
          </div>
          <p className="font-display text-3xl font-black text-[#23442f]">
            {visual.amount}
          </p>
        </div>
        <ul className="space-y-3">
          {visual.lineItems.map((item) => (
            <li
              className="flex items-center justify-between gap-3 text-sm font-bold text-stone-700"
              key={item}
            >
              <span>{item}</span>
              <span className="h-px flex-1 border-t border-dotted border-stone-300" />
            </li>
          ))}
        </ul>
        <p className="mt-6 rounded-lg bg-[#f4ead4] p-3 text-sm font-black uppercase tracking-[0.16em] text-stone-700">
          Due: {visual.due}
        </p>
      </div>
    </div>
  );
}
