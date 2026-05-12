import { SwipeDeck } from "./components/SwipeDeck";

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#28352d] text-[#1f1a14]">
      <div className="desk-grid fixed inset-0 opacity-70" />
      <div className="fixed -left-24 top-24 h-72 w-72 rounded-full bg-[#dba24c]/30 blur-3xl" />
      <div className="fixed -right-24 bottom-10 h-96 w-96 rounded-full bg-[#9c3d2d]/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="inline-flex rotate-[-1deg] rounded-full bg-[#dba24c] px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#17251d] shadow-lg">
              Fictional Scam Inspection Bureau
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-6xl font-black leading-[0.85] tracking-[-0.06em] text-[#f8f1df] sm:text-7xl lg:text-8xl">
              Fraud Tinder
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-[#e8dcc1]">
              Sort synthetic case files with your thumb, your mouse, or your
              arrow keys. Left stamps a scam. Right clears the file.
            </p>
          </div>
          <div className="rotate-[2deg] rounded-[1.5rem] border-2 border-[#f8f1df]/60 bg-[#f8f1df]/90 p-4 text-sm font-black uppercase tracking-[0.18em] text-[#17251d] shadow-2xl">
            No real listings
            <br />
            No real victims
            <br />
            All synthetic
          </div>
        </header>

        <SwipeDeck />
      </div>
    </main>
  );
}
