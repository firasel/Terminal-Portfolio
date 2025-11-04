import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { PropsWithChildren } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fi Rasel - MERN Stack Developer",
  description: "Hi, I'm Fi Rasel, A Programmer and MERN stack developer.",
  keywords: [
    "FiRasel",
    "Rasel",
    "MdRasel",
    "mern stack developer",
    "terminal portfolio",
    "terminal style portfolio",
    "nextJS portfolio",
  ],
  authors: [{ name: "FiRasel" }],
  openGraph: {
    title: "Fi Rasel - MERN Stack Developer",
    description: "Hi, I'm Fi Rasel, A Programmer and MERN stack developer.",
    url: "https://terminal.firasel.com/",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co/2SDhrHX/og.png",
        width: 1200,
        height: 630,
        alt: "Fi Rasel - MERN Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fi Rasel - MERN Stack Developer",
    description: "Hi, I'm Fi Rasel, A Programmer and MERN stack developer.",
    images: ["https://i.ibb.co/2SDhrHX/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        {children}

        {process.env.NEXT_PUBLIC_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}
