import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vincent Englund",
  description: "En portfolie hemsida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body className={inter.className}>
      <header className='border-2 m-5 rounded-xl border-slate-600 bg-slate-50/10'>
          {/* <Navbar/> */}
        {children}
          <Toaster/>
      </header>
        </body>
    </html>
  );
}
