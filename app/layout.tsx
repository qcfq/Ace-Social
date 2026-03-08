import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ace Social",
  description: "All my social links in one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Umami script */}
        <Script
          strategy="afterInteractive"
          async
          src="https://cloud.umami.is/script.js"
          data-website-id="92397e0e-8b6f-4887-a31b-805ae724402b"
        />
      </body>
    </html>
  );
}