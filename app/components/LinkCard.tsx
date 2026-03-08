"use client";

type Props = {
  title: string
  link: string
  icon: React.ReactNode
}

declare global {
  interface Window {
    umami?: {
      track: (event: string) => void
    }
  }
}

export default function LinkCard({ title, link, icon }: Props) {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.umami) {
      window.umami.track(title)
    }
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="bg-neutral-900/80 backdrop-blur border border-neutral-800 hover:border-neutral-600 hover:shadow-lg hover:shadow-white/10 hover:scale-105 transition-all duration-200 p-4 rounded-xl flex items-center justify-center gap-3"    >
      {icon}
      <span>{title}</span>
    </a>
  )
}