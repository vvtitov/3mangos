import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ['en', 'es', 'ar'], // Asegúrate de incluir todos los idiomas que estás utilizando
    defaultLocale: 'es',
  },
};

export default nextConfig;
