import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  ContactPage,
  ContactPeoplePage,
  ProjectPage,
  ServicePage,
  NotFoundPage,
  PersonvernPage,
} from "./pages";
import Layout from "./components/Layout";
import "./App.css";
import Translator from "./components/Translator";

/**
 * Root component of the application.
 *
 * @component
 * @returns {TSX.Element} The rendered root component.
 */
function App() {
  return (
    <div className="max-w-app mx-auto">
      <>
        <Translator>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="services" element={<ServicePage />} />
              <Route path="projects" element={<ProjectPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="contactPeople" element={<ContactPeoplePage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="personvern" element={<PersonvernPage />} />
            </Route>
          </Routes>
        </Translator>
      </>
    </div>
  );
}

export default App;
