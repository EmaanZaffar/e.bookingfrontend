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
            {/* img hover:scale-90 transition */}
            <div className="">
              <img
                src={item.imageUrl}
                alt="image"
                className="object-cover border border-gray-600 rounded-md cursor-pointer"
              />

              <span className="flex absolute top-2 right-2 transition-all translate-x-32 duration-700 group-hover:-translate-x-2">
                {Array.from({ length: item?.starRating }).map((_, index) => (
                  <AiFillStar
                    key={index}
                    className="fill-yellow-300"
                    size={19}
                  />
                ))}
              </span>
            </div>

            <h3 className="font-bold tracking-tighter text-lg cursor-pointer">
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
