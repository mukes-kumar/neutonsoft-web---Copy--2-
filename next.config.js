/** @type {import('next').NextConfig} */
const nextConfig = {
  target: "server", // Required for SSR to work with Firebase Functions
  output: 'export',
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
