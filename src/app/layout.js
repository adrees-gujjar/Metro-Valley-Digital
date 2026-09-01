import Script from "next/script";
import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import ColorLayout from "@/components/ColorLayout";
import Preloader from "@/components/Preloader";
import AnimationProvider from "@/components/AnimationProvider";
import { Poppins } from "next/font/google";

// Bootstrap CSS
import "../../public/css/bootstrap.min.css";

// Fontawesome CSS
import "../../public/css/font-awesome.min.css";

// Animate CSS
import "animate.css";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Modal Video CSS
import "react-modal-video/css/modal-video.min.css";

// Lighbox Gallery CSS
import "lightbox.js-react/dist/index.css";

// Global CSS
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://metrovalleydigital.com"),
  title: "Metro Valley Digital - Growth Agency & Software House",
  description:
    "Premier digital growth agency and software house based in Toronto, Canada & Lahore, Pakistan specializing in Local SEO, Google 3-Pack rankings, Paid Ads (Meta, TikTok, Google Ads), custom web & mobile apps, and AI chatbot automation.",
  openGraph: {
    title: "Metro Valley Digital - Growth Agency & Software House",
    description:
      "Dominate local search and accelerate paid ads ROI with Metro Valley Digital (Toronto, ON & Lahore, PK).",
    url: "https://metrovalleydigital.com",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <>
          <Preloader />
          <ColorLayout>
            <AnimationProvider>
              <Header />
              {children}
              <Newsletter />
              <Footer />
              <ScrollTop />
              <Script src="/js/bootstrap.min.js"></Script>
            </AnimationProvider>
          </ColorLayout>
        </>
      </body>
    </html>
  );
}
