// Site-wide ambient background: drifting aurora blobs + film grain, painted
// behind all content. Pure CSS (no JS) so it stays cheap and SSR-friendly.
export default function Ambient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Aurora blobs — soft, blurred, slowly drifting. */}
      <div className="animate-aurora-a absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-accent/[0.10] blur-[130px]" />
      <div className="animate-aurora-b absolute -right-52 top-1/3 h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.08] blur-[130px]" />
      <div className="animate-aurora-a absolute bottom-[-12rem] left-1/3 h-[32rem] w-[32rem] rounded-full bg-indigo-500/[0.07] blur-[140px]" />

      {/* Vignette to keep edges deep and center readable. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_40%,rgba(10,10,10,0.7)_100%)]" />

      {/* Film grain, oversized so the shimmer never reveals an edge. */}
      <div className="animate-grain bg-grain absolute -inset-[50%] opacity-[0.035] mix-blend-soft-light" />
    </div>
  );
}
