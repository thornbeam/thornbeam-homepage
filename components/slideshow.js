import { useState, useEffect } from "react"
import { Box, Button, Image } from "@chakra-ui/react"

const Slideshow = ({ images = [] }) => {
  const [thumbnails, setThumbnails] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideSrc, setCurrentSlideSrc] = useState();

  images = [
    "/artworks/2021-skull.png",
    "/artworks/2021-ohne_titel.png",
    "/artworks/2021-bang_01.png",
    "/artworks/2021-bang_02.png",
    "/artworks/2020-bjt.png",
    "/artworks/2020-advertisement.png",
    "/artworks/2020-abd.png",
  ];

  useEffect(() => {
    setThumbnails(images);
    setCurrentSlideSrc(images[currentSlide]);
  }, [images, currentSlide]);

  function previous() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(thumbnails.length - 1);
    }
  }

  function next() {
    if (currentSlide === thumbnails.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <Box>
      <Button onClick={previous}>Previous</Button>
      <Image src={currentSlideSrc}></Image>
      <Button onClick={next}>Next</Button>
    </Box>
  )
};

export default Slideshow;
