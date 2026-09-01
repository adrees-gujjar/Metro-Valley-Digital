import Breadcrumbs from "@/components/Breadcrumbs";
import Team from "../Home/Team";

import Service from "../Home/Service";
import About from "../Home/About";

export default function AboutUs() {
  return (
    <>
      <Breadcrumbs
        title="About Metro Valley Digital"
        description="A high-performance digital marketing growth agency and software house connecting Canadian commercial leadership with world-class engineering in Lahore."
        menuLink="about-us"
        menuText="About us"
      />
      <Service />
      <About />
      <Team />
    </>
  );
}
