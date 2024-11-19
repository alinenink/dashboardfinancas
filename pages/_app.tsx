
import { AppProps } from "next/app";
import 'styles/globals.css';
import Header from "src/app/components/header";
import Sidebar from "src/app/components/Sidebar";
import { ThemeProvider } from "src/app/components/ThemeContext";

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
