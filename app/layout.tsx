import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space Shooter - Epic Shoot'em Up",
  description: "An engaging vertical shoot'em up game with stunning visuals, smooth auto-fire gameplay, and intuitive ship designs",
  manifest: "/manifest.json",
  themeColor: "#0a0a0f",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Space Shooter",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon-192x192.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
