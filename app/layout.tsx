import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domain Parking Detector – Catch Front-Running Registrars",
  description: "Monitor domains you search for and detect if they get registered or parked immediately after your searches. Prove domain front-running."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a6e440b0-c200-4310-8db4-a3eefd22a41c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
