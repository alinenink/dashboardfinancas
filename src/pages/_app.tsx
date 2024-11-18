import "@/styles/globals.css";
import Header from "@/app/components/header";
import Sidebar from "@/app/components/sidebar";

export default function App({ Component, pageProps }: any) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      {/* Header fixo no topo */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1">
          {/* Apenas o componente principal */}
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
