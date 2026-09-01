import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SingleBlog from "@/components/SingleBlog";
import { BreadcrumbSchema } from "@/components/SeoSchemas";

import BlogImg1 from "../../../public/images/local_seo_maps_1788193488227.jpg";
import BlogImg2 from "../../../public/images/paid_ads_roas_1788191423627.jpg";
import BlogImg3 from "../../../public/images/ai_code_agents_1788193536610.jpg";
import BlogImg4 from "../../../public/images/seo_audit_screen_1788193501910.jpg";
import BlogImg5 from "../../../public/images/smm_video_growth_1788193518995.jpg";
import BlogImg6 from "../../../public/images/local_seo_growth_1788191403673.jpg";

import AdminImg1 from "../../../public/images/team_toronto_lead_1788194135436.jpg";
import AdminImg2 from "../../../public/images/team_paid_media_lead_1788194149805.jpg";
import AdminImg3 from "../../../public/images/team_ai_architect_1788194166603.jpg";
import AdminImg4 from "../../../public/images/team_growth_strategist_1788194183743.jpg";

export const metadata = {
  title: "SEO & Growth Marketing Insights | Metro Valley Blog",
  description:
    "Expert tactical playbooks on Local SEO, Google Maps 3-Pack rankings, performance PPC ads, Next.js web development, and conversational AI automation.",
  alternates: {
    canonical: "https://metrovalleydigital.com/blog",
  },
  openGraph: {
    title: "SEO & Growth Marketing Insights | Metro Valley Blog",
    description:
      "Expert tactical playbooks on Local SEO, Google Maps 3-Pack rankings, performance PPC ads, Next.js web development, and conversational AI automation.",
    url: "https://metrovalleydigital.com/blog",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://metrovalleydigital.com/images/local_seo_maps_1788193488227.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital Blog Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & Growth Marketing Insights | Metro Valley Blog",
    description:
      "Expert tactical playbooks on Local SEO, Google Maps 3-Pack rankings, performance PPC ads, Next.js web development, and conversational AI automation.",
    images: ["https://metrovalleydigital.com/images/local_seo_maps_1788193488227.jpg"],
  },
};

export default function blog() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Blog", url: "/blog" }]} />
      <Breadcrumbs
        title="Growth & Engineering Insights"
        description="Tactical guides, case studies, and engineering breakdowns on Local SEO, Google 3-Pack rankings, high-ROAS paid ads, and Next.js software architecture."
        menuLink="blog"
        menuText="Blog"
      />

      {/* <!-- Blog Archive --> */}
      <section id="blogs" className="blog-area archive">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <SingleBlog
                image={BlogImg1}
                date="Oct 12"
                title="How We Rank #1 on Google 3-Pack in Competitive Metro Areas"
                adminImg={AdminImg1}
                adminTitle="Tariq Vance"
                comments="18 comments"
                reviews="4.9"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <SingleBlog
                image={BlogImg2}
                date="Oct 08"
                title="The 2026 Meta & TikTok Ad Creative Framework for 5x+ ROAS"
                adminImg={AdminImg2}
                adminTitle="Hamza Malik"
                comments="24 comments"
                reviews="5.0"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <SingleBlog
                image={BlogImg3}
                date="Sep 29"
                title="Why Next.js App Router Outranks Legacy CMS in Core Web Vitals"
                adminImg={AdminImg3}
                adminTitle="Zayn Alex"
                comments="31 comments"
                reviews="4.8"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <SingleBlog
                image={BlogImg4}
                date="Sep 15"
                title="Integrating 24/7 AI Chat Agents to Double Inbound Lead Velocity"
                adminImg={AdminImg4}
                adminTitle="Sarah Jenkins"
                comments="42 comments"
                reviews="5.0"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <SingleBlog
                image={BlogImg5}
                date="Aug 30"
                title="Short-Form Video Direct Response: Scaling Brand Recall & CVR"
                adminImg={AdminImg2}
                adminTitle="Hamza Malik"
                comments="15 comments"
                reviews="4.9"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <SingleBlog
                image={BlogImg6}
                date="Aug 18"
                title="Multi-Location Local SEO: Geo-Targeting Without Getting Penalized"
                adminImg={AdminImg1}
                adminTitle="Tariq Vance"
                comments="28 comments"
                reviews="5.0"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* <!-- Start Pagination --> */}
              <div className="bonik-pagination-main">
                <ul className="bonik-pagination">
                  <li className="prev">
                    <Link href="#">
                      <i className="fa fa-long-arrow-left"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">1</Link>
                  </li>
                  <li className="active">
                    <Link href="#">2</Link>
                  </li>
                  <li>
                    <Link href="#">3</Link>
                  </li>
                  <li>
                    <Link href="#">4</Link>
                  </li>
                  <li className="next">
                    <Link href="#">
                      <i className="fa fa-long-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Blog Archive --> */}
    </>
  );
}
