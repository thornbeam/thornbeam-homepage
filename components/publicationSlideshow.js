import React, { useState } from "react";
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

export default ({ cover, images, maxH, maxW, children, ...props }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setCurrentSlide(0);
      setLoaded(true);
    },
    destroyed() {
      setLoaded(false);
    },
  });

  const [modalDisclosure, setModalDisclosure] = useState(false);

  const ChevronLeftIconBase = ({ ...props }) => {
    return (
      <ChevronLeftIcon
        position="absolute"
        top="49%"
        left="5px"
        transform="translateY(-49%)"
        boxSize={{ base: "0px", md: "40px" }}
        cursor="pointer"
        _hover={{ bgColor: "whiteAlpha.400" }}
        borderRadius="7px"
        {...props}
      />
    );
  };

  const ChevronRightIconBase = ({ ...props }) => {
    return (
      <ChevronRightIcon
        position="absolute"
        top="49%"
        right="5px"
        left="auto"
        transform="translateY(-49%)"
        boxSize={{ base: "0px", md: "40px" }}
        cursor="pointer"
        _hover={{ bgColor: "whiteAlpha.400" }}
        borderRadius="7px"
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
          <ChevronLeftIconBase
            color="blackAlpha.300"
            _hover={{ bgColor: "none", cursor: "default" }}
          ></ChevronLeftIconBase>
        )}

        {!props.left && disabled && (
          <ChevronRightIconBase
            color="blackAlpha.300"
            _hover={{ bgColor: "none", cursor: "default" }}
          ></ChevronRightIconBase>
        )}
      </div>
    );
  }

  return (
    <>
      <Container mt={{ base: 12, md: 24 }} maxW="container.sm" {...props}>
        {maxH && maxW && (
          <Image
            onClick={() => setModalDisclosure(true)}
            cursor="pointer"
            src={cover}
            maxH={maxH}
            maxW={maxW}
            fit="contain"
            align="left"
          />
        )}
        {children}
      </Container>
      {modalDisclosure == true && (
        <VStack
          position="fixed"
          top="0px"
          left="0px"
          zIndex={1}
          bgColor={useColorModeValue("blackAlpha.300", "none")}
          css={{ backdropFilter: "blur(10px)" }}
          width="100%"
          height="100%"
        >
          <Box
            w="100%"
            h="7vh"
            display="flex"
            justifyContent="right"
            alignItems="center"
          >
            <CloseIcon
              m={{ base: 3, md: 7 }}
              width="30px"
              height="30px"
              p="7px"
              color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
              onClick={() => setModalDisclosure(false)}
              cursor="pointer"
              _hover={{ bgColor: "whiteAlpha.400" }}
              borderRadius="7px"
            />
          </Box>
          <Box ref={sliderRef} className="keen-slider" w="100%" h="88vh">
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
          background: rgba(70, 70, 70, 0.6);
        }
      `}</style>
    </>
  );
};
