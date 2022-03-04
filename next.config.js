/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    USER: "karelle.tremblay76@ethereal.email",
    PASS: "eG9vgrkCDKEdePrawT",
  },
};

module.exports = nextConfig;
