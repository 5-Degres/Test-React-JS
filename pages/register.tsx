import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";
import LoginHeader from "@/components/LoginHeader";
import Layout from "@/components/Layout";

const RegisterPage = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen justify-center bg-gray-50">
        <div className="flex flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
          <LoginHeader text="Inscription" />

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
              <RegisterForm />
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Vous êtes déjà inscrit ?{" "}
              <Link
                href={"/login"}
                className="ml-1.5 font-semibold leading-6 text-slate-900 hover:text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
