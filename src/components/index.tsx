import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

/**
 * Layout component that defines the structure of the application with a header, footer, and content area.
 *
 * @component
 * @example
 * return (
 *   <Layout />
 * )
 */
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
