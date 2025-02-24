/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: true,
  // Advanced webpack optimizations for bundle splitting and performance
  webpack: (config) => {
    config.optimization.splitChunks = {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 1
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'async',
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
    return config
  }
};

module.exports = nextConfig;
