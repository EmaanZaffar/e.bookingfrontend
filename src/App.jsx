import Layout from "./layout/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout></Layout>} />
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
      </Routes>
    </Router>
  );
};

export default App;
