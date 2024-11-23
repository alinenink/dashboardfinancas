import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/dashboard`);
  }, [router]);

  return (
    <div className="text-center">
      <Head>
        <meta http-equiv="refresh" content="2; url=/dashboard" />
      </Head>
      <p>
        Redirecionando para Dashboard...
        Caso o redirecionamento não ocorra,{" "}
        <a href="/dashboard" className="text-blue-500 underline">
          clique aqui
        </a>.
      </p>
    </div>
  );
};

export default Home;
