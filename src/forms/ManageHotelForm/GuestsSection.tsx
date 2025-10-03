import { useFormContext } from "react-hook-form";
import type { HotelFormData } from "./ManageHotelForm.tsx";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-2xl text-black/90 font-bold mb-5">Guests</h2>

      <div className="grid grid-cols-2 border border-blue-500 rounded-md bg-blue-100 p-3 pt-2 pb-5 gap-3 md:px-6 md:pt-3 md:pb-7 md:gap-6">
        <label className="text-gray-800 text-md font-semibold flex-1">
          Adults
          <input
            type="number"
            min={1}
            max={10}
            className="border border-1 border-gray-400 outline-blue-600 rounded w-full py-2 px-3 font-normal"
            {...register("adultCount", {
              required: "This field is required",
            })}
          />
          {errors.adultCount?.message && (
            <div className="text-red-500 text-md font-bold pt-2">
              {errors.adultCount?.message}
            </div>
          )}
        </label>

        <label className="text-gray-800 text-md font-semibold flex-1">
          Children
          <input
            type="number"
            min={0}
            max={10}
            defaultValue={0}
            className="border border-1 border-gray-400 outline-blue-600 rounded w-full py-2 px-3 font-normal"
            {...register("childCount")}
          />
          {errors.childCount?.message && (
            <div className="text-red-500 text-md font-bold pt-2">
              {errors.childCount?.message}
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestsSection;
