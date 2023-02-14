const path = require('path')

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://ec2-13-233-133-180.ap-south-1.compute.amazonaws.com/:path*'
      }
    ]
  },

  trailingSlash: true,
  reactStrictMode: false,
  experimental: {
    esmExternals: false,
    jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  }
}
