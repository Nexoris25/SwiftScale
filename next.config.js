/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
          },
        ],
      },
      webpack(config, { isServer }) {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // This option ensures a named export 'ReactComponent' is created
            // with a default export alias, which is good practice.
            // You can also use `namedExport: 'ReactComponent'` if you prefer.
            svgo: false, // Optional, but can prevent issues with some SVGs
          },
        },
      ],
    });
      return config;
    },
}

module.exports = nextConfig
