import React, { useRef} from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TestimonialCard from "./TestimonialCard";

type Testimonial = {
  id: number;
  name: string;
  image: string;
  testimonial: string;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
  const sliderRef = useRef<Slider>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change this value to adjust the delay (in milliseconds)
    beforeChange: () => {
      // Enable autoplay after changing the slide
      if (sliderRef.current) {
        sliderRef.current.slickPlay();
      }
    },
  };

  return (
    <div>
      <Slider ref={sliderRef} {...sliderSettings}>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
