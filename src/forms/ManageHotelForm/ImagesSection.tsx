import { useFormContext } from "react-hook-form";
import type { HotelFormData } from "./ManageHotelForm.tsx";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<HotelFormData>();

  const existingImageUrls = watch("imageUrls");

  return (
    <div>
      <h2 className="text-2xl text-black/90 font-bold mb-5">Images</h2>

      <div className="border border-gray-400 rounded p-4 sm:p-5 flex flex-col gap-4">
        {existingImageUrls && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {existingImageUrls.map((url, i) => (
              <div key={i} className="relative group">
                <img
                  src={url}
                  className="h-52 w-full object-cover min-h-full"
                />

                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity:100 transition-opacity duration-300 text-white">
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full text-gray-700 font-normal"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totalLength =
                imageFiles.length + (existingImageUrls?.length || 0);

              if (totalLength === 0) {
                return "At least one image should be added";
              }

              if (totalLength > 6) {
                return "Total number of images cannot be more than 6";
              }
            },
          })}
        />
      </div>

      {errors.imageFiles && (
        <div className="text-red-500 text-md font-bold pt-2">
          {errors.imageFiles.message}
        </div>
      )}
    </div>
  );
};

export default ImagesSection;
