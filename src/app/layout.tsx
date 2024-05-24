import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import QueryProvider from "@/components/QueryProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "NotesApp",
  description: "Notes App Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <ToastContainer />
            <Navbar />
            <main className='container my-4'>{children}</main>
            <Footer />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
