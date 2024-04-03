import React, { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import c1 from "@/public/img/certificates/c1.png";
import c2 from "@/public/img/certificates/c2.png";
import c3 from "@/public/img/certificates/c3.png";
import c4 from "@/public/img/certificates/c4.png";
import c5 from "@/public/img/certificates/c5.png";
import c6 from "@/public/img/certificates/c6.png";

const Certificates = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    // loop: true,
    rtl: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="certificates bg-theme-dark px-10 py-5">
      <h1 className="text-4xl text-center text-primary mt-5 leading-12">
        کیفیت اتفاقی نیست !
      </h1>
      <>
        <div className="navigation-wrapper  mx-auto">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide items-center flex">
              <Image src={c1} className="w-1/3 mx-auto" alt="" loading="lazy" />
            </div>
            <div className="keen-slider__slide items-center flex">
              <Image src={c2} className="w-1/3 mx-auto" alt="" loading="lazy" />
            </div>
            <div className="keen-slider__slide items-center flex">
              <Image src={c3} className="w-1/3 mx-auto" alt="" loading="lazy" />
            </div>
            <div className="keen-slider__slide items-center flex">
              <Image src={c4} className="w-1/3 mx-auto" alt="" loading="lazy" />
            </div>
            <div className="keen-slider__slide items-center flex">
              <Image src={c5} className="w-1/3 mx-auto" alt="" loading="lazy" />
            </div>
            <div className="keen-slider__slide items-center flex">
              <Image src={c6} className="w-1/3 mx-auto" alt="" loading="lazy" />
            </div>
          </div>
          {loaded && instanceRef.current && (
            <div>
              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                left
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />
            </div>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array.from(
                Array(instanceRef.current.track.details.slides.length).keys()
              ),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </>
    </div>
  );
};

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
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
}

export default Certificates;
