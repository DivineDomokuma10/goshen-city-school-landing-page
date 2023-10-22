import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ children, settings }) => {
  return <Slider {...settings}>{children}</Slider>;
};

const setting = {
  dots: false,
  speed: 600,
  autoplay: true,
  infinite: true,
  initialSlide: 0,
  slidesToShow: 3,
  slidesToScroll: 3,
  cssEase: "linear",
  autoplaySpeed: 2000,
  responsive: [
    { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    {
      breakpoint: 900,
      settings: { slidesToShow: 2, slidesToScroll: 2 },
    },
  ],
};

export default Carousel;
