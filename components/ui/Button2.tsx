interface Button2Props {
  text: string;
  className?: string;
}

export default function Button2({ text, className = "" }: Button2Props) {
  return (
    <button
      className={`relative text-sm inline-flex items-center gap-2 px-10 py-2.5 
      font-medium text-white/90 
      bg-white/5 rounded-full
      ring-2 ring-white/10 
      overflow-hidden
      hover:text-white hover:ring-white/20
      transition-all duration-300
      before:absolute before:inset-0 
      before:translate-x-[40%] before:translate-y-[40%]
      before:w-40 before:h-40 
      before:bg-gradient-to-br before:from-white/10 before:to-transparent
      before:rounded-full before:blur-2xl
      before:-z-10 before:animate-pulse
      ${className}`}
    >
      <span>{text}</span>
    </button>
  );
}
