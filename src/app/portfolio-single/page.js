import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";

import PortfolioImg1 from "../../../public/images/local_seo_maps_1788193488227.jpg";
import PortfolioImg2 from "../../../public/images/paid_ads_roas_1788191423627.jpg";
import PortfolioImg3 from "../../../public/images/seo_audit_screen_1788193501910.jpg";

export default function PortfolioSingle() {
  return (
    <>
      <Breadcrumbs
        title="Toronto HVAC & Home Services Case Study"
        description="How Metro Valley Digital scaled a GTA contractor from page 4 to #1 on Google 3-Pack with 340% inbound call volume growth."
        menuLink="portfolio-single"
        menuText="Case Study Detail"
      />

      {/* <!-- Portfolio Single --> */}
      <section className="portfolio-single-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="p-single-main">
                <div className="p-single-head" style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
                  <Image
                    src={PortfolioImg1}
                    alt="Local SEO Google 3-Pack Ranking Results"
                    width={730}
                    height={440}
                    style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  />
                </div>
                <div className="p-single-content mt-4">
                  <span className="badge bg-primary-subtle text-primary px-3 py-1 rounded-pill mb-2 fw-bold">Case Study Breakdown</span>
                  <h3 style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a" }}>Scaling Google Maps 3-Pack Dominance Across the Greater Toronto Area</h3>
                  <p style={{ color: "#475569", fontSize: "16px", lineHeight: "1.7" }}>
                    When our client approached Metro Valley Digital, their emergency HVAC repair business was invisible outside a 2km radius. By engineering hyperlocal geo-signals, building localized citation clusters across Ontario directories, and accelerating Google Business Profile customer review workflows, we expanded their ranking radius to dominate the entire GTA.
                  </p>
                  <div className="project-image my-4">
                    <div className="row g-3">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="single-img" style={{ borderRadius: "10px", overflow: "hidden", height: "240px" }}>
                          <Image
                            src={PortfolioImg2}
                            alt="Multi-channel paid media funnel"
                            width={350}
                            height={240}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="single-img last" style={{ borderRadius: "10px", overflow: "hidden", height: "240px" }}>
                          <Image
                            src={PortfolioImg3}
                            alt="Core Web Vitals and technical SEO audit"
                            width={350}
                            height={240}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 style={{ fontSize: "22px", fontWeight: "700", color: "#0f172a", marginTop: "24px" }}>The Results & Commercial Impact</h4>
                  <p style={{ color: "#475569", fontSize: "16px", lineHeight: "1.7" }}>
                    Within 90 days of execution, our client captured #1 positions for high-intent keywords like &quot;emergency furnace repair Toronto&quot; and &quot;commercial AC installation Mississauga&quot;. Inbound qualified phone inquiries jumped from 32/month to 140+/month with an estimated $280,000+ in attributed booked revenue.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="portfolio-sidebar">
                {/* <!-- Single Widget --> */}
                <div className="p-sidebar-widget" style={{ background: "#f8fafc", padding: "24px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                  <div className="project-info">
                    <h4 className="p-widget-title" style={{ fontWeight: "700", borderBottom: "2px solid #28b463", paddingBottom: "8px", marginBottom: "16px" }}>Project Scope</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li style={{ padding: "8px 0", borderBottom: "1px solid #e2e8f0", fontSize: "14px" }}>
                        <b style={{ color: "#0f172a" }}>Client:</b> GTA Climate Solutions
                      </li>
                      <li style={{ padding: "8px 0", borderBottom: "1px solid #e2e8f0", fontSize: "14px" }}>
                        <b style={{ color: "#0f172a" }}>Target Market:</b> Toronto & GTA, Canada
                      </li>
                      <li style={{ padding: "8px 0", borderBottom: "1px solid #e2e8f0", fontSize: "14px" }}>
                        <b style={{ color: "#0f172a" }}>Services:</b> Local SEO, GMB 3-Pack, Paid Search
                      </li>
                      <li style={{ padding: "8px 0", fontSize: "14px" }}>
                        <b style={{ color: "#0f172a" }}>Outcome:</b> +340% Inbound Calls, 6.2x ROI
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Single Widget --> */}
                <div className="p-sidebar-widget mt-4" style={{ background: "linear-gradient(135deg, #28b463 0%, #16a34a 100%)", padding: "24px", borderRadius: "12px", color: "#ffffff" }}>
                  <h4 style={{ color: "#ffffff", fontWeight: "700", marginBottom: "12px" }}>Want Similar Results?</h4>
                  <p style={{ color: "#e2e8f0", fontSize: "14px", lineHeight: "1.6" }}>
                    Get a personalized Local SEO & Paid Ads roadmap for your business from our Toronto & Lahore teams.
                  </p>
                  <Link href="/contact" className="btn btn-light w-100 fw-bold mt-2" style={{ color: "#28b463", padding: "10px" }}>
                    Book Growth Audit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Portfolio Single --> */}
    </>
  );
}
