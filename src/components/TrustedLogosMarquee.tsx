import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Star, Users, Award, Clock, Shield, Heart, CheckCircle, Sparkles } from "lucide-react";
import "swiper/css";
import "./trusted-logos-marquee.css";

const credibilityMarkers = [
  {
    icon: Star,
    stat: "500+",
    label: "Cardiff Women Transformed",
    color: "text-gold"
  },
  {
    icon: Award,
    stat: "10+",
    label: "Years Clinical Experience",
    color: "text-white"
  },
  {
    icon: Shield,
    stat: "5-Star",
    label: "Rated Aesthetic Clinic",
    color: "text-gold"
  },
  {
    icon: Users,
    stat: "100%",
    label: "Client Satisfaction Rate",
    color: "text-white"
  },
  {
    icon: CheckCircle,
    stat: "Dermalogica",
    label: "Certified Professional",
    color: "text-gold"
  },
  {
    icon: Heart,
    stat: "Cardiff's",
    label: "Most Trusted Clinic",
    color: "text-white"
  },
  {
    icon: Sparkles,
    stat: "1000+",
    label: "Successful Treatments",
    color: "text-gold"
  },
  {
    icon: Clock,
    stat: "Same Day",
    label: "Booking Available",
    color: "text-white"
  }
];

export default function TrustedLogosMarquee() {
  return (
    <section className="rt-credibility-wrap" aria-label="Cardiff's Most Trusted Aesthetic Clinic">
      <div className="rt-credibility-inner">
        <h3 className="rt-credibility-eyebrow">Cardiff's Most Trusted Aesthetic Clinic</h3>

        <Swiper
          modules={[Autoplay]}
          className="rt-credibility-swiper"
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
          loopAdditionalSlides={credibilityMarkers.length}
        >
          {credibilityMarkers.map((marker, i) => (
            <SwiperSlide className="rt-credibility-slide" key={`marker-${i}`}>
              <div className="rt-credibility-card">
                <div className="rt-credibility-icon">
                  <marker.icon className={`w-6 h-6 ${marker.color}`} />
                </div>
                <div className="rt-credibility-content">
                  <div className={`rt-credibility-stat ${marker.color}`}>
                    {marker.stat}
                  </div>
                  <div className="rt-credibility-label">
                    {marker.label}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Duplicate once more to ensure seamless loop across wide screens */}
          {credibilityMarkers.map((marker, i) => (
            <SwiperSlide className="rt-credibility-slide" key={`marker-dup-${i}`}>
              <div className="rt-credibility-card">
                <div className="rt-credibility-icon">
                  <marker.icon className={`w-6 h-6 ${marker.color}`} />
                </div>
                <div className="rt-credibility-content">
                  <div className={`rt-credibility-stat ${marker.color}`}>
                    {marker.stat}
                  </div>
                  <div className="rt-credibility-label">
                    {marker.label}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}