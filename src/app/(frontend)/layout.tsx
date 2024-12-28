import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { MainLayoutProps } from "@/types";
import { domAnimation, LazyMotion } from "motion/react";

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative">
        <Header />
        <div className="w-full max-w-[1200px] mx-auto md:py-0 md:px-11 py-0 px-5">
          {children}
        </div>
        <Footer />
      </div>
    </LazyMotion>
  );
}
