import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./trusted-logos-marquee.css";

const logos = [
  // Replace with your real logo paths in /public/logos or remote URLs
  "/logos/bbc.svg",
  "/logos/guardian.svg",
  "/logos/itv.svg",
  "/logos/metro.svg",
  "/logos/dermalogica.svg",
  "/logos/fresha.svg",
  "/logos/cardiffuni.svg"
];

export default function TrustedLogosMarquee() {
  return (
    <section className="rt-logos-wrap" aria-label="Trusted by Cardiff's Leading Beauty Organizations">
      <div className="rt-logos-inner">
        <h3 className="rt-logos-eyebrow">Trusted by Cardiff's Leading Beauty Organizations</h3>

        <Swiper
          modules={[Autoplay]}
          className="rt-logos-swiper"
          // Core behavior
          loop
          // show slides sized by content width
          slidesPerView={"auto"}
          // equal spacing via CSS gap
          spaceBetween={0}
          // autoplay: continuous movement
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          // long transition to mimic marquee-like flow
          speed={8000} // 8 seconds for smooth, professional pace
          allowTouchMove={false}
          // add extra duplicates to prevent any gap on loop
          loopAdditionalSlides={logos.length}
        >
          {logos.map((src, i) => (
            <SwiperSlide className="rt-logo-slide" key={`logo-${i}`}>
              <div className="rt-logo-container">
                <img 
                  src={src} 
                  alt={`Trusted partner logo ${i + 1}`}
                  className="rt-logo-img"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
          {/* Duplicate once more to ensure seamless loop across wide screens */}
          {logos.map((src, i) => (
            <SwiperSlide className="rt-logo-slide" key={`logo-dup-${i}`}>
              <div className="rt-logo-container">
                <img 
                  src={src} 
                  alt={`Trusted partner logo ${i + 1}`}
                  className="rt-logo-img"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}