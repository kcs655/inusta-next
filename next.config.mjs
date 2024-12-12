/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a5fqcx85udfygwnd.public.blob.vercel-storage.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "45mb",
    },
  },
};

export default nextConfig;
