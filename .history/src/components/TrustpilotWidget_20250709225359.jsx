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
        .trustpilot-widget-container {
          max-width: 700px;  /* or whatever max width you want */
          margin: 0 auto;    /* center horizontally */
        }
        .trustpilot-widget iframe {
          width: 100% !important;
          height: 400px !important;  /* big height */
          display: block !important;
          margin: 0 !important;
          float: left !important;
        }
      `}</style>

      <div className="trustpilot-widget-container">
     <div
  className="trustpilot-widget"
  data-locale="en-US"
  data-template-id="53aa8807dec7e10d38f59f32"
  data-businessunit-id="6857173d366d801e3d9abee1"
  data-style-height="400px"
  data-style-width="100%"
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
    </>
  );
}
