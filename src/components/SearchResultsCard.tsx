import type { HotelType } from "@/shared/types";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

type Props = {
  hotel: HotelType;
};

const SearchResultsCard = ({ hotel }: Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-400 hover:shadow-md hover:shadow-blue-200 scale-95 hover:scale-100 transition p-3 lg:p-5 gap-6">
      <div className="w-full h-[315px]">
        <img
          src={hotel.imageUrls[0]}
          className="w-full h-full rounded-md object-cover object-center"
        />
      </div>

      <div className="grid grid-rows-[0.7fr_2fr_1.5fr] sm:grid-rows-[1fr_2fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <Link
              to={`/details/${hotel._id}`}
              className="text-2xl font-bold cursor-pointer hover:text-blue-600"
            >
              {hotel.name}
            </Link>

            <span className="flex">
              {Array.from({ length: hotel?.starRating }).map((_, index) => (
                <AiFillStar key={index} size={18} className="fill-yellow-400" />
              ))}
            </span>
          </div>

          <div className="font-semibold text-blue-700">{`${hotel.city}, ${hotel.country}`}</div>
        </div>

        <div className="max-sm:my-4">
          <div className="line-clamp-[6]">{hotel.description}</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 items-end whitespace-nowrap">
          <div className="flex gap-1 items-center">
            {hotel.facilities.slice(0, 2).map((facility) => (
              <span className="bg-slate-200 bg-opacity-80 p-2 px-4 rounded font-bold text-sm">
                {facility}
              </span>
            ))}

            <span className="text-sm ml-1">
              {hotel.facilities.length > 2 &&
                `+${hotel.facilities.length - 2} more`}
            </span>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="font-bold text-lg">
              ${hotel.pricePerNight}{" "}
              <span className="font-semibold">(per night)</span>
            </span>

            <Link
              to={`/detail/${hotel._id}`}
              className="font-semibold text-xl bg-gradient-to-r from-blue-600 to-purple-400 text-white p-2 px-4 border-2 border-blue-700 hover:opacity-95 disabled:bg-gray-400"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;
