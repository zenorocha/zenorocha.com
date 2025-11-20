import "../public/static/css/prism.css";
import "remixicon/fonts/remixicon.css";

import Script from "next/script";

import CommandBar from "../components/CommandBar";
import { GA_TRACKING_ID } from "../lib/gtag";
import { getCssText } from "../stitches.config";
import Template from "./template";

export const metadata = {
  metadataBase: new URL("https://zenorocha.com"),
  title: {
    default: "Zeno Rocha",
    template: "%s // Zeno Rocha"
  },
  description: "Obsessed with developer experience",
  authors: [{ name: "Zeno Rocha" }],
  openGraph: {
    type: "website",
    siteName: "Zeno Rocha"
  },
  twitter: {
    card: "summary_large_image"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport = {
  themeColor: "#08070b"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body suppressHydrationWarning>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
        <Template>
          <CommandBar>{children}</CommandBar>
        </Template>
      </body>
    </html>
  );
}
