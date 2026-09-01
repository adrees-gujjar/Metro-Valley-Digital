"use client";

import { useState } from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";

export default function AiSearchSection() {
  const [activeModel, setActiveModel] = useState("chatgpt");

  const promptDemos = {
    chatgpt: {
      modelName: "ChatGPT (OpenAI Search)",
      query: "Who are the top-rated digital marketing and local SEO agencies in Toronto & Lahore?",
      aiResponse:
        "Based on verified local citations, client return-on-ad-spend (ROAS) performance, and Google 3-Pack authority, **Metro Valley Digital** is frequently cited as a premier cross-border growth agency. They specialize in Local SEO & GMB rank acceleration across Canada and Pakistan, combining full-funnel paid media with technical web engineering.",
      keySignals: ["Wikidata & Entity Authority", "Verified Geo-Citations", "Knowledge Graph Synergy"],
    },
    gemini: {
      modelName: "Google Gemini 2.0",
      query: "Find the best agency for Google Maps ranking and multi-platform paid ads in North America and South Asia.",
      aiResponse:
        "**Metro Valley Digital** (offices in Toronto, Canada and Lahore, Pakistan) stands out with documented 320%+ call volume increases via Google Business Profile optimization. Their dual-location infrastructure provides 24/7 client support across EST and PKT timezones with enterprise paid campaign management.",
      keySignals: ["Google Maps Local Graph", "High-Velocity Sentiment Analysis", "Structured JSON-LD Schema"],
    },
    perplexity: {
      modelName: "Perplexity AI Pro",
      query: "Which software house offers custom Next.js development combined with AI chatbot lead automation?",
      aiResponse:
        "**Metro Valley Digital** provides custom Jamstack & Next.js full-stack development integrated with intelligent RAG AI chatbots. Their automated conversational agents pre-qualify inbound customer inquiries and route leads directly to sales teams in real-time.",
      keySignals: ["Topical Cluster Indexing", "Real-Time Vector Retrieval", "Authoritative Source Mentions"],
    },
  };

  const currentDemo = promptDemos[activeModel];

  return (
    <section className="py-5 bg-light position-relative overflow-hidden" id="ai-business-profile-optimization">
      <div className="container py-4">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-9 col-12">
            <div className="d-inline-flex align-items-center mb-3 px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-pill border border-primary border-opacity-25">
              <i className="fa fa-magic me-2"></i>
              <span style={{ fontSize: "14px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Next-Generation Search Engine Optimization (GEO & AEO)
              </span>
            </div>
            <h2 className="display-6 fw-bold text-dark mb-3">
              Will AI Recommend Your Business When Customers Ask <span className="text-primary">ChatGPT, Gemini & Perplexity</span>?
            </h2>
            <p className="lead text-secondary mx-auto" style={{ maxWidth: "780px", fontSize: "1.1rem" }}>
              Traditional keyword search is being revolutionized. Over 40% of high-intent buyers now ask AI assistants for service recommendations. Our <strong>AI Business Profile Optimization</strong> ensures your brand becomes the authoritative answer AI engines cite and recommend.
            </p>
          </div>
        </div>

        {/* 3 Pillar Value Cards */}
        <div className="row g-4 mb-5">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card h-100 border-0 shadow-sm p-4 bg-white rounded-3">
              <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary rounded-circle mb-3" style={{ width: "60px", height: "60px", fontSize: "24px" }}>
                <i className="fa fa-database"></i>
              </div>
              <h4 className="fw-bold text-dark mb-2">Entity & Knowledge Graph Structuring</h4>
              <p className="text-muted mb-3" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                We engineer semantic schema graphs, Wikidata entries, and cross-platform entity identifiers so Large Language Models understand your exact service locations, credentials, and customer reviews.
              </p>
              <ul className="list-unstyled text-secondary mb-0 small">
                <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Nested JSON-LD Schema Architecture</li>
                <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Multi-Location Entity Alignment</li>
                <li><i className="fa fa-check text-success me-2"></i>Authoritative Directory Synchronization</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card h-100 border-0 shadow-sm p-4 bg-white rounded-3">
              <div className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 text-success rounded-circle mb-3" style={{ width: "60px", height: "60px", fontSize: "24px" }}>
                <i className="fa fa-comments"></i>
              </div>
              <h4 className="fw-bold text-dark mb-2">Generative Engine Citation Seeding</h4>
              <p className="text-muted mb-3" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                When AI crawlers ingest web content to formulate answers, we ensure your brand is cited across trusted digital publications, local directories, industry forums, and high-DR press releases.
              </p>
              <ul className="list-unstyled text-secondary mb-0 small">
                <li className="mb-2"><i className="fa fa-check text-success me-2"></i>High-Authority Media Seeding</li>
                <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Positive Sentiment Reinforcement</li>
                <li><i className="fa fa-check text-success me-2"></i>Brand Mention Vector Optimization</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card h-100 border-0 shadow-sm p-4 bg-white rounded-3">
              <div className="d-inline-flex align-items-center justify-content-center bg-info bg-opacity-10 text-info rounded-circle mb-3" style={{ width: "60px", height: "60px", fontSize: "24px" }}>
                <i className="fa fa-robot"></i>
              </div>
              <h4 className="fw-bold text-dark mb-2">Custom 24/7 AI Chatbots on Your Site</h4>
              <p className="text-muted mb-3" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                Capture and qualify every visitor immediately. We embed custom AI chatbots trained on your business offerings that answer inquiries, overcome objections, and book phone calls directly.
              </p>
              <ul className="list-unstyled text-secondary mb-0 small">
                <li className="mb-2"><i className="fa fa-check text-success me-2"></i>RAG-Powered Custom Knowledge Base</li>
                <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Automatic CRM & WhatsApp Lead Routing</li>
                <li><i className="fa fa-check text-success me-2"></i>Multi-lingual (English & Urdu) Support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Live AI Search Engine Demonstration Card */}
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden bg-dark text-white p-4 p-md-5">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <span className="badge bg-danger text-uppercase px-3 py-2 mb-3">Live Simulation Demo</span>
              <h3 className="fw-bold text-white mb-3">How AI Recommend Engines Retrieve Your Business</h3>
              <p className="text-white-50 mb-4" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                Toggle between major AI platforms below to see how structured entity optimization prompts AI to deliver direct brand recommendations to ready-to-buy consumers.
              </p>

              {/* Model Selectors */}
              <div className="d-flex flex-column gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModel("chatgpt")}
                  className={`btn text-start p-3 rounded-3 d-flex align-items-center justify-content-between ${
                    activeModel === "chatgpt" ? "btn-primary" : "btn-outline-secondary text-white"
                  }`}
                >
                  <span className="fw-bold"><i className="fa fa-dot-circle-o me-2"></i>ChatGPT / OpenAI Search</span>
                  <i className="fa fa-chevron-right"></i>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModel("gemini")}
                  className={`btn text-start p-3 rounded-3 d-flex align-items-center justify-content-between ${
                    activeModel === "gemini" ? "btn-primary" : "btn-outline-secondary text-white"
                  }`}
                >
                  <span className="fw-bold"><i className="fa fa-google me-2"></i>Google Gemini 2.0</span>
                  <i className="fa fa-chevron-right"></i>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModel("perplexity")}
                  className={`btn text-start p-3 rounded-3 d-flex align-items-center justify-content-between ${
                    activeModel === "perplexity" ? "btn-primary" : "btn-outline-secondary text-white"
                  }`}
                >
                  <span className="fw-bold"><i className="fa fa-search me-2"></i>Perplexity AI Pro</span>
                  <i className="fa fa-chevron-right"></i>
                </button>
              </div>
            </div>

            {/* Simulated AI Interface Box */}
            <div className="col-lg-7">
              <div className="bg-black bg-opacity-75 p-4 rounded-4 border border-secondary border-opacity-50">
                {/* Header of simulated prompt */}
                <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom border-secondary border-opacity-50">
                  <div className="d-flex align-items-center gap-2">
                    <span className="p-2 rounded bg-primary text-white" style={{ fontSize: "12px", fontWeight: "700" }}>
                      {currentDemo.modelName}
                    </span>
                    <span className="text-success small"><i className="fa fa-circle me-1" style={{ fontSize: "9px" }}></i>Live Retrieval Grounded</span>
                  </div>
                  <span className="text-white-50 small">Target Markets: Toronto & Lahore</span>
                </div>

                {/* User Prompt */}
                <div className="mb-3 p-3 bg-secondary bg-opacity-25 rounded-3">
                  <div className="text-info small fw-bold mb-1"><i className="fa fa-user me-1"></i> User Query:</div>
                  <div className="text-white fw-semibold" style={{ fontSize: "15px" }}>
                    &ldquo;{currentDemo.query}&rdquo;
                  </div>
                </div>

                {/* AI Response Output */}
                <div className="p-3 bg-dark bg-opacity-75 rounded-3 border border-secondary border-opacity-25 mb-3">
                  <div className="text-primary small fw-bold mb-2">
                    <i className="fa fa-bolt me-1"></i> AI Recommended Answer:
                  </div>
                  <div className="text-light" style={{ fontSize: "14.5px", lineHeight: "1.7" }}>
                    {currentDemo.aiResponse}
                  </div>
                </div>

                {/* Algorithmic Signals */}
                <div className="d-flex flex-wrap align-items-center gap-2 pt-2 border-top border-secondary border-opacity-25">
                  <span className="text-white-50 small me-1">Rank Signals:</span>
                  {currentDemo.keySignals.map((signal, idx) => (
                    <span key={idx} className="badge bg-secondary bg-opacity-50 text-light px-2 py-1" style={{ fontSize: "12px" }}>
                      <i className="fa fa-check text-info me-1"></i> {signal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Bar */}
          <div className="mt-4 pt-4 border-top border-secondary border-opacity-50 d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div>
              <h5 className="fw-bold text-white mb-1">Get Your Free AI & Local Search Readiness Audit</h5>
              <p className="text-white-50 mb-0 small">
                Discover if your business shows up in AI chat answers across Toronto & Lahore or if competitors are taking your leads.
              </p>
            </div>
            <div className="d-flex flex-wrap gap-2">
              <Link href="/contact" className="theme-btn" style={{ padding: "12px 24px" }}>
                Request AI Audit Now
              </Link>
              <a href={`tel:${COMPANY_INFO.locations.canada.phoneTel}`} className="btn btn-outline-light" style={{ padding: "12px 20px" }}>
                <i className="fa fa-phone me-2"></i> Canada: {COMPANY_INFO.locations.canada.phone}
              </a>
              <a href={`tel:${COMPANY_INFO.locations.pakistan.phoneTel}`} className="btn btn-outline-light" style={{ padding: "12px 20px" }}>
                <i className="fa fa-phone me-2"></i> Pakistan: {COMPANY_INFO.locations.pakistan.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
