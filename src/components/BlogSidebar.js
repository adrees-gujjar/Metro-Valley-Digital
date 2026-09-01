import Image from "next/image";
import Link from "next/link";

import FeedImg1 from "../../public/images/local_seo_maps_1788193488227.jpg";
import FeedImg2 from "../../public/images/paid_ads_roas_1788191423627.jpg";
import FeedImg3 from "../../public/images/ai_code_agents_1788193536610.jpg";

export default function BlogSidebar() {
  return (
    <>
      {/* <!-- Blog Sidebar --> */}
      <div className="blog-sidebar">
        <div className="widget widget-search">
          <h4 className="widget-title">Search Articles</h4>
          <form action="/blog">
            <input
              type="search"
              placeholder="Search growth topics..."
              required
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        {/* <!-- Popular Post Widget --> */}
        <div className="widget popular-feeds">
          <h4 className="widget-title">Top Growth Guides</h4>
          <div className="popular-feed-loop">
            {/* <!-- Single Popular --> */}
            <div className="single-popular-feed d-flex align-items-center gap-3 mb-3">
              <div className="feed-img" style={{ width: "75px", height: "75px", overflow: "hidden", borderRadius: "8px", flexShrink: 0 }}>
                <Image src={FeedImg1} alt="Local SEO Guide" width={75} height={75} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="feed-desc">
                <h6>
                  <Link href="/blog-single">
                    How We Rank #1 on Google 3-Pack in Competitive Metro Areas
                  </Link>
                </h6>
                <span className="time" style={{ fontSize: "12px", color: "#64748b" }}>
                  <i className="fa fa-calendar me-1"></i> Oct 12, 2026
                </span>
              </div>
            </div>
            {/* <!-- Single Popular --> */}
            <div className="single-popular-feed d-flex align-items-center gap-3 mb-3">
              <div className="feed-img" style={{ width: "75px", height: "75px", overflow: "hidden", borderRadius: "8px", flexShrink: 0 }}>
                <Image src={FeedImg2} alt="Paid Ads Strategy" width={75} height={75} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="feed-desc">
                <h6>
                  <Link href="/blog-single">
                    The 2026 Meta & TikTok Ad Creative Framework for 5x+ ROAS
                  </Link>
                </h6>
                <span className="time" style={{ fontSize: "12px", color: "#64748b" }}>
                  <i className="fa fa-calendar me-1"></i> Oct 08, 2026
                </span>
              </div>
            </div>

            {/* <!-- Single Popular --> */}
            <div className="single-popular-feed d-flex align-items-center gap-3">
              <div className="feed-img" style={{ width: "75px", height: "75px", overflow: "hidden", borderRadius: "8px", flexShrink: 0 }}>
                <Image src={FeedImg3} alt="Next.js Engineering" width={75} height={75} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="feed-desc">
                <h6>
                  <Link href="/blog-single">
                    Integrating 24/7 AI Chat Agents to Double Inbound Velocity
                  </Link>
                </h6>
                <span className="time" style={{ fontSize: "12px", color: "#64748b" }}>
                  <i className="fa fa-calendar me-1"></i> Sep 15, 2026
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Categories Widget --> */}
        <div className="widget categories-widget">
          <h4 className="widget-title">Categories</h4>
          <ul>
            <li>
              <Link href="/blog">
                Local SEO & GMB<span>14</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Paid Social & Search<span>19</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Next.js & Software<span>11</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                AI Automation & Bots<span>8</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Commercial Case Studies<span>12</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- Banner Ad Widget --> */}
        <div className="widget banner-ad-widget" style={{ background: "linear-gradient(135deg, #0d6efd 0%, #0045a8 100%)", borderRadius: "12px", padding: "28px 20px", color: "#ffffff", textAlign: "center" }}>
          <span className="badge bg-white text-primary px-3 py-1 rounded-pill fw-bold mb-3" style={{ fontSize: "11px" }}>FREE GROWTH AUDIT</span>
          <h4 style={{ color: "#ffffff", fontWeight: "800", fontSize: "20px", marginBottom: "12px" }}>Scale Your Inbound Revenue</h4>
          <p style={{ color: "#e2e8f0", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
            Get a tailored Google Maps & Meta Ads competitor blueprint from our Toronto & Lahore teams.
          </p>
          <Link href="/contact" className="btn btn-light w-100 fw-bold py-2" style={{ borderRadius: "8px", color: "#0d6efd" }}>
            Book 30-Min Audit
          </Link>
        </div>
      </div>
    </>
  );
}
