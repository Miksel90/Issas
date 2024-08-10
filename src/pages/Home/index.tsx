import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div className="w-full flex items-center bg-black">
      <Helmet>
        <title>Home | ISSAS</title>
      </Helmet>
      <div className="w-full text-center text-white">Hello</div>
    </div>
  );
};

export default HomePage;
