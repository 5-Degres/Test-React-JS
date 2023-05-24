import LayoutHome from "@/components/LayoutHome";
import Breadcrumb from "@/components/Breadcrumb";
import PostForm from "@/components/PostForm";
import { useState } from "react";

const UpdatePostPage = () => {
  const breadcrumbs = [
    { name: "Mes annonces", href: "/account", current: false },
    { name: "Modifier un trajet", href: "#", current: true },
  ];

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <LayoutHome>
      <Breadcrumb pages={breadcrumbs} />
      <section className="space-y-16 py-12 bg-slate-50">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <PostForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
          </div>
        </div>
      </section>
    </LayoutHome>
  );
};

export default UpdatePostPage;
