import ContactSection from "@/components/contact/ContactSection";
import FAQs from "@/components/contact/FAQs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Axalin",
  description:
    "Whether you're curious about our services, have a technical question, or ready to start a project, our team is here to help.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Axalin",
    description:
      "Whether you're curious about our services, have a technical question, or ready to start a project, our team is here to help.",
    url: "/contact",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Contact | Axalin",
      },
    ],
  },
};

export default function Contact() {
  return (
    <>
      <ContactSection />
      <FAQs />
    </>
  );
}
