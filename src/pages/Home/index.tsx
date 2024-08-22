import { Helmet } from "react-helmet";
import ContactContainer from "../../components/Container/contactContainer";
import Hero from "../../components/Hero";

import ContactForm from "../../components/Forms/ContactForm";
import ContactInfoContainer from "../../components/Container/contactInfoContainer";

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Home | ISSAS</title>
      </Helmet>
      <ContactContainer />
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 p-4  gap-10 md:gap-5">
        <div className="">
          <ContactInfoContainer />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
