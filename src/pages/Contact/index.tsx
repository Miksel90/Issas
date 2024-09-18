import bannerImage from "../../assets/Images/IssasHero2.webp";
import ContactForm from "../../components/Forms/ContactForm";
import DefaultButton from "../../components/Buttons/DefaultButton";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslator } from "../../components/Translator"; // Import useTranslator

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const { translate } = useTranslator(); // Use the translate function

  const handleClick = () => {
    navigate("/contactPeople");
  };

  return (
    <div className="flex flex-col items-center font-primary">
      <Helmet>
        <title>{translate("Kontakt")} | ISSAS</title>
      </Helmet>
      <div className="w-full text-white relative text-shadow-xl">
        <img
          src={bannerImage}
          alt={translate("Header Background")}
          className="w-full h-28 object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold font-primary">
            {translate("Kontakt Oss")}
          </h1>
        </div>
      </div>
      <div className="mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">{translate("ISSAS GULV")}</h2>
            <p className="mt-2">
              <strong>{translate("Besøksadresse")}</strong>
              <br />
              Kveldroveien 1
              <br />
              1407 Vinterbro
            </p>
            <p className="mt-4">
              <strong>{translate("Kontaktdetaljer")}</strong>
              <br />
              Post@issas.no
              <br />
              +47 669 63 500
            </p>
          </div>

          <div className="flex justify-start">
            <DefaultButton variant="no-hover" onClick={handleClick}>
              {translate("Kontaktpersoner")}
            </DefaultButton>
          </div>

          <p className="mt-6">
            {translate(
              "Kjører du? Eller skal du levere vare? Da finner du oss ved Vinterbro."
            )}
          </p>

          <div className="mt-4">
            <div
              className="relative"
              style={{ paddingBottom: "100%", height: 0 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2010.9148593668654!2d10.773374477378145!3d59.7342354785441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464142daa958f7db%3A0xb2239f582e6f6f3!2sKveldroveien%201%2C%201407%20Vinterbro!5e0!3m2!1sen!2sno!4v1724243009171!5m2!1sen!2sno"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={translate("Google Maps Location")}
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
