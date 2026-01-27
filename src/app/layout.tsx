import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../styles/globals.css";
import { PropsWithChildren } from "react";

const siteTitleDescription = {
  title: "Fi Rasel - Software Developer | Next.js & Headless CMS",
  description:
    "Software Developer with 3+ years of experience building modern web applications. Specialized in Next.js, React, headless CMS solutions, and complex UI architecture.",
};

export const metadata: Metadata = {
  ...siteTitleDescription,
  keywords:
    "FiRasel, Fi Rasel, Md Rasel, software engineer, frontend developer, Next.js developer, React developer, headless CMS, PayloadCMS, Sanity CMS, TailwindCSS, TypeScript, terminal portfolio, interactive portfolio",
  authors: [{ name: "FiRasel" }],
  openGraph: {
    ...siteTitleDescription,
    url: "https://terminal.firasel.com/",
    type: "website",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Fi Rasel - Terminal Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    ...siteTitleDescription,
    images: ["/preview.png"],
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
