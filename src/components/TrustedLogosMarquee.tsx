@@ .. @@
 const logos = [
-  "/logos/dermalogica.svg",
-  "/logos/fresha.svg",
-  "/logos/cardiff-council.svg",
-  "/logos/wales-tourism.svg",
-  "/logos/beauty-guild.svg",
-  "/logos/cidesco.svg",
-  "/logos/babtac.svg",
-  "/logos/vtct.svg"
+  { src: "/logos/dermalogica.svg", alt: "Dermalogica Professional Partner" },
+  { src: "/logos/fresha.svg", alt: "Fresha Booking Platform" },
+  { src: "/logos/cardiff-council.svg", alt: "Cardiff Council Approved" },
+  { src: "/logos/wales-tourism.svg", alt: "Visit Wales Partner" },
+  { src: "/logos/beauty-guild.svg", alt: "Beauty Guild Member" },
+  { src: "/logos/cidesco.svg", alt: "CIDESCO Certified" },
+  { src: "/logos/babtac.svg", alt: "BABTAC Professional Member" },
+  { src: "/logos/vtct.svg", alt: "VTCT Qualified" }
 ];
 
 export default function TrustedLogosMarquee() {
   return (
-    <section className="rt-logos-wrap" aria-label="Trusted by">
+    <section className="rt-logos-wrap" aria-label="Trusted by leading beauty organizations">
       <div className="rt-logos-inner">
-        <p className="rt-logos-eyebrow">As trusted by</p>
+        <p className="rt-logos-eyebrow">Trusted by Cardiff's Leading Beauty Organizations</p>
 
         <Swiper
           modules={[Autoplay]}
@@ .. @@
           autoplay={{
             delay: 0,
             disableOnInteraction: false,
-            pauseOnMouseEnter: true
+            pauseOnMouseEnter: true,
+            reverseDirection: false
           }}
-          speed={6000}
+          speed={8000}
           allowTouchMove={false}
           loopAdditionalSlides={logos.length}
+          grabCursor={false}
         >
-          {logos.map((src, i) => (
+          {logos.map((logo, i) => (
             <SwiperSlide className="rt-logo-slide" key={`logo-${i}`}>
-              <img src={src} alt="" className="rt-logo-img" />
+              <img 
+                src={logo.src} 
+                alt={logo.alt} 
+                className="rt-logo-img"
+                loading="lazy"
+              />
             </SwiperSlide>
           ))}
-          {/* Duplicate once more to ensure seamless loop across wide screens */}
-          {logos.map((src, i) => (
+          {/* Duplicate for seamless loop */}
+          {logos.map((logo, i) => (
             <SwiperSlide className="rt-logo-slide" key={`logo-dup-${i}`}>
-              <img src={src} alt="" className="rt-logo-img" />
+              <img 
+                src={logo.src} 
+                alt={logo.alt} 
+                className="rt-logo-img"
+                loading="lazy"
+              />
             </SwiperSlide>
           ))}
         </Swiper>