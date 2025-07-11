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
          display: inline-block;  /* shrinkwrap container */
          background-color: white; /* white bg */
          border-radius: 12px;
          overflow: hidden;
          width: 100%;
          max-width: 700px; /* max width to keep it sane */
          height: 400px; /* fixed height same as iframe */
        }

        .trustpilot-widget iframe {
          width: 100% !important;
          height: 400px !important;
          border-radius: 12px !important;
          border: none !important;
          display: block !important;
          margin: 0 !important;
          float: left !important;
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
