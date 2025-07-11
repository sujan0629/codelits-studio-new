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
        .trustpilot-wrapper-flex {
          display: flex;
          justify-content: center; /* center horizontally */
          padding: 1rem 0; /* optional vertical spacing */
        }
        .trustpilot-widget-wrapper {
          position: relative;
          display: inline-block;
          background-color: white;
          padding: 8px;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        .trustpilot-widget-wrapper::before {
          content: "";
          position: absolute;
          top: 8px;
          left: 8px;
          right: 8px;
          bottom: 8px;
          background: white;
          z-index: 0;
          border-radius: 8px;
        }
        .trustpilot-widget {
          position: relative;
          z-index: 1;
          display: block;
        }
        .trustpilot-widget iframe {
          width: 100% !important;
          height: 120px !important;
          border-radius: 6px !important;
          border: none !important;
          display: block !important;
          margin: 0 !important;
          float: left !important;
          position: relative;
          z-index: 1;
        }
      `}</style>

      <div className="trustpilot-wrapper-flex">
        <div className="trustpilot-widget-wrapper">
          <div
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="6857173d366d801e3d9abee1"
            data-style-height="120px"
            data-style-width="250px"
            data-theme="light"
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
      </div>
    </>
  );
}
