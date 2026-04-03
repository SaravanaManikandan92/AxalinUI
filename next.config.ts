import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        // This allows loading Blog images from the DigitalOcean Spaces CDN
        protocol: "https",
        hostname: "hefanex.blr1.cdn.digitaloceanspaces.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
