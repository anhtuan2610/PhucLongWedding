import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // 👉 không tối ưu, chấp nhận mọi src
  },
};

export default nextConfig;
