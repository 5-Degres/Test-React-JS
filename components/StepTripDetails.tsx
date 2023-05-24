import SelectSeats from "@/components/SelectSeats";
import { DayPicker } from "react-day-picker";
import { fr } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import { useState } from "react";

const StepTripDetails = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();

  return (
    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-6">
      <div className="sm:col-span-5">
        <div className="text-base font-semibold leading-6 text-gray-900 pb-2">Quand ferez-vous ce trajet ?</div>
        <DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate} locale={fr} />
      </div>
      <div className="sm:col-span-4">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Créneau de rendez-vous pour le départ
        </label>
        <div className="mt-2 text-sm">
          <label htmlFor="mintime">A partir de</label>
          <input
            type="time"
            id="mintime"
            name="mintime"
            className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 my-2 mx-4 cursor-pointer"
          />
          <label htmlFor="maxtime">jusqu&apos;à</label>
          <input
            type="time"
            id="maxtime"
            name="maxtime"
            className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 my-2 mx-4 cursor-pointer"
          />
        </div>
      </div>
      <div className="sm:col-start-1 sm:col-span-3">
        <SelectSeats />
      </div>
    </div>
  );
};

export default StepTripDetails;
