import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get title from query params or use default
    const title = searchParams.get('title') || 'THREE MANGOS';
    const description = searchParams.get('description') || 'Web Development Agency';
    
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            fontSize: 60,
            color: 'white',
            background: 'linear-gradient(to right, #7c3aed, #4f46e5)',
            width: '100%',
            height: '100%',
            padding: '50px 200px',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 120, fontWeight: 'bold', marginRight: 20 }}>🥭🥭🥭</div>
          </div>
          <div style={{ fontSize: 70, fontWeight: 'bold', marginBottom: 20 }}>
            {title}
          </div>
          <div style={{ fontSize: 40, opacity: 0.8 }}>
            {description}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    console.log(`Error generating OG image: ${e}`);
    return new Response('Failed to generate image', { status: 500 });
  }
}
