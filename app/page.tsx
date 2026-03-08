import Background from "./components/Background";
import LinkCard from "./components/LinkCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-white">

      <Background />

      <div className="flex flex-col items-center gap-6 animate-fadeIn">

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-xl opacity-70 animate-spin-slow"></div>

          <Image
          src="/avatar.png"
           alt="avatar"
            width={112}
             height={112}
              className="relative rounded-full border border-white/20"
/>
        </div>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Ace
        </h1>

        <p className="text-neutral-400 text-sm">
          Software Engineer • Programmer
        </p>

        <div className="flex flex-col gap-4 w-full max-w-sm mt-6">
          <LinkCard title="Instagram" link="https://www.instagram.com/urniggaace?igsh=MTFxd2plYm84aGY3dg%3D%3D&utm_source=qr" />
          <LinkCard title="Snapchat" link="https://snapchat.com/t/GMjfH3er" />
          <LinkCard title="TikTok" link="https://www.tiktok.com/@o7aje?_r=1&_t=ZS-94QJDbqEPqf" />
          <LinkCard title="Discord" link="https://discord.com/users/qcfc" />
          <LinkCard title="X" link="https://x.com/urniggaace" />
          <LinkCard title="Spotify" link="https://open.spotify.com/user/ltpec8tzzn0xq77hk0tws580f" />

        </div>

      </div>

    </main>
  );
}