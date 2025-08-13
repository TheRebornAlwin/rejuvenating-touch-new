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
    color: "text-white"
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
    color: "text-white"
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
    color: "text-white"
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
    color: "text-white"
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
            pauseOnMouseEnter: false
          }}
          // constant speed for true continuous marquee
          speed={15000} // 15 seconds for perfectly smooth continuous flow
          allowTouchMove={false}
          // triple duplication ensures seamless infinite loop
          loopAdditionalSlides={credibilityMarkers.length * 2}
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
          {/* Second duplication for seamless loop */}
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
          {/* Third duplication for perfect continuous flow */}
          {credibilityMarkers.map((marker, i) => (
            <SwiperSlide className="rt-credibility-slide" key={`marker-dup2-${i}`}>
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