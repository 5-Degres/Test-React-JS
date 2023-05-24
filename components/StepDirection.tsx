import { execOnce } from "next/dist/shared/lib/utils";
import DirectionRadioGroup from "@/components/DirectionRadioGroup";

const StepDirection = () => {
  return (
    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-full">
        <DirectionRadioGroup />
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Ville de départ
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-5">
        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
          Précisions sur la zone de rendez-vous
        </label>
        <div className="mt-2">
          <textarea
            rows={4}
            name="comment"
            id="comment"
            placeholder="Adresse, quartier..."
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
      </div>
    </div>
  );
};

export default StepDirection;
