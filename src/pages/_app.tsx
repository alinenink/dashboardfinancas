import "@/styles/globals.css";
import Header from "@/app/components/header";
import Sidebar from "@/app/components/sidebar";

export default function App({ Component, pageProps }: any) {
  return (
    <div className="main-layout">
      <Header />

      <div className="content-layout">
        <Sidebar />
        <main className="main-content">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
