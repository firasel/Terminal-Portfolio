import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Fi Rasel - MERN Stack Developer",
  description: "Hi, I'm Fi Rasel, A Programmer and MERN stack developer.",
  keywords:
    "FiRasel, Rasel, MdRasel, mern stack developer, terminal portfolio, terminal style portfolio, nextJS portfolio",
  authors: [{ name: "FiRasel" }],
  openGraph: {
    title: "Fi Rasel - MERN Stack Developer",
    description: "Hi, I'm Fi Rasel, A Programmer and MERN stack developer.",
    url: "https://terminal.firasel.com/",
    type: "website",
    images: ["https://i.ibb.co/2SDhrHX/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fi Rasel - MERN Stack Developer",
    description: "Hi, I'm Fi Rasel, A Programmer and MERN stack developer.",
    images: ["https://i.ibb.co/2SDhrHX/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        />
        <Script strategy="lazyOnload" id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
