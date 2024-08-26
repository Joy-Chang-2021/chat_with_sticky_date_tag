/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath:
    process.env.NODE_ENV === 'production'
      ? 'chat_with_sticky_date_tag'
      : '',
};

export default nextConfig;
