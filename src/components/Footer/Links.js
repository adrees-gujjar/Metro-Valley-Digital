import Link from "next/link";

export default function Links() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        {/* <!-- Quick Links --> */}
        <div className="single-widget f-links">
          <h3 className="widget-title text-white fw-bold">Growth Solutions</h3>
          <ul className="list-unstyled">
            <li>
              <Link href="/services">
                <i className="fa fa-angle-double-right"></i>Local SEO & GMB
              </Link>
            </li>
            <li>
              <Link href="/services">
                <i className="fa fa-angle-double-right"></i>Comprehensive SEO
              </Link>
            </li>
            <li>
              <Link href="/services">
                <i className="fa fa-angle-double-right"></i>Paid Ads (Meta & Google)
              </Link>
            </li>
            <li>
              <Link href="/services">
                <i className="fa fa-angle-double-right"></i>Custom Web Development
              </Link>
            </li>
            <li>
              <Link href="/services">
                <i className="fa fa-angle-double-right"></i>AI Search Optimization (GEO)
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <i className="fa fa-angle-double-right"></i>Free Strategy Audit
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
