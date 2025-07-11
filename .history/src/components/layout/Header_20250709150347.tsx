import gsap from "gsap";

useEffect(() => {
  const header = headerRef.current;
  let lastY = 0;
  let isActive = false;

  const showHeader = () => {
    gsap.to(header, {
      y: 10,
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      backdropFilter: 'blur(6px)',
      ease: "power2.out",
      duration: 0.5,
      delay: 0.1,
    });
    isActive = true;
  };

  const hideHeader = () => {
    gsap.to(header, {
      y: 0,
      boxShadow: '0 0 0 rgba(0,0,0,0)',
      backdropFilter: 'blur(0px)',
      ease: "power2.out",
      duration: 0.5,
      delay: 0.1,
    });
    isActive = false;
  };

  const handleScroll = () => {
    const currentY = window.scrollY;
    if (currentY > 20 && !isActive) showHeader();
    else if (currentY <= 20 && isActive) hideHeader();
    lastY = currentY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
