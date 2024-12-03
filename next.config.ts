import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['plantsworld.ae' , 'cdn.pixabay.com', 'fakestoreapi.com'],
  }
};

export default nextConfig;
