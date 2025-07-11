import { useEffect } from "react";

export default function TrustpilotWidgetOnly() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    script.onload = () => {
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
        .trustpilot-widget-wrapper {
          max-width: 700px;
          margin: 0 auto;
          background-color: white; /* white container */
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }
        .trustpilot-widget iframe {
          width: 100% !important;
          height: 400px !important;
          display: block !important;
          margin: 0 !important;
          float: left !important;
          border-radius: 8px; /* optional rounding on iframe edges */
          border: 1px solid #e0e0e0; /* subtle border on iframe */
        }
      `}</style>

      <div className="trustpilot-widget-wrapper">
        <div
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="53aa8807dec7e10d38f59f32"
          data-businessunit-id="6857173d366d801e3d9abee1"
          data-style-height="400px"
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
    </>
  );
}
