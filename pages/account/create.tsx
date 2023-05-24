import { useState } from "react";
import LayoutHome from "@/components/LayoutHome";
import Breadcrumb from "@/components/Breadcrumb";
import PostForm from "@/components/PostForm";
import PostSteps from "@/components/PostSteps";

const CreatePostPage = () => {
  const breadcrumbs = [
    { name: "Mes annonces", href: "/account", current: false },
    { name: "Proposer un nouveau trajet", href: "#", current: true },
  ];

  const steps = [
    { id: 1, name: "Destination", href: "#" },
    { id: 2, name: "Détails du trajet", href: "#" },
    { id: 3, name: "Options de contact", href: "#" },
  ];

  const [currentStep, setCurrentStep] = useState(1);

  const type = "create";

  return (
    <LayoutHome>
      <Breadcrumb pages={breadcrumbs} />
      <section className="space-y-16 py-12 bg-slate-50">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <PostSteps steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />

            <div className="space-y-10 divide-y divide-gray-900/10">
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                <div className="px-4">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    {type === "create" ? "Ajouter une annonce" : "Modifier une annonce"}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Nous aurons besoin de quelques indications sur votre trajet habituel qui pourraient intéresser de
                    futurs covoitureurs.
                  </p>
                </div>

                <PostForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutHome>
  );
};

export default CreatePostPage;
