export default function GlowOrbs() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-yellow-400/5 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-amber-500/6 blur-[100px]" />
      <div className="absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-yellow-300/4 blur-[100px]" />
    </div>
  );
}
