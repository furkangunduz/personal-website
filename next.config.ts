import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.codewars.com",
        pathname: "/users/**/badges/**",
      },
    ],
  },
};

export default nextConfig;
