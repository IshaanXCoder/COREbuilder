/** @type {import('next').NextConfig} */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Enable WASM for both server and client
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };

    // Ensure resolc.wasm is available where @parity/resolc expects it on the server
    if (isServer) {
      config.plugins = config.plugins || [];
      config.plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: path.join(
                __dirname,
                'node_modules/@parity/resolc/dist/resolc/resolc.wasm'
              ),
              to: path.join(
                __dirname,
                '.next/server/vendor-chunks/resolc.wasm'
              ),
            },
          ],
        })
      );
    }

    return config;
  },
  // Ensure WASM files are served properly
  async headers() {
    return [
      {
        source: '/(.*).wasm',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/wasm',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;