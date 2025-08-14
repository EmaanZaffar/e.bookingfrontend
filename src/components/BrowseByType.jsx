import data from "../../data/data.json";
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
      className="absolute right-[-16px] top-[40%] cursor-pointer text-black hover:text-gray-700"
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
      className="absolute left-[-16px] top-[40%] cursor-pointer text-black hover:text-gray-700"
      onClick={onClick}
    >
      <IoIosArrowDropleftCircle size={30} />
    </div>
  );
}

const BrowseSection = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="mt-10 space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-black/90">
          Browse by property type
        </h1>
        <p className="text-lg">Search on which type of property you want</p>
      </div>

      <Slider {...settings}>
        {data.browseByType.map((item) => (
          <div key={item.id} className="w-60 h-44 object-cover">
            <img
              src={item.imageUrl}
              alt={item.type}
              className="w-full h-full border border-gray-600 rounded-md object-cover cursor-pointer hover:scale-95 transition"
            />
            <h2 className="font-bold text-lg cursor-pointer">{item.type}</h2>
            <p className="text-base">{item.properties} Properties</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrowseSection;
