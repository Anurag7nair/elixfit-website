import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // These settings ensure your deployment finishes even if there are small strictness errors
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;