import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: '/dashboard/:path*',
          destination: '/api/proxy/dashboard/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
