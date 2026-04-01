import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#34A853",
          borderRadius: "7px",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* Stem */}
          <path
            d="M12 22V12"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Left leaf */}
          <path
            d="M12 12C12 12 4 12 4 6C10 6 12 12 12 12Z"
            fill="white"
          />
          {/* Right leaf */}
          <path
            d="M12 8C12 8 20 8 20 2C14 2 12 8 12 8Z"
            fill="white"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
