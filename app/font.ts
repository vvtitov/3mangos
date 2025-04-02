import { Inter, Montserrat } from 'next/font/google';

// Configuración de fuente principal con precarga optimizada
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Mejora CLS (Cumulative Layout Shift)
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

// Configuración de fuente secundaria para títulos
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', 'sans-serif'],
});
