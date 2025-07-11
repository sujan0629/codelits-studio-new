import Script from 'next/script';
import NextImage from 'next/image';

export default function TrustpilotSection() {
  return (
    <>
      <div className="mt-24 bg-card p-8 md:p-12 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side */}
          <div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold">
              Rate us on Trustpilot!
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              We’d love to hear your feedback. Your reviews help us grow and improve.
            </p>

            {/* Trustpilot widget in place of the button */}
            <div
              className="trustpilot-widget mt-6"
              data-locale="en-US"
              data-template-id="56278e9abfbbba0bdcd568bc"
              data-businessunit-id="6857173d366d801e3d9abee1"
              data-style-height="52px"
              data-style-width="100%"
            >
              <a
                href="https://www.trustpilot.com/review/codelitsstudio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trustpilot
              </a>
            </div>
          </div>

          {/* Right side: Image */}
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

      {/* Load Trustpilot widget script */}
      <Script
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
