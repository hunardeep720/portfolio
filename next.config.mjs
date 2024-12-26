/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "thebrdge.com",
        },
        {
            protocol: "https",
            hostname: "studentscoops.vercel.app",
          },
      ],
    },
    // other Next.js config options can be added here
  };

export default nextConfig;
