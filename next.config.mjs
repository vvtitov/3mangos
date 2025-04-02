/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones para mejorar el SEO
  poweredByHeader: false, // Elimina el header X-Powered-By para seguridad
  compress: true, // Compresión Gzip para mejorar la velocidad
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'], // Formatos modernos de imágenes
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permitir imágenes de cualquier dominio
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Tamaños de dispositivos para optimización
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // Tamaños de imágenes para optimización
  },
  // Configuración para mejorar el rendimiento
  experimental: {
    optimizeCss: true, // Optimiza CSS
    scrollRestoration: true, // Restaura la posición de desplazamiento
  },
  // Configuración de headers para mejorar seguridad y SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  // Redirecciones para mejorar SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
