// Este archivo se ha eliminado porque ya existe un sitemap.xml estático en la carpeta public
// que cumple la misma función. Mantener ambos podría causar conflictos durante la compilación.

export const dynamic = 'force-dynamic';

export async function GET() {
  return new Response(
    "This route is deprecated. Please use the static sitemap.xml file in the public directory.",
    {
      status: 301,
      headers: {
        'Location': '/sitemap.xml',
        'Content-Type': 'text/plain',
      },
    }
  );
}
