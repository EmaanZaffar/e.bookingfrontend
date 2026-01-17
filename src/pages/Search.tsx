import FacilitiesFilter from "@/components/FacilitiesFilter";
import HotelTypesFilter from "@/components/HotelTypesFilter";
import PriceFilter from "@/components/PriceFilter";
import StarRatingFilter from "@/components/StarRatingFilter";
import hotelData from "../../data/test-hotel.json";
import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import SearchResultsCard from "@/components/SearchResultsCard";
import Pagination from "@/components/Pagination";

const Search = () => {
  const [selectedStars, setSelectedStars] = useState<string[]>([]);
  const [selectedHotelTypes, setSelectedHotelTypes] = useState<string[]>([]);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<number>(0);
  const [filterToggle, setFilterToggle] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  // handlers

  const handleStarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const starRating = event.target.value;

    setSelectedStars((prevStars) =>
      event.target.checked
        ? [...prevStars, starRating]
        : prevStars.filter((star) => star !== starRating)
    );
  };

  const handleHotelTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const hotelType = event.target.value;

    setSelectedHotelTypes((prevHotelTypes) =>
      event.target.checked
        ? [...prevHotelTypes, hotelType]
        : prevHotelTypes.filter((type) => type !== hotelType)
    );
  };
  const handleFacilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const facility = event.target.value;

    setSelectedFacilities((prevFacilities) =>
      event.target.checked
        ? [...prevFacilities, facility]
        : prevFacilities.filter((prevFacilities) => prevFacilities !== facility)
    );
  };

  const pagination = 3; //number of pages

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      {/* filter section */}
      <div
        className="border border-slate-400 p-4 sm:p-5 h-fit lg:sticky top-7 overflow-auto max-h-[93vh]
       [&::-webkit-scrollbar]:w-1.5
       [&::-webkit-scrollbar-track]:bg-gray-100
       [&::-webkit-scrollbar-thumb]:bg-gray-300
       
      "
      >
        {/* small to medium screens */}
        <div className="lg:hidden">
          {/* by default filter */}
          <div
            className={
              filterToggle
                ? `flex items-center justify-between w-full border-b border-slate-400 pb-4`
                : `flex items-center justify-between w-full`
            }
          >
            <h3 className="text-lg font-semibold">Filter by:</h3>

            <div className="lg:hidden">
              {filterToggle && (
                <AiOutlineMenuFold
                  size={26}
                  onClick={() => setFilterToggle(false)}
                />
              )}

              {!filterToggle && (
                <AiOutlineMenuUnfold
                  size={26}
                  onClick={() => setFilterToggle(true)}
                />
              )}
            </div>
          </div>

          {/* if filter is open */}
          {filterToggle && (
            <div>
              <StarRatingFilter
                selectedStars={selectedStars}
                onChange={handleStarChange}
              />

              <HotelTypesFilter
                selectedHotelTypes={selectedHotelTypes}
                onChange={handleHotelTypeChange}
              />

              <FacilitiesFilter
                selectedFacilities={selectedFacilities}
                onChange={handleFacilityChange}
              />

              <PriceFilter
                selectedPrice={selectedPrice}
                onChange={(value?: number) => setSelectedPrice(value || 0)}
              />
            </div>
          )}
        </div>

        {/* large and Onwards screens */}
        <div className="max-lg:hidden">
          <h4 className="text-lg font-bold border-b border-slate-400 pb-5">
            Filter by:
          </h4>
          <StarRatingFilter
            selectedStars={selectedStars}
            onChange={handleStarChange}
          />

          <HotelTypesFilter
            selectedHotelTypes={selectedHotelTypes}
            onChange={handleHotelTypeChange}
          />

          <FacilitiesFilter
            selectedFacilities={selectedFacilities}
            onChange={handleFacilityChange}
          />

          <PriceFilter
            selectedPrice={selectedPrice}
            onChange={(value?: number) => setSelectedPrice(value || 0)}
          />
        </div>
      </div>

      {/* hotel cards section */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
          <span className="text-2xl font-bold">12 Hotels found</span>

          <select
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
            className="p-2 border border-slate-400 outline-blue-600"
          >
            <option value="">Sort By</option>
            <option value="starRating">Star Rating</option>
            <option value="pricePerNightAsc">
              Price Per Night (low to high)
            </option>
            <option value="pricePerNightDesc">
              Price Per Night (high to low)
            </option>
          </select>
        </div>

        {hotelData.map((hotel) => (
          <SearchResultsCard key={hotel._id} hotel={hotel} />
        ))}

        <Pagination
          page={pagination || 1}
          pages={pagination || 1}
          onPageChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
};

export default Search;
