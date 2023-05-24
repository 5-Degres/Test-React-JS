import StepDirection from "@/components/StepDirection";
import StepTripDetails from "@/components/StepTripDetails";
import StepContact from "@/components/StepContact";
import { Dispatch, SetStateAction } from "react";

const PostForm = ({
  currentStep,
  setCurrentStep,
}: {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div className="px-4 py-6 sm:p-8">
        {currentStep === 1 && <StepDirection />}
        {currentStep === 2 && <StepTripDetails />}
        {currentStep === 3 && <StepContact />}
      </div>
      <div className="flex items-center gap-x-4 border-t border-gray-900/10 px-4 py-4 sm:px-8">
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setCurrentStep(currentStep + 1);
          }}
          className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {currentStep === 3 ? "Publier mon annonce" : "Étape suivante"}
        </button>
        {currentStep === 3 && (
          <button
            type="button"
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Publier plus tard
          </button>
        )}
      </div>
    </form>
  );
};

export default PostForm;
