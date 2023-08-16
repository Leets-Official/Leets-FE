const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
