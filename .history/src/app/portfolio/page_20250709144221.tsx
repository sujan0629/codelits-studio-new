import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allProjects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProxyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrappers = gsap.utils.toArray<HTMLElement>(".project-wrapper");
      const total = wrappers.length;
      const viewportHeight = window.innerHeight;

      // Initialize all projects hidden and no rotation
      gsap.set(wrappers, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        autoAlpha: 0,
        rotationX: 0,
        transformOrigin: "50% 50% -250px", // set Z axis origin behind screen for 3D effect
        perspective: 1000,
      });

      // Show first project initially
      gsap.set(wrappers[0], { autoAlpha: 1 });

      // Create a timeline with ScrollTrigger pinned on container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollProxyRef.current,
          start: "top top",
          end: () => `+=${viewportHeight * total}`,
          scrub: 1,
          pin: containerRef.current,
          pinSpacing: false,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      wrappers.forEach((wrapper, i) => {
        if (i === 0) return; // skip first, already shown

        // Timeline stagger: Each project animation starts after previous finishes partially
        const startTime = (i - 1) * viewportHeight;

        // Animate previous project out: spin around X axis and fade out
        tl.to(
          wrappers[i - 1],
          {
            autoAlpha: 0,
            rotationX: 720, // 2 full spins on X axis
            duration: 1,
            ease: "power2.inOut",
          },
          startTime / viewportHeight
        );

        // Animate current project in: from rotationX 360 to 0 and fade in
        tl.fromTo(
          wrappers[i],
          {
            autoAlpha: 0,
            rotationX: 360, // start rotated
          },
          {
            autoAlpha: 1,
            rotationX: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          startTime / viewportHeight + 0.1
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={scrollProxyRef}
        style={{ height: `${window.innerHeight * allProjects.length}px` }}
      />

      <div
        ref={containerRef}
        className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-background"
        style={{ pointerEvents: "none", perspective: "1500px" }} // important for 3D perspective on children
      >
        {allProjects.map((project) => (
          <div
            key={project.slug}
            className="project-wrapper flex flex-col md:flex-row items-center justify-center gap-10 px-10 h-full pointer-events-auto"
            style={{ backfaceVisibility: "hidden" }} // helps smooth 3D rendering
          >
            <div className="w-full md:w-2/3 h-[500px] bg-card border border-border rounded-2xl overflow-hidden relative select-none">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>

            <div className="w-full md:flex-1 flex flex-col justify-center text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm px-2 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground text-sm md:text-base mb-5 max-w-md">
                {project.longDescription}
              </p>
              <Button asChild variant="outline" size="sm" className="text-sm px-4 py-2 w-fit">
                <Link href={`/portfolio/${project.slug}`}>
                  View Live Project <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
