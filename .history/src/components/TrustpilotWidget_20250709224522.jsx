import { useEffect } from 'react';
import NextImage from 'next/image';

export default function TrustpilotSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mt-24 bg-card p-8 md:p-12 rounded-2xl">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-headline text-2xl md:text-3xl font-bold">
            Rate us on Trustpilot!
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            We’d love to hear your feedback. Your reviews help us grow and improve.
          </p>

          {/* Wrapper to left-align and limit width */}
          <div className="mt-6" style={{ maxWidth: '220px', textAlign: 'left' }}>
            <div
              className="trustpilot-widget"
              data-locale="en-US"
              data-template-id="56278e9abfbbba0bdcd568bc"
              data-businessunit-id="6857173d366d801e3d9abee1"
              data-style-height="52px"
              data-style-width="100%"
              style={{ margin: 0, padding: 0 }}
            >
              <a
                href="https://www.trustpilot.com/review/codelitsstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block' }}
              >
                Trustpilot
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <NextImage
            src="https://placehold.co/600x400.png"
            alt="Team discussion"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            data-ai-hint="team collaboration"
          />
        </div>
      </div>
    </div>
  );
}
