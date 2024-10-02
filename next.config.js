/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'lh3.googleusercontent.com',
              port: '',
              pathname: '/a/**',
            },
          ],
    },
    env:{
      API_URL:process.env.API_URL
    }
}

module.exports = nextConfig
