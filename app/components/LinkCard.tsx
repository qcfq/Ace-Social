"use client";

type Props = {
  title: string;
  link: string;
};

declare global {
  interface Window {
    umami?: {
      track: (event: string) => void;
    };
  }
}

export default function LinkCard({ title, link }: Props) {
  const handleClick = () => {
    if (window.umami) {
      window.umami.track(title);
    }
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group relative flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md py-4 font-medium transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:scale-[1.04]"
    >
      <span className="relative z-10">{title}</span>

      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 blur-xl"></div>
    </a>
  );
}