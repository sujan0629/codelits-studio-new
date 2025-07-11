import { useEffect, useRef } from "react";
import { GridPattern } from '@/components/decoration/GridPattern';
export default function TrustpilotWidgetOnly() {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;

    script.onload = () => {
      if (window.Trustpilot && widgetRef.current) {
        window.Trustpilot.loadFromElement(widgetRef.current);
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    
    <div
      ref={widgetRef}
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="53aa8807dec7e10d38f59f32"
      data-businessunit-id="6857173d366d801e3d9abee1"
      data-style-height="400px"
      data-style-width="100%"
      style={{ maxWidth: "700px", margin: "auto" }}
    >
             <GridPattern
                width={40}
                height={40}
                x={-1}
                y={-1}
                className="grid-pattern absolute -top-1/4 left-0 h-full w-full stroke-primary/10 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"
              />
      <a
        href="https://www.trustpilot.com/review/codelitsstudio.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Trustpilot
      </a>
    </div>
  );
}
