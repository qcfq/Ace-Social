import Background from "./components/Background";
import LinkCard from "./components/LinkCard";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-white">

      <Background />

      <div className="flex flex-col items-center gap-6 animate-fadeIn">

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-xl opacity-70 animate-spin-slow"></div>

          <img
            src="/avatar.png"
            alt="avatar"
            className="relative w-28 h-28 rounded-full border border-white/20"
          />
        </div>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Ace
        </h1>

        <p className="text-neutral-400 text-sm">
          All my links in one place
        </p>

        <div className="flex flex-col gap-4 w-full max-w-sm mt-6">

          <LinkCard title="GitHub" link="https://github.com" />
          <LinkCard title="Twitter" link="https://twitter.com" />
          <LinkCard title="YouTube" link="https://youtube.com" />
          <LinkCard title="Discord" link="https://discord.com" />

        </div>

      </div>

    </main>
  );
}