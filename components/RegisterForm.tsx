import PhoneInput from "react-phone-input-2";
import fr from "react-phone-input-2/lang/fr.json";
import { FormEvent, useState } from "react";
import classNames from "classnames";
import { XCircleIcon } from "@heroicons/react/20/solid";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [cgvChecked, setCgvChecked] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!firstName || !lastName || !email || !password || !phone) {
      setLoading(false);
      setError(
        `Veuillez remplir tous les champs (${!firstName ? "Prénom" : ""} ${!lastName ? "Nom" : ""} ${
          !email ? "Email" : ""
        } ${!password ? "Mot de passe" : ""} ${!phone ? "Téléphone" : ""})`
      );
      return;
    }

    if (password.length < 8) {
      setLoading(false);
      setError("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setLoading(false);
      setError("L'email est invalide");
      return;
    }

    if (!/^\d+$/.test(phone)) {
      setLoading(false);
      setError("Le numéro de téléphone est invalide");
      return;
    }

    return void 0;
  };

  const handleChange = (input: string, value: string) => {
    setError(null);
    setLoading(false);

    if (input === "firstName") setFirstName(value);
    if (input === "lastName") setLastName(value);
    if (input === "email") setEmail(value);
    if (input === "password") setPassword(value);
    if (input === "phone") setPhone(value);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Adresse email*
        </label>
        <div className="mt-2">
          <input
            onChange={(e) => handleChange("email", e.target.value)}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-800 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
          Prénom*
        </label>
        <div className="mt-2">
          <input
            onChange={(e) => handleChange("firstName", e.target.value)}
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-800 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
          Nom*
        </label>
        <div className="mt-2">
          <input
            onChange={(e) => handleChange("lastName", e.target.value)}
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-800 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
          Mot de passe*
        </label>
        <div className="mt-2">
          <input
            onChange={(e) => handleChange("password", e.target.value)}
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-800 sm:text-sm sm:leading-6"
          />
        </div>
        <p className="mt-2 text-xs text-gray-500" id="email-description">
          Minimum 8 caractères
        </p>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
          Téléphone*
        </label>
        <div className="mt-2">
          <PhoneInput
            specialLabel=""
            country={"fr"}
            onChange={(value) => handleChange("phone", value)}
            preferredCountries={["fr"]}
            localization={fr}
          />
        </div>
      </div>
      <div className="my-2 sm:col-span-2 text-sm">
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              onChange={(e) => setCgvChecked(e.target.checked)}
              id="cgv"
              name="cgv"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-slate-800 focus:ring-slate-800"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="cgv" className="font-medium text-gray-900">
              J&apos;accepte les CGU et la charte de bonne conduite
            </label>
            <p className="text-gray-500 text-sm mt-2">
              En m&apos;inscrivant, je m’engage à avoir un comportement respectueux envers les autres participants,
              l’équipe et les tiers. Je m’engage à éviter tout comportement agressif, grossier, violent, moqueur envers
              les autres, et plus généralement tout comportement de nature à troubler le bon déroulement du trajet.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2 sm:col-span-2">
        <button
          disabled={!!error || !cgvChecked}
          type="submit"
          className={classNames(
            error || !cgvChecked ? "bg-slate-300 cursor-not-allowed" : "bg-slate-900 hover:bg-slate-700",
            "flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
          )}
        >
          {isLoading ? "Enregistrement..." : "Créer un compte"}
        </button>
      </div>
      {error && (
        <div className="sm:col-span-2 rounded-md bg-red-50 p-4 mt-2">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default RegisterForm;
