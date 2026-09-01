import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "../Home/Contact";
import Client from "../Home/Client";

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs
        title="Contact Metro Valley Digital"
        description="Dual hubs in Toronto, Canada and Lahore, Pakistan. Get in touch for a free 30-minute growth audit or custom software consultation."
        menuLink="contact"
        menuText="Contact"
      />
      <Contact />
      {/* <!-- Google-Maps --> */}
      <div className="maps-area">
        <div className="main-maps">
          <iframe
            id="gmap_canvas"
            title="Metro Valley Digital Toronto Location"
            src="https://maps.google.com/maps?q=Toronto%20ON%20Canada&t=&z=12&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
      <Client />
    </>
  );
}
