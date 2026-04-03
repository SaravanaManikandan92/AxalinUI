import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Layout from "@/components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axalin - Empowering Digital Transformation",
  description:
    "Axalin provides cloud solutions, enterprise apps, cybersecurity & expert IT staffing — all under one roof. Transform your IT infrastructure with Axalin's expertise.",
  icons: {
    icon: "/assets/logo_brand.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema markup for site-navigation
  const schemaMarkup = {
    "@context": "http://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Our Comprehensive Services",
        description:
          "We deliver integrated technology solutions tailored to your specific business needs, helping you achieve digital transformation and competitive advantage.",
        url: "https://axalingroup.com/#services",
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Why Choose Axalin?",
        description:
          "Our mission is to help organizations leverage technology to achieve their business objectives and stay ahead in today's rapidly evolving digital landscape.",
        url: "https://axalingroup.com/#about",
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Contact Us",
        description:
          "Have questions or ready to start your project? Reach out to our team for personalized assistance.",
        url: "https://axalingroup.com/#contact",
      },
    ],
  };

  // Schema markup for organization information
  const organizationSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Axalin - Empowering Digital Transformation",
    url: "https://axalingroup.com/",
    logo: "https://axalingroup.com/assets/logo_brand.svg",
    description:
      "Axalin provides cloud solutions, enterprise apps, cybersecurity & expert IT staffing — all under one roof. Transform your IT infrastructure with Axalin's expertise.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@axalingroup.com",
    },
    sameAs: [
      "https://www.instagram.com/axalingroup",
      "https://www.linkedin.com/company/axalin-consultancy",
      // "https://www.facebook.com/",
      "https://x.com/AxalinGroup",
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KRHKZBVR');
          `}
        </Script>
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchemaMarkup),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KRHKZBVR"
            title="Google Tag Manager (noscript)"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
