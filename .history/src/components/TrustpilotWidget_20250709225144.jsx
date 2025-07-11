import { useEffect } from "react";

export default function TrustpilotSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    script.onload = () => {
      // After script loads, trigger reinitialization if needed
      if (window.Trustpilot) {
        window.Trustpilot.loadFromElement();
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <style>{`
        .trustpilot-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.5rem 1rem;
        }
        .trustpilot-text {
          color: white;
          font-size: 2rem;
          font-weight: 600;
          flex: 1;
          white-space: nowrap;
        }
        .trustpilot-widget-wrapper {
          flex: 1;
          max-width: 450px;
        }
        .trustpilot-widget iframe {
          width: 100% !important;
          height: 350px !important;
          display: block !important;
          margin: 0 !important;
          float: left !important;
        }
        @media (max-width: 768px) {
          .trustpilot-container {
            flex-direction: column;
            gap: 1rem;
          }
          .trustpilot-text {
            font-size: 1.6rem;
            white-space: normal;
            text-align: center;
            margin-bottom: 0.5rem;
          }
          .trustpilot-widget-wrapper {
            max-width: 100%;
          }
        }
      `}</style>

      <section className="trustpilot-container">
        <div className="trustpilot-text">Rate us on Trustpilot!</div>

        <div className="trustpilot-widget-wrapper">
          <div
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="53aa8807dec7e10d38f59f32" /* full review widget */
            data-businessunit-id="6857173d366d801e3d9abee1"
            data-style-height="350px"
            data-style-width="100%"
          >
            <a
              href="https://www.trustpilot.com/review/codelitsstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block" }}
            >
              Trustpilot
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
