/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    // Add support for importing SVGs as React components
    config.module.rules.push({
      test: /\.svg$/, // Match .svg files
      issuer: /\.[jt]sx?$/, // Only apply to JS/TS files
      use: ['@svgr/webpack'], // Use SVGR to transform SVG into React component
    });

    return config;
  },
};

export default nextConfig;
