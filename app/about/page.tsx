import CTA from "@/components/CTA";
import Difference from "@/components/about/Difference";
import HeroSection from "@/components/about/HeroSection";
import OurStory from "@/components/about/OurStory";
import Philosophy from "@/components/about/Philosophy";
import WhoWeServe from "@/components/about/WhoWeServe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Axalin: Our Vision, Expertise, and Leadership | Custom IT Solutions",
  description:
    "Axalin is a trusted IT solutions partner founded on 50+ years of leadership experience. Learn about our commitment to custom solutions, a dedicated account manager for every client, and our integrated People, Process & Technology philosophy.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title:
      "About Axalin: Our Vision, Expertise, and Leadership | Custom IT Solutions",
    description:
      "Axalin is a trusted IT solutions partner founded on 50+ years of leadership experience. Learn about our commitment to custom solutions, a dedicated account manager for every client, and our integrated People, Process & Technology philosophy.",
    url: "/about",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "About Axalin: Our Vision, Expertise, and Leadership | Custom IT Solutions",
      },
    ],
  },
};

export default function Contact() {
  return (
    <>
      <HeroSection />
      <OurStory />
      <Philosophy />
      <Difference />
      <WhoWeServe />
      <CTA />
    </>
  );
}
