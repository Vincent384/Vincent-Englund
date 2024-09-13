import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vincent Englund",
  description: "Utforska Vincent Englunds portfölj för att få en inblick i hans projekt och kompetenser som webbutvecklare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body className={inter.className}>
      <header className=' bg-slate-50/10'>
          
        {children}
          <Toaster/>
      </header>
        </body>
    </html>
  );
}
