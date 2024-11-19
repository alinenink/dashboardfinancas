
import { AppProps } from "next/app";
import '@/styles/globals.css';
import Header from "@/components/header";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="main-layout">
        <Header />
        <div className="content-layout">
          <Sidebar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}
