"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import AgencyLogo from "../AgencyLogo";
import MobileOffcanvas from "../MobileOffcanvas";

export default function Navbar() {
  const pathname = usePathname();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <!-- Header Start --> */}
      <header className={`header ${isSticky ? "sticky" : "header-transparent"}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="header-inner-top">
                <div className="header-inner">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 col-8">
                      {/* <!-- Modern Agency Logo --> */}
                      <div className="logo py-1">
                        <AgencyLogo isLight={!isSticky} />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-4">
                      <div className="main-menu-top d-flex align-items-center justify-content-end">
                        <div className="main-menu">
                          <div className="navbar">
                            <div className="nav-item">
                              {/* <!-- Main-Menu --> */}
                              <ul className="nav-menu mobile-menu navigation">
                                <li>
                                  <Link
                                    className={` ${
                                      pathname === "/" ? "active" : ""
                                    }`}
                                    href="/"
                                  >
                                    Home
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={` ${
                                      pathname === "/services" ? "active" : ""
                                    }`}
                                    href="/services"
                                  >
                                    Services
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    Portfolio
                                    <i className="fa fa-angle-down"></i>
                                  </Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/portfolio"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/portfolio"
                                      >
                                        Portfolio
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/portfolio-single"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/portfolio-single"
                                      >
                                        Portfolio Single
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link href="#">
                                    Blogs<i className="fa fa-angle-down"></i>
                                  </Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/blog" ? "active" : ""
                                        }`}
                                        href="/blog"
                                      >
                                        Blog Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/blog-sidebar"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/blog-sidebar"
                                      >
                                        Blog With Sidebar
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/blog-single"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/blog-single"
                                      >
                                        Blog Single
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link href="#">
                                    Pages<i className="fa fa-angle-down"></i>
                                  </Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/about-us"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/about-us"
                                      >
                                        About Us
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/team" ? "active" : ""
                                        }`}
                                        href="/team"
                                      >
                                        Team
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/pricing"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/pricing"
                                      >
                                        Pricing
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/testimonials"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/testimonials"
                                      >
                                        Testimonials
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/faq" ? "active" : ""
                                        }`}
                                        href="/faq"
                                      >
                                        Faq&apos;s
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/404" ? "active" : ""
                                        }`}
                                        href="/404"
                                      >
                                        404 Page
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/mail-success"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/mail-success"
                                      >
                                        Mail Success
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link
                                    className={` ${
                                      pathname === "/contact" ? "active" : ""
                                    }`}
                                    href="/contact"
                                  >
                                    Contact
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Menu-Right --> */}
                        <div className="menu-right d-none d-lg-block ms-3">
                          <Link href="/contact" className="theme-btn" style={{ padding: "9px 18px", fontSize: "13.5px", whiteSpace: "nowrap" }}>
                            <i className="fa fa-bolt me-1" style={{ marginRight: "6px" }}></i> Free Growth Audit
                          </Link>
                        </div>
                        {/* <!-- End-Menu-Right --> */}

                        {/* <!-- Mobile Hamburger Toggler (Visible on <992px) --> */}
                        <div className="d-lg-none ms-3 d-flex align-items-center">
                          <MobileOffcanvas isSticky={isSticky} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- End Header --> */}
    </>
  );
}
