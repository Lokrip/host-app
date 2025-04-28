import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    async rewrites () {
      return [
        {
            source: "/auth/:path*",
            destination: "http://localhost:3002/auth/:path*"
        }
      ]
    }
};

export default nextConfig;
