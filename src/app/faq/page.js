import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import FaqBox from "./FaqBox";
import FaqMain from "./FaqMain";

export default function Faq() {
  return (
    <>
      <Breadcrumbs
        title="Frequently Asked Questions"
        description="Clear answers on our Local SEO processes, Google 3-Pack optimization, Paid Ad campaigns, and custom Next.js engineering."
        menuLink="faq"
        menuText="FAQ"
      />
      <FaqBox />
      <FaqMain />
    </>
  );
}
