import hotels from "../../data/test-hotel.json";
import { AiFillStar } from "react-icons/ai";
<<<<<<< HEAD
<<<<<<< HEAD
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-16px] top-[50%] cursor-pointer text-black hover:text-gray-700"
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle size={30} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-16px] top-[50%] cursor-pointer text-black hover:text-gray-700"
      onClick={onClick}
    >
      <IoIosArrowDropleftCircle size={30} />
    </div>
  );
}

// function SamplePrevArrow(props) {
=======
=======
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// function PrevArrow(props) {
<<<<<<< HEAD
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
=======
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "flex",
//         background: "black",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "30px",
//         width: "30px",
//       }}
//       onClick={onClick}
//     />
//   );
// }

<<<<<<< HEAD
<<<<<<< HEAD
const GuestCard = () => {
  const hotel = hotels.slice(5);
=======
=======
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-16px] top-[50%] cursor-pointer text-black hover:text-gray-700"
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle size={30} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-16px] top-[50%] cursor-pointer text-black hover:text-gray-700"
      onClick={onClick}
    >
      <IoIosArrowDropleftCircle size={30} />
    </div>
  );
}

const GuestCard = () => {
  const hotel = hotels.slice(5);
  console.log(hotel);
<<<<<<< HEAD
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
=======
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
<<<<<<< HEAD
<<<<<<< HEAD
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
=======
    // initialSlide: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
=======
    // initialSlide: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <div className="space-y-5 mt-10">
      <h1 className="text-2xl font-bold text-black/90">Homes guests love</h1>
=======
=======
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f

  return (
    <div className="mt-10 space-y-5">
      <h1 className="text-2xl font-bold text-black/90">Homes guests love</h1>

<<<<<<< HEAD
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
=======
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
      <Slider {...settings}>
        {hotel.map((hotel, i) => (
          <div
            key={i}
<<<<<<< HEAD
<<<<<<< HEAD
            className="flex relative cursor-pointer overflow-hidden rounded-md shadow-lg shadow-gray-200 h-[393px] sm:h-[380px] "
          >
            {/*md:h-[380px] h-[400px] above: only h-[405px] default */}
            {/* h-2/4 */}
            {/* image */}
            <div className="">
=======
            className="flex relative cursor-pointer overflow-hidden rounded-md shadow-lg shadow-gray-200 h-[393px] sm:h-[380px]"
          >
            <div>
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
=======
            className="flex relative cursor-pointer overflow-hidden rounded-md shadow-lg shadow-gray-200 h-[393px] sm:h-[380px]"
          >
            <div>
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
              <img
                alt="hotel image"
                src={hotel?.imageUrls[0]}
                className="w-full h-[205px] object-cover"
              />
            </div>

            {/* information */}
            <div className="m-2 flex flex-col">
              <span className="flex">
                {Array.from({ length: hotel?.starRating?.$numberInt }).map(
                  (_, index) => (
                    <AiFillStar
                      key={index}
                      className="fill-yellow-400"
<<<<<<< HEAD
<<<<<<< HEAD
                      size={16}
=======
                      size={18}
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
=======
                      size={18}
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
                    />
                  )
                )}
              </span>

              <span className="font-bold tracking-tight text-lg text-wrap">
                {hotel?.name}
              </span>
              <span className="text-sm pb-1">
                {hotel?.city}, {hotel?.country}
              </span>
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="flex items-center">
                <span className="bg-blue-900 p-1 mr-1 text-sm text-white rounded-t-md rounded-br-md">
                  {hotel?.numRating}
                </span>
                <span className="flex text-sm px-1 items-center justify-center">
                  {hotel?.rating}
                </span>
=======
=======
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f

              <div className="flex items-center">
                <span className="bg-blue-900 p-1 mr-1 text-white text-sm rounded-t-md rounded-br-md">
                  {hotel?.numRating}
                </span>
                <span className="text-sm px-1">{hotel?.rating}</span>
<<<<<<< HEAD
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
=======
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
                <span>.&nbsp;</span>
                <span className="text-sm">{hotel?.reviews} reviews</span>
              </div>

<<<<<<< HEAD
<<<<<<< HEAD
              <div className="flex items-center end-3 absolute bottom-2 mt-5 md:mt-8">
=======
              <div className="flex items-center absolute end-3 bottom-2 mt-5 md:mt-8">
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
=======
              <div className="flex items-center absolute end-3 bottom-2 mt-5 md:mt-8">
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
                <p className="text-sm">Starting from&nbsp;</p>
                <span className="font-bold">$</span>
                <span className="font-bold text-lg">
                  {hotel?.pricePerNight?.$numberInt}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GuestCard;
