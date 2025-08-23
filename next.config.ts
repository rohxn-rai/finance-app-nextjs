import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", process.env.REMOTE_TESTING!],
    },
  },
};

export default nextConfig;
