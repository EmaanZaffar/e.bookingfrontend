import { MdTravelExplore } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

import "./searchBar.css";

const SearchBar = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  const [search, setSearch] = useState(false);

  const minDate = new Date();
  const maxDate = new Date();

  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <div>
      <div
        className={`-mt-20 border max-w-max p-1 hover:border-red-400 ${
          search && "hidden"
        }`}
      >
        <div
          onClick={() => setSearch(true)}
          className="flex gap-2 items-center bg-white max-w-max p-2 pr-6 cursor-pointer"
        >
          <IoSearch size={26} className="fill-[#2151d9]" />
          <button className="text-xl font-semibold text-blue-700">
            Search
          </button>
        </div>
      </div>

      {search && (
        <form className="search-bar -mt-16 lg:-mt-14 border-4 border-orange-400 bg-white rounded-sm shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-2 p-2 md:p-3">
          <div className="flex flex-row border border-gray-300 rounded items-center flex-1 bg-white p-2 gap-2">
            <MdTravelExplore size={25} />
            <input
              placeholder="Where are you going?"
              className="text-md w-full focus:outline-none"
            />
          </div>

          <div className="flex border border-gray-300 bg-white p-1 px-2 rounded justify-between gap-2">
            <label className="flex items-center">
              Adult:
              <input
                type="number"
                min={1}
                max={10}
                defaultValue={1}
                className="w-full p-1 focus:outline-none font-bold"
              />
            </label>

            <label className="flex items-center">
              Children:
              <input
                type="number"
                min={0}
                max={10}
                defaultValue={0}
                className="w-full p-1 focus:outline-none font-bold"
              />
            </label>
          </div>

          <div>
            <DatePicker
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              startDate={checkIn}
              endDate={checkOut}
              minDate={minDate}
              maxDate={maxDate}
              placeholderText="Check-in Date"
              wrapperClassName="min-w-full"
              className="border border-gray-300 rounded p-2 bg-white focus:outline-none min-w-full"
            />
          </div>

          <div>
            <DatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              startDate={checkIn}
              endDate={checkOut}
              minDate={minDate}
              maxDate={maxDate}
              placeholderText="Check-out Date"
              wrapperClassName="min-w-full"
              className="border border-gray-300 rounded p-2 bg-white focus:outline-none min-w-full"
            />
          </div>

          <div className="flex gap-1 items-center justify-center">
            <button className="w-2/3 bg-blue-600 rounded-sm text-white p-2 font-semibold text-xl hover:bg-blue-500">
              Search
            </button>
            <button className="w-1/3 bg-red-600 rounded-sm text-white p-2 font-semibold text-xl hover:bg-red-500">
              Clear
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SearchBar;
