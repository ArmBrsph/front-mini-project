import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/componet/Footer";
import Navbar from "@/componet/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
