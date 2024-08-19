import { Helmet } from "react-helmet";
import ContactContainer from "../../components/Container/contactContainer";
import Hero from "../../components/Hero";

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Home | ISSAS</title>
      </Helmet>
      <ContactContainer />

      <Hero />
    </main>
  );
};

export default HomePage;
