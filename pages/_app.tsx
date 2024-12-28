import { AppProps } from "next/app";
import "src/app/styles/globals.css";
import Header from "src/app/components/header";
import { ThemeProvider } from "src/app/components/ThemeContext";
import Sidebar from "@/components/sidebar";
import { Provider } from 'react-redux';
import { store } from "@/app/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="main-layout">
        <Header />
        <div className="content-layout">
          <Sidebar />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>{" "}
        </div>
      </div>
    </ThemeProvider>
  );
}
