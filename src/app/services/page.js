import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import SingleService from "@/components/SingleService";
import Sliders from "../Home/Testimonial/Sliders";

import ServiceImg1 from "../../../public/images/local_seo_maps_1788193488227.jpg";
import ServiceImg2 from "../../../public/images/paid_ads_roas_1788191423627.jpg";
import ServiceImg3 from "../../../public/images/seo_audit_screen_1788193501910.jpg";
import ServiceImg4 from "../../../public/images/local_seo_growth_1788191403673.jpg";
import ServiceImg5 from "../../../public/images/smm_video_growth_1788193518995.jpg";
import ServiceImg6 from "../../../public/images/ai_code_agents_1788193536610.jpg";

export default function Services() {
  return (
    <>
      <Breadcrumbs
        title="Our Growth & Tech Services"
        description="Comprehensive Local SEO, High-ROAS Paid Ads, Next.js Web Development, and AI Automation."
        menuLink="services"
        menuText="Services"
      />

      {/* <!-- Service Area --> */}
      <section className="service-area archive">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Core Capabilities"
                title="Strategic Growth Services"
                description="80% of our power is dedicated to high-intent Local SEO and Paid Advertising, backed by elite full-stack engineering in Toronto and Lahore."
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <SingleService
                image={ServiceImg1}
                icon="fa fa-map-marker"
                title="Local SEO & Google 3-Pack"
                description="Rank #1 in Google Maps and local search grids in Toronto & Lahore. Proximity signals, citation networks, and GMB review velocity."
                btnURL="contact"
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <SingleService
                image={ServiceImg2}
                icon="fa fa-bullhorn"
                title="Paid Ads (Meta, TikTok, Google)"
                description="High-converting performance marketing funnels designed for 4.5x+ ROAS. Rapid creative testing, retargeting, and full attribution."
                btnURL="contact"
              />
            </div>

            <div
              className="col-lg-4 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.2s"
            >
              <SingleService
                image={ServiceImg3}
                icon="fa fa-search"
                title="Search Engine Optimization (SEO)"
                description="High-authority digital PR backlinks, algorithmic technical audits, and content clusters that capture national & international search share."
                btnURL="contact"
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.3s"
            >
              <SingleService
                image={ServiceImg4}
                icon="fa fa-file-text-o"
                title="On-Page & Technical SEO"
                description="Core Web Vitals acceleration, schema markup, semantic entity architecture, and search intent optimization."
                btnURL="contact"
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.4s"
            >
              <SingleService
                image={ServiceImg5}
                icon="fa fa-share-alt"
                title="Social Media Marketing (SMM)"
                description="Organic audience building, viral short-form video hooks for Reels & TikTok, and brand authority positioning."
                btnURL="contact"
              />
            </div>

            <div
              className="col-lg-4 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.5s"
            >
              <SingleService
                image={ServiceImg6}
                icon="fa fa-code"
                title="Next.js Software & AI Bots"
                description="Ultra-fast React / Next.js web applications, cross-platform mobile apps, and 24/7 intelligent CRM conversational bots."
                btnURL="contact"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Service Area --> */}

      {/* <!-- Testimonial-Area --> */}
      <section className="testimonial-area">
        <div className="testimonial-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Sliders />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Area --> */}
    </>
  );
}
