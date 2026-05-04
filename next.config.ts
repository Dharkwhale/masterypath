import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next.js doesn't get confused by the
  // parent-level package-lock.json sitting one level up.
  outputFileTracingRoot: path.join(__dirname),
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "localhost:3001"],
    },
  },
};

export default nextConfig;
