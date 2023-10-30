/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/sn0rii/blogposts/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
