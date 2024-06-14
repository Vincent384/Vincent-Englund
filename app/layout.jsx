import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vincent Englund",
  description: "A professional portfolio website showcasing the projects and skills of Vincent Englund",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
