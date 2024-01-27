/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "s3-us-west-2.amazonaws.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
