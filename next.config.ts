import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enables static HTML export
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: false,  // Disable trailing slashes
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://192.168.1.68:3000",
  ],
};

export default nextConfig;
