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
          position: relative;
          max-width: 400px;
          height: 200px;
          margin: 100px auto 50px;
          padding: 24px;
          border-radius: 12px;
          background-color: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
          overflow: hidden;
          cursor: pointer; /* show pointer on hover */
          display: block; /* allow block click */
          text-decoration: none; /* remove underline */
          color: inherit; /* keep text color */
        }

        /* White overlay behind iframe */
        .trustpilot-widget-wrapper::before {
          content: "";
          position: absolute;
          top: 24px;
          left: 24px;
          right: 24px;
          bottom: 24px;
          background: white;
          z-index: 0;
          border-radius: 12px;
        }

        .trustpilot-widget {
          position: relative;
          z-index: 1;
        }

        .trustpilot-widget iframe {
          width: 100% !important;
          height: 100% !important;
          border-radius: 12px !important;
          border: none !important;
          display: block !important;
          margin: 0 !important;
          float: left !important;
          position: relative;
          z-index: 1;
          pointer-events: none; /* prevent iframe from blocking click */
        }
      `}</style>

      <a
        href="https://www.trustpilot.com/review/codelitsstudio.com"
        target="_blank"
        rel="noopener noreferrer"
        className="trustpilot-widget-wrapper"
        aria-label="Read and leave reviews on Trustpilot"
      >
        <div
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="53aa8807dec7e10d38f59f32"
          data-businessunit-id="6857173d366d801e3d9abee1"
          data-style-height="400px"
          data-style-width="100%"
        >
          <span style={{ display: "inline-block" }}>Trustpilot</span>
        </div>
      </a>
    </>
  );
}
