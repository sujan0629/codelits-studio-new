import { useEffect } from "react";

export default function TrustpilotSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Container styles */
        .trustpilot-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 2rem 1rem;
        }

        /* Left text styling */
        .trustpilot-text {
          color: white;
          font-size: 3rem; /* Big white text */
          font-weight: bold;
          flex: 1;
          white-space: nowrap;
        }

        /* Widget container */
        .trustpilot-widget-wrapper {
          flex: 1;
          max-width: 400px;
        }

        /* Force Trustpilot iframe full width and height */
        .trustpilot-widget iframe {
          width: 100% !important;
          height: 250px !important;
          display: block !important;
          margin: 0 !important;
          float: left !important;
        }

        @media (max-width: 768px) {
          .trustpilot-container {
            flex-direction: column;
            gap: 1.5rem;
          }
          .trustpilot-text {
            font-size: 2.5rem;
            white-space: normal;
            text-align: center;
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
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="6857173d366d801e3d9abee1"
            data-style-height="250px"
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
