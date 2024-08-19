import { Helmet } from "react-helmet";
import ContactContainer from "../../components/Container/contactContainer";
import Hero from "../../components/Hero";
import AboutContainer from "../../components/Container/aboutContainer";
import ContactForm from "../../components/Forms/ContactForm";

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Home | ISSAS</title>
      </Helmet>
      <ContactContainer />
      <Hero />
      <AboutContainer />
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 bg-white ">
        <div>Hello</div>
        <div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
