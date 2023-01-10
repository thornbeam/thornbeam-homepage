import React, { useState, useEffect } from "react";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default ({
  images = [],
  children,
  modalFooterText = "none",
  ...props
}) => {
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

  const [currentSlideStyle, setCurrentSlideStyle] = useState({});

  useEffect(() => {
    setCurrentSlideStyle({
      backgroundImage: "url('" + images[currentSlide] + "')",
    });
  }, [images, currentSlide]);

  const [modalDisclosure, setModalDisclosure] = useState(false);

  return (
    <>
      <Container maxW="container.sm" {...props}>
        <AspectRatio maxW="100%" ratio={4 / 3}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            fontSize="1.2rem"
            color="whiteAlpha.900"
            style={currentSlideStyle}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            textTransform="uppercase"
            letterSpacing="1px"
            cursor="pointer"
            filter="grayscale(100%)"
            _hover={{ filter: "none" }}
            transition="filter 0.3s"
            textAlign="center"
            onClick={() => setModalDisclosure(true)}
          >
            {children}
          </Box>
        </AspectRatio>
      </Container>
      {modalDisclosure == true && (
        <VStack
          position="fixed"
          top="0px"
          left="0px"
          zIndex={1}
          bgColor={useColorModeValue("blackAlpha.300", "none")}
          style={{ backdropFilter: "blur(5px)" }}
          width="100%"
          height="100%"
        >
          <Box
            w="100%"
            h="5vh"
            display="flex"
            justifyContent="right"
            alignItems="center"
          >
            <CloseIcon
              mr={5}
              color={useColorModeValue("blackAlpha.700", "white")}
              onClick={() => setModalDisclosure(false)}
              cursor="pointer"
            />
          </Box>
          <Box
            ref={sliderRef}
            className="keen-slider"
            w="100%"
            h="80vh"
          >
              {images.map((src, i) => (
                <Image
                  className="keen-slider__slide"
                  src={src}
                  objectFit="contain"
                ></Image>
              ))}
            </Box>
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
          {loaded && instanceRef.current && (
            <Box
              className="dots"
              h="5vh"
              w="100%"
              display="flex"
              px={10}
              justifyContent="center"
              alignItems="center"
            >
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
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
            </Box>
          )}
          <Box
            h="10vh"
            w="100%"
            display="flex"
            justifyContent="right"
            alignItems="center"
          >
            <Text mr={5}>TESTEXT</Text>
          </Box>
        </VStack>
      )}
      <style jsx>{`
        .dot {
          border: none;
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          margin: 0 5px;
          padding: 5px;
          cursor: pointer;
        }

        .dot:focus {
          outline: none;
        }

        .dot.active {
          background: rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </>
  );
};

const ChevronLeftIconBase = ({ ...props }) => {
  return (
    <ChevronLeftIcon
      position="absolute"
      top="44%"
      left="5px"
      transform="translateY(-44%)"
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
      top="44%"
      right="5px"
      left="auto"
      transform="translateY(-44%)"
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
