import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const StepContact = () => {
  const [email, setEmail] = useState(true);
  const [phone, setPhone] = useState(true);

  return (
    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="col-span-full">
        <div className="text-base font-semibold leading-6 text-gray-900">
          Les utilisateurs peuvent me contacter par :
        </div>
      </div>

      <div className="sm:col-span-4">
        <fieldset>
          <legend className="sr-only">Contact</legend>
          <div className="space-y-5">
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="phone"
                  aria-describedby="phone"
                  name="phone"
                  type="checkbox"
                  checked={phone}
                  onChange={() => setPhone(!phone)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="phone" className="font-medium text-gray-900">
                  Téléphone
                </label>
                <p className="text-gray-500">
                  Mon numéro est le <span className="font-medium">0148765432</span>
                </p>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="email"
                  aria-describedby="email"
                  name="email"
                  type="checkbox"
                  checked={email}
                  onChange={() => setEmail(!email)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="email" className="font-medium text-gray-900">
                  Email
                </label>
                <p className="text-gray-500">
                  Mon email de contact est <span className="font-medium">contact@5degres.com</span>
                </p>
              </div>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="col-span-full">
        <div className="rounded-md bg-blue-50 p-3">
          <div className="flex">
            <div className="flex-shrink-0">
              <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
            </div>
            <div className="ml-3 flex-1 md:flex md:justify-between">
              <p className="text-sm text-blue-700">
                Vous pouvez mettre à jour vos coordonnées à tout moment dans votre profil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepContact;
