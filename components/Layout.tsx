import { Metadata } from "next";
import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";

export const metadata: Metadata = {
  title:
    "Axalin - Digital Transformation, Managed Services & Expert IT Staffing",
  description:
    "Stop IT bottlenecks. Axalin delivers strategic Digital Transformation, 24/7 Managed Services, and Expert Staffing to cut costs, reduce risk, and secure competitive advantage for mid-tier and Enterprise companies.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
