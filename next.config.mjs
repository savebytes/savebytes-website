/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // fully static site: deploy the `out/` folder to any static host
  images: { unoptimized: true },
  trailingSlash: false,
};
export default nextConfig;
