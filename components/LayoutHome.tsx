import Header from "@/components/Header";
import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

const LayoutHome = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-slate-50">{children}</main>
        <Footer />
      </div>
    </Layout>
  );
};

export default LayoutHome;
