import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import PortfolioTab from "../Home/Portfolio/PortfolioTab";
import { BreadcrumbSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: "Client Case Studies & Growth Results | Metro Valley",
  description:
    "Explore verified client case studies: 320%+ local call volume surges, 4.5x+ paid ad ROAS, and custom software delivery by Metro Valley Digital in Toronto & PK.",
  alternates: {
    canonical: "https://metrovalleydigital.com/portfolio",
  },
  openGraph: {
    title: "Client Case Studies & Growth Results | Metro Valley",
    description:
      "Explore verified client case studies: 320%+ local call volume surges, 4.5x+ paid ad ROAS, and custom software delivery by Metro Valley Digital in Toronto & PK.",
    url: "https://metrovalleydigital.com/portfolio",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://metrovalleydigital.com/images/seo_audit_screen_1788193501910.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Studies & Growth Results | Metro Valley",
    description:
      "Explore verified client case studies: 320%+ local call volume surges, 4.5x+ paid ad ROAS, and custom software delivery by Metro Valley Digital in Toronto & PK.",
    images: ["https://metrovalleydigital.com/images/seo_audit_screen_1788193501910.jpg"],
  },
};

export default function portfolio() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Portfolio", url: "/portfolio" }]} />
      <Breadcrumbs
        title="Client Case Studies & Portfolio"
        description="Explore how Metro Valley Digital scaled organic traffic, Google 3-Pack rankings, and paid ads revenue for our clients."
        menuLink="portfolio"
        menuText="Portfolio"
      />

      {/* <!-- Portfolio Area --> */}
      <section className="portfolio-area" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Client Success"
                title="Proven Growth Case Studies"
                description="Real campaigns, real revenue outcomes, and custom software delivered for businesses across North America and South Asia."
              />
            </div>
          </div>
          <PortfolioTab />
        </div>
      </section>
      {/* <!-- End Portfolio Area -->	 */}
    </>
  );
}
