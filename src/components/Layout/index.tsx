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
    <div className="bg-primary w-full flex flex-col min-h-screen px-1">
      <Header />
      <main className="flex-grow w-full pt-20 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
