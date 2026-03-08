import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ace Social",
  description: "All my links in one place",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://cloud.umami.is/script.js"
          data-website-id="92397e0e-8b6f-4887-a31b-805ae724402b"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  )
}