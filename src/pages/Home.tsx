import hotels from "../../data/test-hotel.json";
import HomePageCards from "../components/HomePageCards";

const Home = () => {
  const topRowHotels = hotels.slice(0, 2);
  const bottomRowHotels = hotels.slice(2, 5);

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-black/90">
          Latest Destinations
        </h1>
        <p className="text-lg">Most recent destination added by our hosts</p>
      </div>

      <div className="grid gap-4 md:gap-6">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
          {topRowHotels.map((hotel, i) => (
            <HomePageCards key={i} hotel={hotel} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bottomRowHotels.map((hotel, i) => (
            <HomePageCards key={i} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
