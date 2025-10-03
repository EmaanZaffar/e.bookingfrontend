import { hotelFacilities } from "@/config/hotel-options-config.ts";
import { useFormContext } from "react-hook-form";
import type { HotelFormData } from "./ManageHotelForm.tsx";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-2xl text-black/90 font-bold mb-5">Facilities</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {hotelFacilities.map((facility) => (
          <label
            key={facility}
            className="flex gap-1 text-gray-700 items-center text-md font-semibold"
          >
            <input
              type="checkbox"
              className="size-4"
              value={facility}
              {...register("facilities", {
                validate: (facilities: string[]) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "At least one facility must be selected";
                  }
                },
              })}
            />
            {facility}
          </label>
        ))}
      </div>

      {errors.facilities && (
        <div className="text-red-500 text-md font-bold pt-2">
          {errors.facilities.message}
        </div>
      )}
    </div>
  );
};

export default FacilitiesSection;
