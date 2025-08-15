import data from "../../data/data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

import { useEffect, useState } from "react";

let slidesToShow = 5;
let slidesToScroll = 1;

function PrevArrow(props) {
  const { onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div
          className="absolute left-[-16px] top-[40%] cursor-pointer text-black hover:text-gray-700"
          onClick={onClick}
        >
          <IoIosArrowDropleftCircle size={30} />
        </div>
      )}
    </>
  );
}

function NextArrow(props) {
  const { onClick, slideCount, currentSlide, slidesToShow } = props;

  return (
    <>
      {currentSlide < slideCount - slidesToShow && (
        <div
          className="absolute right-[-16px] top-[40%] cursor-pointer text-black hover:text-gray-700"
          onClick={onClick}
        >
          <IoIosArrowDroprightCircle size={30} />
        </div>
      )}
    </>
  );
}


const ExploreSection = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width <= 650) {
    slidesToShow = 2;
    slidesToScroll = 2;
  } else if (width > 650 && width <= 1000) {
    slidesToShow = 3;
    slidesToScroll = 1;
  } else if (width > 1000 && width <= 1099) {
    slidesToShow = 4;
    slidesToScroll = 1;
  } else {
    slidesToShow = 5;
    slidesToScroll = 1;
  }

  var settings = {
    infinite: false,
    speed: 500,
    // slidesToShow: 5,
    // slidesToScroll: 1,
    slidesToShow,
    slidesToScroll,
    nextArrow: <NextArrow slidesToShow={slidesToShow} />,
    prevArrow: <PrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1099,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 1000,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 650,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    // ],
  };
  return (
    <div className="space-y-5 mt-10">
      <div>
        <h1 className="text-2xl font-bold text-black/90">Explore Pakistan</h1>
        <p className="text-lg">
          Discover adventures from mountains to coastline
        </p>
      </div>

      <Slider {...settings}>
        {data.explorePk.map((item) => (
          <div key={item.id} className="w-60 h-44">
            <img
              src={item.imageUrl}
              alt={`${item.location} image`}
              className="w-full h-full border border-gray-600 rounded-md object-cover cursor-pointer"
            />

            <h2 className="font-bold text-lg cursor-pointer">
              {item.location}
            </h2>
            <p>{item.properties} Properties</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExploreSection;