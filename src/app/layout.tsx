import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

export const metadata: Metadata = {
  title: "Docenza",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header></Header>
        <main className="flex-1 flex items-center justify-center">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
