import Link from "next/link";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { FormEvent, useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const signInWithEmail = async () => {
    console.log(email, password);
    return void 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await signInWithEmail();
  };

  return (
    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Adresse email
          </label>
          <div className="mt-2">
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-800 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Mot de passe
          </label>
          <div className="mt-2">
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-800 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
          >
            {isLoading ? "Connexion..." : "Se connecter"}
          </button>
        </div>
      </form>
      <div className="mt-3">
        <Link href={"/reset-password"} className="mt-4 text-sm text-gray-500 hover:text-slate-800 ">
          Mot de passe oublié ?
        </Link>
      </div>
      {isError && (
        <div className="rounded-md bg-red-50 p-4 mt-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">L&apos;identifiant ou le mot de passe est incorrect</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
