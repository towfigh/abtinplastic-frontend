import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useKeenSlider } from "keen-slider/react";
import c1 from "@/public/img/certificates/c1.png";
import c2 from "@/public/img/certificates/c2.png";
import c3 from "@/public/img/certificates/c3.png";
import c4 from "@/public/img/certificates/c4.png";
import c5 from "@/public/img/certificates/c5.png";
import c6 from "@/public/img/certificates/c6.png";

interface slideProps {
  id: number;
  img: StaticImageData;
  title: string;
}

const Certificates = () => {
  const slides: slideProps[] = [
    { id: 5, img: c1, title: "ديپلمای مدیریت توسعه از اروپا" },
    { id: 0, img: c2, title: "تقدير نامه از كشور كويت" },
    { id: 1, img: c3, title: "اجلاس کشوری مشتری مداری نوین" },
    { id: 2, img: c4, title: "نمایشگاه تخصصی صادراتی قطعات پلاستیک" },
    { id: 3, img: c5, title: "اجلاس کشوری مشتری مداری نوین" },
    {
      id: 4,
      img: c6,
      title: "دهمين نمايشگاه بين المللی ايران پلاست",
    },
  ];
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      rtl: true,
      defaultAnimation: {
        duration: 3000,
      },
      slides: {
        perView: 3,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
        console.log(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
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
          }, 3000);
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
    <div className="certificates bg-theme-dark px-20 py-5">
      <h1 className="text-4xl text-center text-primary leading-12">
        کیفیت اتفاقی نیست !
      </h1>
      <div className="navigation-wrapper mx-auto">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((item) => (
            <div
              className="keen-slider__slide items-center justify-end flex flex-col mt-5"
              key={item.id}
              id={`c_id_${item.id}`}
            >
              <div className="items-center justify-center flex grow">
                <Image
                  src={item.img}
                  className="w-1/2 mx-auto"
                  alt=""
                  loading="lazy"
                />
              </div>
              <h1 className="text-lg text-center text-primary leading-12">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <div>
            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              left
            />
            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

const Arrow = (props: { left?: boolean; onClick: (e: any) => void }) => {
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
};

export default Certificates;
