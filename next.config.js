/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    SENDGRID_API_KEY:
      "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",
  },
};

module.exports = nextConfig;
