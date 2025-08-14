import data from "../../data/data.json";
import { AiFillStar } from "react-icons/ai";

const InclusiveSection = () => {
  return (
    <div className="my-10 space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-black/90">All Inclusive</h1>
        <p className="text-lg">Hotels that offers everything you need</p>
      </div>

      <div className="flex gap-5">
        {data.allInclusive.map((item) => (
          <div
            key={item.id}
            className="w-56 h-56 relative group overflow-hidden object-cover"
          >
<<<<<<< HEAD
<<<<<<< HEAD
            {/* img hover:scale-90 transition */}
            <div className="">
=======
            <div>
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
=======
            <div>
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
              <img
                src={item.imageUrl}
                alt="image"
                className="object-cover border border-gray-600 rounded-md cursor-pointer"
              />

<<<<<<< HEAD
<<<<<<< HEAD
              <span className="transition-all flex absolute translate-x-32 duration-700 group-hover:-translate-x-2 top-2 right-2">
=======
              <span className="flex absolute top-2 right-2 transition-all translate-x-32 duration-700 group-hover:-translate-x-2">
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
=======
              <span className="flex absolute top-2 right-2 transition-all translate-x-32 duration-700 group-hover:-translate-x-2">
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
                {Array.from({ length: item?.starRating }).map((_, index) => (
                  <AiFillStar
                    key={index}
                    className="fill-yellow-300"
                    size={19}
                  />
                ))}
              </span>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="font-bold tracking-tight text-lg cursor-pointer">
=======

            <h3 className="font-bold tracking-tighter text-lg cursor-pointer">
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
=======

            <h3 className="font-bold tracking-tighter text-lg cursor-pointer">
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
              {item.name}
            </h3>
            <p className="text-md">{item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InclusiveSection;
