import { useFormContext } from "react-hook-form";
import type { HotelFormData } from "./ManageHotelForm.tsx";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-3xl lg:text-4xl mb-2 text-center">
        Add Hotel
      </h1>

      <label className="text-gray-700 text-base font-bold flex-1 relative">
        Name
        {errors.name && (
          <div className="text-red-500 mb-2 pt-2 pl-3 absolute">
            {errors.name.message}
          </div>
        )}
        <input
          type="text"
          className="border border-1 border-gray-400 outline-blue-600 rounded w-full p-2 font-normal caret-blue-600"
          {...register("name", { required: "Hotel's Name is required" })}
        />
      </label>

      <div className="flex gap-4">
        <label className="text-gray-700 text-base font-bold flex-1 relative">
          City
          {errors.city && (
            <div className="text-red-500 mb-2 pt-2 pl-3 absolute">
              {errors.city.message}
            </div>
          )}
          <input
            type="text"
            className="border border-1 border-gray-400 outline-blue-600 rounded w-full p-2 font-normal caret-blue-600"
            {...register("city", { required: "City is required" })}
          />
        </label>

        <label className="text-gray-700 text-base font-bold flex-1 relative">
          Country
          {errors.country && (
            <div className="text-red-500 mb-2 pt-2 pl-3 absolute">
              {errors.country.message}
            </div>
          )}
          <input
            type="text"
            className="border border-1 border-gray-400 outline-blue-600 rounded w-full p-2 font-normal caret-blue-600"
            {...register("country", { required: "Country is required" })}
          />
        </label>
      </div>

      <label className="text-gray-700 text-base font-bold flex-1 relative">
        Description
        {errors.description && (
          <div className="text-red-500 mb-2 pt-2 pl-3 absolute">
            {errors.description.message}
          </div>
        )}
        <textarea
          rows={10}
          className="border border-1 border-gray-400 outline-blue-600 rounded w-full p-2 font-normal caret-blue-600"
          {...register("description", { required: "Description is required" })}
        ></textarea>
      </label>

      <label className="text-gray-700 text-base font-bold relative max-w-[50%]">
        Price Per Night
        {errors.pricePerNight && (
          <div className="text-red-500 mb-2 pt-2 pl-3 absolute">
            {errors.pricePerNight.message}
          </div>
        )}
        <input
          type="number"
          min={1}
          className="border border-1 border-gray-400 outline-blue-600 rounded w-full p-2 font-normal caret-blue-600"
          {...register("pricePerNight", {
            required: "Price per night is required",
          })}
        />
      </label>

      <label className="text-gray-700 text-base font-bold max-w-[50%]">
        Star Rating
        <select
          className="border border-1 border-gray-400 outline-blue-600 rounded w-full p-2 font-normal"
          {...register("starRating", { required: "Hotel's Name is required" })}
        >
          <option value="">Select a Rating</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        {errors.starRating && (
          <div className="text-red-500 mb-2 pt-2 pl-3">
            {errors.starRating.message}
          </div>
        )}
      </label>
    </div>
  );
};

export default DetailsSection;
