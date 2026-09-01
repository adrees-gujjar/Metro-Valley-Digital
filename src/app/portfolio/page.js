import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import PortfolioTab from "../Home/Portfolio/PortfolioTab";

export default function portfolio() {
  return (
    <>
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
