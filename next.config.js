/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    USER: "markus.smitham67@ethereal.email",
    PASS: "DhPTWX4UfMHrCnd9JV",
  },
};

module.exports = nextConfig;
