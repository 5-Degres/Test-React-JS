import LayoutHome from "@/components/LayoutHome";
import CguContent from "@/components/CguContent";
import Breadcrumb from "@/components/Breadcrumb";

const CguPage = () => {
  const breadcrumbs = [{ name: "Conditions générales d'utilisation", href: "#", current: true }];

  return (
    <LayoutHome>
      <Breadcrumb pages={breadcrumbs} />
      <section className="bg-gray-50 px-6 py-16 lg:px-8">
        <CguContent />
      </section>
    </LayoutHome>
  );
};

export default CguPage;
