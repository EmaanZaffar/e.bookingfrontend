import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection.tsx";
import TypeSection from "./TypeSection.tsx";
import FacilitiesSection from "./FacilitiesSection.tsx";
import GuestsSection from "./GuestsSection.tsx";
import ImagesSection from "./ImagesSection.tsx";

export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  pricePerNight: number;
  starRating: number;
  type: string;
  facilities: string[];
  adultCount: number;
  childCount: number;
  imageFiles: FileList;
  imageUrls: string[];
};

const ManageHotelForm = () => {
  const formMethods = useForm<HotelFormData>();
  const { handleSubmit } = formMethods;

  const onSubmit = handleSubmit((formData: HotelFormData) => {
    console.log(formData);
  });

  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col gap-10 lg:px-28" onSubmit={onSubmit}>
        <DetailsSection />
        <TypeSection />
        <FacilitiesSection />
        <GuestsSection />
        <ImagesSection />

        <span className="flex justify-end">
          <button
            type="submit"
            className="font-semibold text-xl text-white bg-blue-600 px-5 py-2 border-2 border-blue-700 rounded-sm hover:opacity-90 disabled:bg-gray-400"
          >
            Save
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageHotelForm;
