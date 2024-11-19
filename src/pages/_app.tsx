import "@/styles/globals.css";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/app/components/ThemeContext";

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
