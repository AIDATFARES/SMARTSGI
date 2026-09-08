import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 240, 320],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: '/blog/how-to-choose-the-best-iptv-service-2026', destination: '/blog/best-iptv-service-buying-guide', permanent: true },
      { source: '/blog/best-iptv-players-2026', destination: '/blog/best-iptv-players', permanent: true },
      { source: '/blog/how-to-watch-nba-games-live-2026', destination: '/blog/watch-nba-games-live-iptv', permanent: true },
      { source: '/blog/iptv-channel-switching-slow', destination: '/blog/iptv-channel-zapping-slow-fix', permanent: true },
      { source: '/blog/iptv-on-apple-tv', destination: '/blog/apple-tv-iptv-setup-guide', permanent: true },
      { source: '/blog/internet-speed-for-iptv', destination: '/blog/iptv-internet-speed-requirements', permanent: true },
      { source: '/blog/iptv-on-firestick', destination: '/blog/firestick-iptv-setup-guide', permanent: true },
      { source: '/blog/best-iptv-setup-for-sports-streaming', destination: '/blog/best-iptv-setup-sports-streaming', permanent: true },
      { source: '/blog/iptv-black-screen-but-audio-works', destination: '/blog/iptv-black-screen-audio-fix', permanent: true },
    ];
  },
};

export default nextConfig;



