import { hotelTypes } from "@/config/hotel-options-config.ts";
import { useFormContext } from "react-hook-form";
import type { HotelFormData } from "./ManageHotelForm.tsx";

const TypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  const typeWatch = watch("type");

  return (
    <div>
      <h2 className="text-2xl text-black/90 mb-3 font-bold">Type</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {hotelTypes.map((type) => (
          <label
            key={type}
            className={
              typeWatch === type
                ? "cursor-pointer bg-blue-300 text-center text-md text-gray-800 rounded-full px-4 py-2 font-semibold"
                : "cursor-pointer bg-blue-100 text-center text-md text-gray-700 rounded-full px-4 py-2 font-semibold"
            }
          >
            <input
              type="radio"
              value={type}
              className="hidden"
              {...register("type", { required: "Hotel type is required" })}
            />
            <span>{type}</span>
          </label>
        ))}
      </div>

      {errors.type && (
        <div className="text-red-500 font-bold text-md pt-2">
          {errors.type.message}
        </div>
      )}
    </div>
  );
};

export default TypeSection;
