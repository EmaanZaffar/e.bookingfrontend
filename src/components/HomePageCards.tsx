import type { HotelType } from "@/shared/types";
import { Link } from "react-router-dom";

type Props = {
  hotel: HotelType;
};

const HomePageCards = ({ hotel }: Props) => {
  return (
    <Link
      to={`/detail/${hotel._id}`}
      className="relative cursor-pointer overflow-hidden rounded-md"
    >
      <div className="h-[350px] hover:scale-110 transition">
        <img
          alt="hotel image"
          src={hotel.imageUrls[0]}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col absolute bottom-0 py-2 px-4 bg-black bg-opacity-50 w-full rounded-b-lg">
        <span className="text-white font-bold tracking-tight text-lg">
          {hotel.name}
        </span>
        <span className="text-white font-normal">
          {hotel.city}, {hotel.country}
        </span>
      </div>
    </Link>
  );
};

export default HomePageCards;
