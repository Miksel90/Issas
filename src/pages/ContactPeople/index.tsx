import bannerImage from "../../assets/Images/IssasHero2.webp";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { Helmet } from "react-helmet";
import { people } from "./contactData";
import { useTranslator } from "../../components/Translator/useTranslator";

const ContactPeoplePage: React.FC = () => {
  const { translate } = useTranslator();

  return (
    <div className="font-primary flex flex-col items-center">
      <Helmet>
        <title>{translate("Kontaktpersoner")} | ISSAS</title>
      </Helmet>
      <div className="w-full text-white relative text-shadow-xl">
        <img
          src={bannerImage}
          alt={translate("Header Background")}
          className="w-full h-28 object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold font-primary text-white text-shadow-lg">
            {translate("Kontaktpersoner")}
          </h1>
        </div>
      </div>

      <div className="py-10 flex flex-wrap justify-center gap-8">
        {people.map((person, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 w-72">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-30 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{person.name}</h2>
              <p className="text-black font-medium">
                {translate(person.title)}
              </p>
              <div className="mt-4 flex items-center text-lg">
                <IoPhonePortraitSharp className="h-5 w-5 mr-2" />
                <span>{person.phone}</span>
              </div>
              <div className="mt-2 flex items-center text-lg">
                <IoMailSharp className="h-5 w-5 mr-2" />
                <a href={`mailto:${person.email}`} className="hover:underline">
                  {person.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPeoplePage;
