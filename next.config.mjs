/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use static export for production builds (next build -> out/)
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  images: { unoptimized: true },
  trailingSlash: false,
};
export default nextConfig;
