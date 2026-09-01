import Image from "next/image";
import Link from "next/link";
import AuthorImg from "../../../public/images/team_toronto_lead_1788194135436.jpg";

export default function Author() {
  return (
    <>
      <div className="post-author-box d-flex align-items-center gap-4 p-4 rounded-3" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
        <div className="author-img" style={{ width: "90px", height: "90px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "3px solid #0d6efd" }}>
          <Image src={AuthorImg} alt="Tariq Vance" width={90} height={90} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="author-content">
          <h4 style={{ fontWeight: "700", marginBottom: "6px" }}>Tariq Vance</h4>
          <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
            Managing Director & Growth Strategist at Metro Valley Digital. Leading commercial expansion across Toronto, Canada and optimizing high-intent local search engines and performance media channels.
          </p>
        </div>
      </div>
    </>
  );
}
