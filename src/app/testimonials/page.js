import Breadcrumbs from "@/components/Breadcrumbs";
import Team from "../Home/Team";
import Testimonial from "../Home/Testimonial";

export default function Testimonials() {
  return (
    <>
      <Breadcrumbs
        title="Client Growth & Success Stories"
        description="Discover how business leaders across Toronto and Lahore achieve #1 Google rankings, 5x+ ROAS on paid media, and automated operations with Metro Valley Digital."
        menuLink="testimonials"
        menuText="Testimonials"
      />
      <Team />
      <Testimonial />
    </>
  );
}
