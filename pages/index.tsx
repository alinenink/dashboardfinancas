import { useEffect } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";
const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard");
  }, [router]);

  return (
    <div className="text-center">
      <p>Redirecionando para Dashboard...</p>
    </div>
  );
};

export default Home;