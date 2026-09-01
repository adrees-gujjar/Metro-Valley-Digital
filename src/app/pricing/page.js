import Breadcrumbs from "@/components/Breadcrumbs";
import Pricing from "../Home/Pricing";

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs
        title="Performance Pricing Plans"
        description="Transparent, ROI-focused investment tiers for Local SEO, Paid Media Management, and Custom Next.js Software Engineering."
        menuLink="pricing"
        menuText="Pricing"
      />
      <Pricing />
    </>
  );
}
