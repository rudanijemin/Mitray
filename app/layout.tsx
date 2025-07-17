import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mitray Cow Shala - Pure Dairy Products",
  description:
    "Premium quality milk, traditional Bilona ghee, and organic khatar from our cow shala. Pure, natural, and traditional.",
  keywords:
    "cow milk, bilona ghee, organic khatar, dairy products, traditional, pure, natural",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}  
                    <SpeedInsights />
</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
