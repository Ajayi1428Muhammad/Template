import { Geist, Geist_Mono, Playfair_Display, Cormorant_Garamond, Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
})

export const metadata = {
  title: "Moot Restaurant",
  description: "Access freshly prepared meals from Moot Restaurant, Lagos. Order online for delivery or pickup.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${syne.variable} ${plusJakartaSans.variable} ${cormorantGaramond.variable} h-full antialiased scrollbar-track-blue-50 scrollbar-thumb-amber-300`}
    >
      <body className="min-h-full flex flex-col p-2">
        <Navbar />
        <main className="flex-1" >
        {children}
        </main>
      </body>
    </html>
  );
}
