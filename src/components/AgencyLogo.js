import Link from "next/link";

export default function AgencyLogo({ isLight = false, light = false, className = "" }) {
  const activeLight = isLight || light;
  return (
    <Link href="/" className={`d-inline-flex align-items-center text-decoration-none ${className}`} style={{ gap: "10px" }}>
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "10px",
          background: "linear-gradient(135deg, #0d6efd 0%, #00d2ff 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 14px rgba(13, 110, 253, 0.35)",
          color: "#ffffff",
          fontWeight: "800",
          fontSize: "18px",
          letterSpacing: "-0.5px",
          flexShrink: 0,
        }}
      >
        <span style={{ transform: "skew(-4deg)" }}>MV</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.15" }}>
        <span
          style={{
            fontSize: "20px",
            fontWeight: "800",
            letterSpacing: "-0.5px",
            color: activeLight ? "#ffffff" : "#111827",
            fontFamily: "inherit",
          }}
        >
          Metro Valley
        </span>
        <span
          style={{
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#0d6efd",
          }}
        >
          Digital Agency
        </span>
      </div>
    </Link>
  );
}
