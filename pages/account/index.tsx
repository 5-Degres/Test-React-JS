import Navbar from "@/components/Navbar";
import LayoutHome from "@/components/LayoutHome";

const AccountPage = () => {
  return (
    <LayoutHome>
      <Navbar title="Mes annonces" withButtonPost />
    </LayoutHome>
  );
};

export default AccountPage;
