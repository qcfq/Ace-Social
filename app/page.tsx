import LinkCard from "./components/LinkCard";

import Image from 'next/image';

import { FaInstagram, FaTiktok, FaDiscord, FaSpotify, FaSnapchat} from "react-icons/fa"

import { FaXTwitter } from "react-icons/fa6"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white gap-6">

      <Image
        src="/Ben's Cus.jpg"
        alt="Profile picture"
        width={160}
        height={112}
        className="w-38 h-38 rounded-full"
      />

      <h1 className="text-3xl font-bold">Ace</h1>

      <p className="text-gray-400">
        Software Engineer • Programmer
      </p>

      <div className="flex flex-col gap-4 w-80 mt-10">

  <LinkCard
    title="Instagram"
    link="https://www.instagram.com/urniggaace?igsh=MTFxd2plYm84aGY3dg%3D%3D&utm_source=qr
"
    icon={<FaInstagram />}
  />

   <LinkCard
    title="Snapchat"
    link="https://snapchat.com/t/GMjfH3er"
    icon={<FaSnapchat />}
  /> 

  <LinkCard
    title="TikTok"
    link="https://www.tiktok.com/@o7aje?_r=1&_t=ZS-94QJDbqEPqf"
    icon={<FaTiktok />}
  />

  <LinkCard
    title="Discord"
    link="https://discord.com/users/qcfc"
    icon={<FaDiscord />}
  />

  <LinkCard
    title="X (Twitter)"
    link="https://x.com/urniggaace?s=21"
    icon={<FaXTwitter />}
  />

  <LinkCard
    title="Spotify"
    link="https://open.spotify.com/user/ltpec8tzzn0xq77hk0tws580f?si=A_YuYnjLSkusHZ0YqKFu_g"
    icon={<FaSpotify />}
  />

</div>

    </main>
  )
}