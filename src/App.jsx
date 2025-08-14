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
<<<<<<< HEAD
<<<<<<< HEAD
import BrowseSection from "./components/BrowseByType";
import InclusiveSection from "./components/AllInclusive";
import ExploreSection from "./components/ExploreSection";
import TestimonialCard from "./components/Card";
=======
import InclusiveSection from "./components/AllInclusive";
import ExploreSection from "./components/ExploreSection";
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
=======
import InclusiveSection from "./components/AllInclusive";
import ExploreSection from "./components/ExploreSection";
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f

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
<<<<<<< HEAD
<<<<<<< HEAD
              <BrowseSection />
              <ExploreSection />
              <InclusiveSection />
              <TestimonialCard />
=======
              <ExploreSection />
              <InclusiveSection />
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
=======
              <ExploreSection />
              <InclusiveSection />
>>>>>>> a21c06bc84f06530a834e7adb7fee466ef59948f
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
