import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
    // Specify a custom path here
    './src/i18n.tsx'
  );
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // env: {
  //   ...customEnv,
  // },
};
 
export default withNextIntl(nextConfig);