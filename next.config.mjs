/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['@ant-design', '@ant-design/icons'],
  webpack: (config) => {
    return config;
  },
  // Disable Turbopack by setting the compiler to webpack
  compiler: {
    // No turbopack
  },
  experimental: {
    // Remove turbo option to avoid invalid config warning
  }
}

export default nextConfig;
