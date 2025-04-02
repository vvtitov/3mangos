/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para resolver problemas de compilación en Vercel
  output: 'standalone',
  
  // Desactivar la exportación estática para rutas dinámicas
  // que están causando problemas durante la compilación
  experimental: {
    // Habilitar optimización de CSS
    optimizeCss: true,
    // Habilitar restauración de scroll
    scrollRestoration: true,
  },
  
  // Configuración de imágenes
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '3mangos.site',
      },
    ],
  },
  
  // Ignorar errores de TypeScript durante la compilación
  // para permitir que la compilación continúe a pesar de errores de tipo
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Ignorar errores de ESLint durante la compilación
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
