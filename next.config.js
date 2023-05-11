/** @type {import('next').NextConfig} */
const UnoCSS = require('@unocss/webpack').default;
//import UnoCSS from '@unocss/webpack';
//const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.cache = false;
    config.plugins.push(UnoCSS());
    config.optimization.realContentHash = true;
    return config;
  },
  output: 'standalone', // This is needed to work with docker
};

module.exports = nextConfig;
