/* eslint-disable */
const CompressionPlugin = require('compression-webpack-plugin');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    config.experiments = { ...config.experiments, topLevelAwait: true };
    config.plugins.push(new CompressionPlugin());
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_API_URL,
      },
    ],
  },

  compiler: {
    styledComponents: true,
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
