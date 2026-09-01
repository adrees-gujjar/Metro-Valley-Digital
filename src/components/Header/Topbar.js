import Link from "next/link";

export default function Topbar() {
  return (
    <>
      {/* <!-- Topbar --> */}
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-12">
              <div className="topbar-address">
                <ul className="d-flex flex-wrap align-items-center gap-3">
                  <li>
                    <a href="tel:+16045403999" title="Canada Office">
                      <i className="fa fa-phone" style={{ color: "#0d6efd" }}></i>
                      <span>🇨🇦 CA:</span> +1 (604) 540-3999
                    </a>
                  </li>
                  <li>
                    <a href="tel:+923482991899" title="Pakistan Office">
                      <i className="fa fa-phone" style={{ color: "#198754" }}></i>
                      <span>🇵🇰 PK:</span> +92 348 2991899
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@metrovalleydigital.com">
                      <i className="fa fa-envelope" style={{ color: "#0d6efd" }}></i>
                      <span>Email:</span> hello@metrovalleydigital.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-12 d-none d-lg-block text-end">
              <div className="topbar-badge" style={{ fontSize: "13px", color: "#e2e8f0" }}>
                <span className="badge bg-primary me-2" style={{ fontSize: "11px", padding: "4px 8px" }}>
                  <i className="fa fa-circle text-success me-1" style={{ fontSize: "8px" }}></i> Accepting Clients
                </span>
                <span>Toronto • Lahore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Topbar --> */}
    </>
  );
}
