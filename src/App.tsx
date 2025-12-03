import Layout from "./layout/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import GuestCard from "./components/GuestCard";
import BrowseSection from "./components/BrowseByType";
import InclusiveSection from "./components/AllInclusive";
import TestimonialCard from "./components/Card";
import ExploreSection from "./components/ExploreSection";
import AddHotel from "./pages/AddHotel";
import MyHotels from "./pages/MyHotels";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
              <GuestCard />
              <BrowseSection />
              <ExploreSection />
              <InclusiveSection />
              <TestimonialCard />
            </Layout>
          }
        />

        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />

        <Route
          path="/sign-in"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />

        <Route
          path="/add-hotel"
          element={
            <Layout>
              <AddHotel />
            </Layout>
          }
        />

        <Route
          path="/my-hotels"
          element={
            <Layout>
              <MyHotels />
            </Layout>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
