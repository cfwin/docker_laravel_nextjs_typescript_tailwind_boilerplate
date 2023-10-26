/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // ....
        API_URL : 'http://host.docker.internal:8080',
    },
}

module.exports = nextConfig
