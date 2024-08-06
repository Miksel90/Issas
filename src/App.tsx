import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  ContactPage,
  ContactPeoplePage,
  ProjectPage,
  ServicePage,
  NotFoundPage,
} from "./pages";
import Layout from "./components";
import "./App.css";

/**
 * Root component of the application.
 *
 * @component
 * @returns {JSX.Element} The rendered root component.
 */
function App() {
  return (
    <div className="max-w-app mx-auto">
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicePage />} />
            <Route path="projects" element={<ProjectPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="contactPeople" element={<ContactPeoplePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
