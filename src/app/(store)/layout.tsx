import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <div>
      <Header />
      <section className="min-h-screen">{props.children}</section>
      <Footer />
    </div>
  );
};

export default layout;
