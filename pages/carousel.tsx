import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./carouselcard";

export default function Carousel() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="carousel__wrapper">
            <Slider {...settings}>
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
            </Slider>
        </div>
    );
} 