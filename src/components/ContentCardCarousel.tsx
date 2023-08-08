import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ContentCard from "./ContentCard";

type Content = {
    id: number;
    image: string;
    heading?: string;
    text?: string;
};

type ContentCardCarouselProps = {
    content: Content[];
};

const ContentCardCarousel: React.FC<ContentCardCarouselProps> = ({
    content,
}) => {
    const sliderRef = React.useRef<Slider>(null);

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
                {content.map((content) => (
                    <ContentCard key={content.id} content={content} />
                ))}
            </Slider>
        </div>
    );
}

export default ContentCardCarousel;
