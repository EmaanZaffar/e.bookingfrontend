import hotels from "../../data/test-hotel.json";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// function PrevArrow(props) {
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

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // initialSlide: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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

  return (
    <div className="mt-10 space-y-5">
      <h1 className="text-2xl font-bold text-black/90">Homes guests love</h1>

      <Slider {...settings}>
        {hotel.map((hotel, i) => (
          <div
            key={i}
            className="flex relative cursor-pointer overflow-hidden rounded-md shadow-lg shadow-gray-200 h-[393px] sm:h-[380px]"
          >
            <div>
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
                      size={18}
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

              <div className="flex items-center">
                <span className="bg-blue-900 p-1 mr-1 text-white text-sm rounded-t-md rounded-br-md">
                  {hotel?.numRating}
                </span>
                <span className="text-sm px-1">{hotel?.rating}</span>
                <span>.&nbsp;</span>
                <span className="text-sm">{hotel?.reviews} reviews</span>
              </div>

              <div className="flex items-center absolute end-3 bottom-2 mt-5 md:mt-8">
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
