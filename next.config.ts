import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn20.pamono.com',
      },
      {
        protocol: 'https',
        hostname: 'timber-foundry.com',
      },
      {
        protocol: 'https',
        hostname: 'www.mimconcept.com',
      },
      {
        protocol: 'https',
        hostname: 'definekw.com',
      },
      {
        protocol: 'https',
        hostname: 'image.lampsplus.com',
      },
      {
        protocol: 'https',
        hostname: 'ashleyfurniture.scene7.com',
      },
      {
        protocol: 'https',
        hostname: 'www.westbranchfurnitureoutlet.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
    ],
  },

};

export default nextConfig;
