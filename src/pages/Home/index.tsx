import { Helmet } from "react-helmet";
import ContactContainer from "../../components/Container/contactContainer";
import Hero from "../../components/Hero";

import ContactForm from "../../components/Forms/ContactForm";

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Home | ISSAS</title>
      </Helmet>
      <ContactContainer />
      <Hero />
      <div className="flex justify-center items-center p-8 ">
        <div className="md:container">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
