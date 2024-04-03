import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import hero from "@/public/img/hero.png";

const Hero = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      defaultAnimation: {
        duration: 4000,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="hero flex">
      <div className="hero-detail w-1/4 h-full text-primary p-5 flex flex-col justify-around">
        <h1 className="text-4xl text-center my-10 leading-12">
          آبكش شاسی بلند سنتيال
        </h1>
        <h4> تعداد در کارتن : 24 عدد </h4>
        <h4>رنگبندی : صورتی، سفید، کرم</h4>
      </div>
      <div className="w-3/4 h-full">
        <div ref={sliderRef} className="keen-slider h-full">
          <div className="keen-slider__slide">
            <Image src={hero} className="h-full" alt="" loading="lazy" />
          </div>
          <div className="keen-slider__slide">
            <Image src={hero} className="h-full" alt="" loading="lazy" />
          </div>
          <div className="keen-slider__slide">
            <Image src={hero} className="h-full" alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
