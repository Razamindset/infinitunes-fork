import "@/styles/globals.css";

import { siteConfig } from "@/config/site";
import {
  fontInter,
  fontMono,
  fontSans,
  incognito,
  overpass,
  poppins,
} from "@/lib/fonts";
import { absoluteUrl, cn } from "@/lib/utils";
import Providers from "@/components/provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";

export const viewport = {
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: {
    name: siteConfig.author.name,
    url: siteConfig.author.url,
  },
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.author.x,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  metadataBase: new URL(absoluteUrl("/")),
};

type RootLayoutProps = {
  modal: React.ReactNode;
  children: React.ReactNode;
};

export default function RootLayout({ modal, children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
          fontInter.variable,
          poppins.variable,
          overpass.variable,
          incognito.variable
        )}
      >
        <Providers>
          {children}
          {modal}
        </Providers>

        <TailwindIndicator />
      </body>
    </html>
  );
}
