/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ["error", "warn"]
    },
    reactRemoveProperties: true // remove test related JSX properties (data-testid vs.) for production.
  }
}

module.exports = nextConfig
