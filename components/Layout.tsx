import { ReactElement } from "react";
import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  display: "swap",
  subsets: ["latin"],
});

const Layout = ({ children }: { children: ReactElement }) => {
  return <div className={`${robotoSlab.variable}`}>{children}</div>;
};

export default Layout;
