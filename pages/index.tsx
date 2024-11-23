import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para o dashboard com o caminho correto
    router.replace(`/dashboard`);
  }, [router]);

  return (
    <div className="text-center">
      <p>Redirecionando para Dashboard...</p>
    </div>
  );
};

export default Home;
