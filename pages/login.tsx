import Link from "next/link";
import LoginHeader from "@/components/LoginHeader";
import Layout from "@/components/Layout";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen justify-center bg-gray-50">
        <div className="flex flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 font-mono relative">
          <LoginHeader text="Connexion" />
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <LoginForm />
            <p className="mt-10 text-center text-sm text-gray-500 font-sans">
              Vous n&apos;avez pas encore de compte ?{" "}
              <Link
                href={"/register"}
                className="ml-1.5 font-semibold leading-6 text-slate-900 hover:text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
              >
                S&apos;inscrire
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
