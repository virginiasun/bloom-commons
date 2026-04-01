import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FAFAF8 0%, #F0FFF4 50%, #FFF5EB 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <span style={{ fontSize: "64px" }}>🌱</span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#2D3748",
            }}
          >
            Bloom Commons
          </span>
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#4A5568",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Teachers teach. Bloom Commons handles the rest.
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: "20px",
            color: "#34A853",
            fontWeight: 600,
          }}
        >
          AI-powered daycare management
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
