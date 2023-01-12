import React, { useState } from "react";
import { Image } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import UnionSpiel from "../../components/image_urls/unionSpiel.js";

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {UnionSpiel.map((src, i) => (
            <Image className="keen-slider__slide" src={src}></Image>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
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
      <style jsx>{`
        .navigation-wrapper {
          position: relative;
        }

        .keen-slider__slide {
          background: grey;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 50px;
          color: #fff;
          font-weight: 500;
          height: 300px;
          max-height: 100vh;
        }

        .number-slide1 {
          background: rgb(64, 175, 255);
          background: linear-gradient(
            128deg,
            rgba(64, 175, 255, 1) 0%,
            rgba(63, 97, 255, 1) 100%
          );
        }

        .number-slide2 {
          background: rgb(255, 75, 64);
          background: linear-gradient(
            128deg,
            rgba(255, 154, 63, 1) 0%,
            rgba(255, 75, 64, 1) 100%
          );
        }

        .number-slide3 {
          background: rgb(182, 255, 64);
          background: linear-gradient(
            128deg,
            rgba(182, 255, 64, 1) 0%,
            rgba(63, 255, 71, 1) 100%
          );
          background: linear-gradient(
            128deg,
            rgba(189, 255, 83, 1) 0%,
            rgba(43, 250, 82, 1) 100%
          );
        }

        .number-slide4 {
          background: rgb(64, 255, 242);
          background: linear-gradient(
            128deg,
            rgba(64, 255, 242, 1) 0%,
            rgba(63, 188, 255, 1) 100%
          );
        }

        .number-slide5 {
          background: rgb(255, 64, 156);
          background: linear-gradient(
            128deg,
            rgba(255, 64, 156, 1) 0%,
            rgba(255, 63, 63, 1) 100%
          );
        }

        .dots {
          display: flex;
          padding: 10px 0;
          justify-content: center;
        }

        .dot {
          border: none;
          width: 10px;
          height: 10px;
          background: #c5c5c5;
          border-radius: 50%;
          margin: 0 5px;
          padding: 5px;
          cursor: pointer;
        }

        .dot:focus {
          outline: none;
        }

        .dot.active {
          background: #000;
        }
      `}</style>
    </>
  );
};

const ChevronLeftIconBase = ({ ...props }) => {
  return (
    <ChevronLeftIcon
      position="absolute"
      top="50%"
      left="5px"
      transform="translateY(-50%)"
      width="30px"
      height="30px"
      fill="#fff"
      cursor="pointer"
      {...props}
    />
  );
};

const ChevronRightIconBase = ({ ...props }) => {
  return (
    <ChevronRightIcon
      position="absolute"
      top="50%"
      right="5px"
      left="auto"
      transform="translateY(-50%)"
      width="30px"
      height="30px"
      cursor="pointer"
      {...props}
    />
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrow-disabled" : "";
  return (
    <div
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
    >
      {props.left && (
        <ChevronLeftIconBase color="whiteAlpha.800"></ChevronLeftIconBase>
      )}

      {!props.left && (
        <ChevronRightIconBase color="whiteAlpha.800"></ChevronRightIconBase>
      )}
      {props.left && disabled && (
        <ChevronLeftIconBase color="blackAlpha.300"></ChevronLeftIconBase>
      )}

      {!props.left && disabled && (
        <ChevronRightIconBase color="blackAlpha.300"></ChevronRightIconBase>
      )}
    </div>
  );
}

// function ArrowLegacy(props) {
//   const disabeld = props.disabled ? " arrow--disabled" : "";
//   return (
//     <svg
//       onClick={props.onClick}
//       className={`arrow ${
//         props.left ? "arrow--left" : "arrow--right"
//       } ${disabeld}`}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       {props.left && (
//         <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//       )}
//       {!props.left && (
//         <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//       )}
//     </svg>
//   );
// }
