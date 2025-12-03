import { Link } from "react-router-dom";
import hotel from "../../data/test-hotel.json";
import { BsMap, BsBuilding } from "react-icons/bs";
import { BiMoney, BiHotel, BiStar } from "react-icons/bi";

const MyHotels = () => {
  const hotelData = hotel.slice(0, 3);

  if (!hotel) {
    return <span>NO Hotels Found!</span>;
  }

  return (
    <div className="space-y-8 xl:mx-40">
      <span className="flex justify-between">
        <h1 className="text-3xl text-black/90 lg:text-4xl font-bold">
          My Hotels
        </h1>
        <Link
          to="/add-hotel"
          className="-mt-3 font-semibold text-xl text-white bg-blue-600 border-blue-800 px-5 py-2 hover:opacity-90 disabled:bg-gray-400"
        >
          Add Hotel
        </Link>
      </span>

      <div className="grid grid-cols-1 gap-6">
        {hotelData?.map((hotel, i) => (
          <div
            key={i}
            className="flex flex-col border border-slate-300 shadow-md hover:shadow-blue-200 hover:scale-95 transition rounded-lg p-5 gap-6"
          >
            <h2 className="text-2xl font-bold">{hotel.name}</h2>

            <div className="whitespace-pre-line">
              <div className="line-clamp-[8]">{hotel.description}</div>
            </div>

            <div className="flex flex-wrap text-nowrap gap-2">
              <div className="border border-blue-400 rounded-sm p-3 lg:p-4 flex items-center bg-blue-50">
                <BsMap className="mr-1" size={22} />
                {hotel.city}, {hotel.country}
              </div>
              <div className="border border-blue-400 rounded-sm p-3 lg:p-4 flex items-center bg-blue-50">
                <BsBuilding className="mr-1" size={22} />
                {hotel.type}
              </div>
              <div className="border border-blue-400 rounded-sm p-3 lg:p-4 flex items-center bg-blue-50">
                <BiMoney className="mr-1" size={22} />${hotel.pricePerNight} per
                night
              </div>
              <div className="border border-blue-400 rounded-sm p-3 lg:p-4 flex items-center bg-blue-50">
                <BiHotel className="mr-1" size={22} />
                {hotel.adultCount} adults, {hotel.childCount} children
              </div>
              <div className="border border-blue-400 rounded-sm p-3 lg:p-4 flex items-center bg-blue-50">
                <BiStar className="mr-1" size={22} />
                {hotel.starRating} Star Rating
              </div>
            </div>

            <span className="flex justify-end">
              <Link
                to={`/edit-hotel/${hotel._id}`}
                className="font-semibold text-xl bg-blue-600 text-white px-3 py-2 border border-blue-800 rounded-sm hover:opacity-90 disabled:bg-gray-400"
              >
                View Details
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
