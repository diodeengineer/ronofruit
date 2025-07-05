import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rono Fruit Stall",
  description: "Rono Fruit Stall - Fresh and seasonal fruits available locally. Visit us or explore our products online.",
  keywords: "Rono Fruit Stall, fresh fruits, seasonal fruits, fruit shop",
  openGraph: {
    title: "Rono Fruit Stall",
    description: "Rono Fruit Stall offers a wide variety of fresh, seasonal fruits. Check our selection and learn more about us.",
    url: "https://ronofruit.vercel.app",
    siteName: "Rono Fruit Stall",
    // images: [
    //   {
    //     url: "https://ronofruit.vercel.app/og-banner.jpg", // Update if you have an image
    //     width: 1200,
    //     height: 630,
    //     alt: "Rono Fruit Stall - Fresh and Seasonal Fruits",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
