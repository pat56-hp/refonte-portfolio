import { Kavoon, Kode_Mono } from "next/font/google";
import "@flaticon/flaticon-uicons/css/all/all.css";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";

const kodeMono = Kode_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-kode-mono",
  display: "swap",
});

const kavoon = Kavoon({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kavoon",
  display: "swap",
});

export const metadata = {
  title: "Portfolio - Patrick Aimé Kouassi",
  description:
    "Bienvenue sur le portfolio de Patrick Aimé Kouassi, développeur web & mobile.",
  generator: "Patrick Aimé Kouassi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${kodeMono.variable} ${kavoon.variable}`}>
      <body className="font-kode-mono antialiased" suppressHydrationWarning>
        <div className="px-5 sm:px-10 md:px-20 pt-10">
          <Header />
          {children}
        </div>
        <Footer />
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            success: {
              style: {
                background: "#e8f5db",
              },
            },
            error: {
              style: {
                background: "#f42525",
                color: "#fff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
