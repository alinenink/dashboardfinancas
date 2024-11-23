import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Verifica se está em produção
    const basePath = process.env.NODE_ENV === "production" ? "/alineninkfinancas.github.io" : "";

    // Redireciona para o dashboard com o caminho correto
    router.replace(`${basePath}/dashboard`);
  }, [router]);

  return (
    <div className="text-center">
      <p>Redirecionando para Dashboard...</p>
    </div>
  );
};

export default Home;
